var juic;juic||(juic={}),juic.Config=surj.Config,juic.validate=surj.Config.validate,juic.Logger=surj.Logger,juic._idCharacter=":",juic.isComponentJSLoaded||(juic.dump=function(a){function b(a){return"\""+a.replace(/([\"\\])/g,"\\$1").replace(/\r\n?|\n/g,"\\n")+"\""}switch(typeof a){case"object":if(a)switch(a.constructor){case Array:for(var c=[],d=0;d<a.length;++d)c[d]=juic.dump(a[d]);return"["+c.join()+"]";case Date:return"new Date("+a.getFullYear()+","+a.getMonth()+","+a.getDate()+")";default:var c=[];for(var d in a)c.push(b(d)+":"+juic.dump(a[d]));return"{"+c.sort().join()+"}";}else return"null";case"unknown":case"undefined":return"undefined";case"number":return a;case"string":return b(a);case"function":return"\"function\"";default:return a+"";}},juic.assert=function(a,b){a||alert("Assertion failed: "+b)},juic.noConflict=function(){window.$===juic.$&&(window.$=juic._$,delete juic._$)},juic._$=window.$,juic.$=function(a){return"string"==typeof a?document.getElementById(a):a},juic.set=function(a,b){for(var c in b){var d=a[c],e=b[c];"object"==typeof e&&d?juic.set(d,e):a[c]=e}return a},function(){var a=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;juic.extend=function(b,c,d){function e(){}var f=c.prototype;e.prototype=f;var g=new e;for(var h in a.test(b)&&(g._super=function(){this._super=arguments.callee._super,c.apply(this,arguments),this._super=arguments.callee},g._super._super=f._super),d)if(g[h]=d[h],"function"==typeof g[h]&&"function"==typeof f[h]&&a.test(d[h])){f[h];g[h]=function(a,b){return function(){var c=this._super;this._super=f[a];var d=b.apply(this,arguments);return this._super=c,d}}(h,g[h])}return b.prototype=g,b}}(),juic.escapeHTML=function(a,b,c){return a||null==a||isNaN(a)||(a+=""),"string"!=typeof b&&(b="\n"),"string"!=typeof c&&(c=""),(a||"").toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;").replace(/\n|\r\n?/g,b)||c},juic.escapeHTMLIfNeeded=function(a,b){return b?juic.escapeHTML(a):a},juic.SAFE_XHTML=/^(?:[^<>&"']|(?:&(?:[a-z]{2,}|#\d+|#x[\da-f]+);))*$/i,juic.maybeEscapeHTML=function(a){return a||null==a||isNaN(a)||(a+=""),!a||juic.SAFE_XHTML.test(a)?a:juic.escapeHTML(a)},juic.EventTarget=function(a){if(juic.assert(1>=arguments.length,"Too many arguments to juic.EventTarget"),juic.assert("null"==typeof a||"undefined"==typeof a||a.constructor==Array,"eventTypes argument to juic.EventTarget must be an array or null"),a){var b={};this._allowedEvents&&juic.set(b,this._allowedEvents);for(var c=0,d=a.length;c<d;c++)juic.assert(juic.EventTarget.isValidEventType(a[c]),"Invalid event type name in juic.EventTarget: "+a[c]),b[a[c]]=1;this._allowedEvents=b}},juic.EventTarget.isValidEventType=function(a){return"string"==typeof a&&!/^on/.test(a)},juic.EventTarget.Event=function(a,b){juic.set(this,b).type=a},juic.EventTarget.prototype=function(){function validEvents(a){var b=[];for(var c in a._allowedEvents)b.push(c);return b.join(", ")}return{addEventListener:function(a,b,c){juic.assert(juic.EventTarget.isValidEventType(a),"Invalid event type name in addEventListener: "+a),juic.assert(!this._allowedEvents||this._allowedEvents[a],"Event type '"+a+"' (within addEventListener) is not dispatched by this object, valid events are: "+validEvents(this)),juic.assert(b,"handler is null in addEventListener"),c?juic.assert(b[c],"Invalid callback in addEventListener, does not exist on handler."):juic.assert(b.handleEvent&&"function"==typeof b.handleEvent,"Event handler does not provide handleEvent function in addEventListener");var d=this._events||(this._events={});(d[a]||(d[a]=[])).push({handler:b,callback:c?c:null})},removeEventListener:function(a,b){var c,d=this._events;if(d&&(c=d[a])){for(var e=c.length;0<=--e;)c[e].handler===b&&c.splice(e,1);c.length||delete d[a]}},generateFDClasses:function(a,b,c){return Util.generateFDClasses(a,b,c)},isFioriFDEnabled:function(){return Util.isFioriFDEnabled()},dispatchEvent:function(evt){juic.assert(evt&&evt.constructor==juic.EventTarget.Event,"Attempt to dispatch non-Event: "+evt),juic.assert(juic.EventTarget.isValidEventType(evt.type),"Invalid event type name in dispatchEvent: "+evt.type),juic.assert(!this._allowedEvents||this._allowedEvents[evt.type],"Event type '"+evt.type+"' (within dispatchEvent) is not dispatched by this object, valid events are: "+validEvents(this)),evt.target=this;var evts=this._events;if(evts&&(evts=evts[evt.type])){for(var ex,tmp=evts.slice(0),i=0;i<tmp.length;++i)try{var handler=tmp[i].handler,callback=tmp[i].callback;callback?handler[callback](evt):handler.handleEvent(evt)}catch(e){ex=e,"undefined"==typeof juic.Logger?eval("debugger"):juic.Logger.error("Uncaught exception",ex)}if(ex)throw ex}},dispatch:function(a,b){this.dispatchEvent(new juic.EventTarget.Event(a,b))}}}(),juic.Component=function(a){juic.EventTarget.call(this,a)},juic.Component.prototype=function(){var a=0;return juic.set(new juic.EventTarget,{getReferenceId:function(){return this.id},registerAutomationName:function(a){return a},render:function(a){juic.render(this,a)},renderHtml:function(a){juic.assert(!1,"ERROR: the subclasses must override renderHtml(): "+a)},register:function(){juic.assert(!this.id||!this.isRegistered(),"Component already registered!"),"string"==typeof juic._nextId?(this.id=juic._nextId,delete juic._nextId):this.id=++a+juic._idCharacter,juic.Component._registry[this.id]=this},setId:function(a){delete juic.Component._registry[this.id],juic.Component._registry[this.id=a]=this},unregister:function(){juic.assert(this.isRegistered(),"Component not registered! "+this.id),delete this._events,delete juic.Component._registry[this.id]},isRegistered:function(){return!!juic.Component._registry[this.id]},cleanup:function(){this.unregister()},setValue:function(a){juic.assert(!1,"ERROR: the subclasses must override setValue(): "+a)},getValue:function(){return null},serializeState:function(){juic.assert(!1,"ERROR: the subclasses must override serializeState(): ")},deserializeState:function(a){juic.assert(!1,"ERROR: the subclasses must override deserializeState(): "+a)},fireCode:function(a){juic.assert(this.id,"Component not registered (within fireCode)!"),juic.assert("function"==typeof this[a],"Not a function (within fireCode): "+a);for(var b="juic.fire(\""+this.id+"\",\""+a+"\"",c=1;c<arguments.length;++c)b+=","+juic.dump(arguments[c]);return juic.escapeHTML(b+",event);")}})}(),juic.Component._registry={},juic.render=function(a,b){var c=juic.createRenderContext();a.renderHtml(c),c.renderInto(b)},function(){function a(){this._html=[],this.length=0}juic.createRenderContext=function(){return new a},juic.addRenderer=function(a,b){if("function"==!typeof b)throw"juic.addRenderer: Invalid handler";c.push({type:a,handler:b})},juic.extend(a,juic.EventTarget,{context:"RenderContext",push:function(){var a,b,d,e,f,g;for(a=0,b=arguments.length;a<b;++a){for(f=arguments[a],e=!1,d=0;!e&&d<c.length;d++)g=c[d],(e=juic.validate(f,g.type))&&g.handler.call(this,this._html,f);e||null==f||"function"!=typeof f.toString||this._html.push(f.toString())}return this.length=this._html.length},join:function(){return this._html.join.apply(this._html,arguments)},renderInto:function(a){var b;b="string"==typeof a?juic.$(a):a,juic.assert(b,"[Render] Element/ID passed should be available on the DOM!"),b.innerHTML=this.join(""),this.dispatch("afterRender"),delete this._events},addAfterRenderListener:function(a,b){this.addEventListener("afterRender",a,b)}});var b=0,c=[{type:["boolean","number","string"],handler:function(a,b){a.push(b)}},{type:juic.Component,handler:function(a,b){b.renderHtml(this)}},{type:juic.Config.arrayType(),handler:function(a,b){this.push.apply(this,b)}},{type:juic.Config.htmlElementType(),handler:function(a,c){var d=b++;this.push("<span id=\"__DOMREPLACE__",d,"\" style=\"display:none\"></span>"),this.addAfterRenderListener({handleEvent:function(){var a=juic.$("__DOMREPLACE__"+d);a&&a.parentNode.replaceChild(c,a)}})}}]}(),juic._isAncestor=function(a,b){a=juic.$(a),b=juic.$(b);var c=!1;return a&&b&&a.nodeType&&b.nodeType&&(a.contains&&a!==b?c=a.contains(b):a.compareDocumentPosition&&(c=!!(16&a.compareDocumentPosition(b)))),c},juic._inDoc=function(a,b){var c=!1;return a&&a.tagName&&(b=b||a.ownerDocument,c=juic._isAncestor(b.documentElement,a)),c},juic.expose=function(a,b){window.JSTestUtility&&juic.set(a,b)},juic.fire=function(a,b){var c=juic.Component._registry[a];if(!c)return void("undefined"!=typeof juic.Logger&&juic.Logger.error("Component "+a+" not registered (within fire)"));for(var d=[],e=2;e<arguments.length;++e)d.push(arguments[e]);return c[b].apply(c,d)},function(a){var b=a?a.content:"juic.$";"juic.$"==b&&(window.$=juic.$)}(juic.$("jsDollarSign")),window.assert=juic.assert,window.createRenderContext=juic.createRenderContext,window.dump=juic.dump,window.escapeHTML=juic.escapeHTML,window.escapeHTMLIfNeeded=juic.escapeHTMLIfNeeded,window.extend=juic.extend,window.fire=juic.fire,window.set=juic.set,window.Component=juic.Component,juic.isComponentJSLoaded=!0);