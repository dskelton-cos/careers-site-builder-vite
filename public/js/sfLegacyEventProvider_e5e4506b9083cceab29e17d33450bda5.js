juic.SFLegacyEventProvider=function(){},juic.SFLegacyEventProvider.prototype={__yui_events:null,__yui_subscribers:null,subscribe:function(a,b,c,d){this.__yui_events=this.__yui_events||{};var e=this.__yui_events[a];if(e)e.subscribe(b,c,d);else{this.__yui_subscribers=this.__yui_subscribers||{};var f=this.__yui_subscribers;f[a]||(f[a]=[]),f[a].push({fn:b,obj:c,overrideContext:d})}},unsubscribe:function(a,b,c){this.__yui_events=this.__yui_events||{};var d=this.__yui_events;if(a){var e=d[a];if(e)return e.unsubscribe(b,c)}else{var f=!0;for(var g in d)d&&d.hasOwnProperty&&d.hasOwnProperty(g)&&(f=f&&d[g].unsubscribe(b,c));return f}return!1},unsubscribeAll:function(a){return this.unsubscribe(a)},createEvent:function(a,b){this.__yui_events=this.__yui_events||{};var c,d=b||{},e=this.__yui_events;if(!e[a]){c=new SFCustomEvent(a,d.scope||this,d.silent,SFCustomEvent.FLAT,d.fireOnce),e[a]=c,d.onSubscribeCallback&&c.subscribeEvent.subscribe(d.onSubscribeCallback),this.__yui_subscribers=this.__yui_subscribers||{};var f=this.__yui_subscribers[a];if(f)for(var g=0;g<f.length;++g)c.subscribe(f[g].fn,f[g].obj,f[g].overrideContext)}return e[a]},fireEvent:function(a){this.__yui_events=this.__yui_events||{};var b=this.__yui_events[a];if(!b)return null;for(var c=[],d=1;d<arguments.length;++d)c.push(arguments[d]);return b.fire.apply(b,c)},hasEvent:function(a){return!!(this.__yui_events&&this.__yui_events[a])}};