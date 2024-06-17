function ADMUtil(){}ADMUtil.set=function(a){for(var c=1,b=arguments.length;c<b;c++){var d=arguments[c],e;for(e in d){var f=a[e],g=d[e];"object"==typeof g&&f?set(f,g):a[e]=g}}return a};ADMUtil.getValidString=function(a){return void 0==a?"":a};ADMUtil.clone=function(a){if(null==a||"object"!=typeof a)return a;var c=a.constructor(),b;for(b in a)c[b]=ADMUtil.clone(a[b]);return c};
ADMUtil.subarray=function(a,c,b,d){var e=b?b:a.length-1;b=d?d:Array(e-c+1);d=d?d.length:0;for(var f=0,e=e-c;f<=e;f++)b[d+f]=a[f+c];return b};ADMUtil.booleanBroadcast=function(a,c,b){for(var d=ADMUtil.subarray(arguments,3),e=!b,f=0,g=a.length;f<g;f++){var h=a[f],k=!b;h[c]&&(k=h[c].apply(h,d));e=b?e||k:e&&k}return e};ADMUtil.eventToFunctionCall=function(a){assert(this[a.type]&&"function"==typeof this[a.type],"Unsupported incoming event type "+a.type);this[a.type](a)};
ADMUtil.actionToFunctionCall=function(a){if(this[a.actionCommand]&&"function"==typeof this[a.actionCommand])this[a.actionCommand](a)};ADMUtil.addRemoveClass=function(a,c,b){SFDom[a?"addClass":"removeClass"](c,b)};
ADMUtil.simpleErrorHandler=function(a,c,b){a=[a];if(c&&c.stack){c=c.stack.split("\n");for(var d=["callstack:"],e=0,f=c.length;e<f;e++){var g=c[e],g=g.substring(g.lastIndexOf("@")+1,g.length),g=g.substring(g.lastIndexOf("/")+1,g.length);0<g.length&&d.push(g)}a.push('\x3cbr\x3e\x3cdiv style\x3d"overflow: auto; width\x3d100px; height\x3d100px;"\x3e\x3ctable\x3e\x3ctr\x3e\x3ctd\x3e',d.join("\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e"),"\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e")}if(b&&0<b.length){a.push("\x3cul\x3e");
e=0;for(f=b.length;e<f;e++)a.push("\x3cli\x3e",b[e],"\x3c/li\x3e");a.push("\x3c/ul\x3e")}SFMessageBox.alert(a.join(""),{title:MSGS.COMMON_Err})};ADMUtil.validateNumberKeyDown=function(a,c){a=a?a:window.event;var b=a.which?a.which:a.keyCode;return 190==b||110==b?-1==c.value.indexOf("."):31>=b||48<=b&&57>=b||96<=b&&105>=b||37<=b&&40>=b?!0:!1};ADMUtil.compareStrings=function(a,c){return a==c?0:a<c?-1:1};ADMUtil.compareNumbers=function(a,c){return parseFloat(a)-parseFloat(c)};
ADMUtil.compareDragItem=function(a,c){return a.displayOrder-c.displayOrder};ADMUtil.compareDates=function(a,c){var b=new DateFormat("MM/dd/yy"),d=b.parse(a).getTime(),b=b.parse(c).getTime();return d>b?1:d==b?0:-1};ADMUtil.parseNumber=function(a){if(!a||0==a.length)return null;var c=a.replace(/,/g,"");return ADMUtil.isValidNumber(c)?parseFloat(c):a};
ADMUtil.addCommas=function(a){x=(""+a).split(".");x1=x[0];x2=1<x.length?"."+x[1]:"";for(a=/(\d+)(\d{3})/;a.test(x1);)x1=x1.replace(a,"$1,$2");return x1+x2};ADMUtil.formatNumber=function(a){var c=ADMUtil.parseNumber(a);null!=c&&"number"==typeof c&&(a=ADMUtil.addCommas(c));return a};ADMUtil.isValidNumber=function(a){return a&&/^([+-]?(((\d+(\.)?)|(\d*\.\d+))([eE][+-]?\d+)?))$/.test(a)};
ADMUtil.showInProgress=function(a){"string"==typeof a&&(a=juic.$(a));a.innerHTML='\x3cdiv class\x3d"loading_indicator_layout_static"\x3e\x3cstrong class\x3d"icon_loading"\x3e'+MSGS.COMMON_loading+"\x3c/strong\x3e\x3c/div\x3e"};ADMUtil.removeArrayElement=function(a,c){var b=ADMUtil.indexArrayElement(a,c);return 0<=b?(a.splice(b,1),!0):!1};ADMUtil.indexArrayElement=function(a,c){if(null==a)return-1;for(var b=0,d=a.length;b<d;b++)if(a[b]==c)return b;return-1};
ADMUtil.getLabel=function(a,c){for(var b="",d=0,e=a.length;d<e;d++)if(a[d].label)if(null==a[d].localeId)b=a[d].label;else if(a[d].localeId==c||0===c.indexOf(a[d].localeId+"_"))return a[d].label;return b};ADMUtil.insertAtCursor=function(a,c){if(document.selection)a.focus(),document.selection.createRange().text=c;else if(a.selectionStart||"0"==a.selectionStart){var b=a.selectionEnd;a.value=a.value.substring(0,a.selectionStart)+c+a.value.substring(b,a.value.length)}else a.value+=c};
ADMUtil.copyArray=function(a){if(!a)return null;for(var c=[],b=0,d=a.length;b<d;b++)c.push(a[b]);return c};ADMUtil.getSortedIndices=function(a,c){for(var b=[],d=0,e=a.length;d<e;d++)b.push(d);b.sort(function(b,d){return c(a[b],a[d])});return b};ADMUtil.sortKeepingOrder=function(a,c,b){b=ADMUtil.getSortedIndices(a,b);for(var d=0,e=a.length;d<e;d++){var f=b[d];b[d]=[a[d],c[d]];if(f<d){var g=b[f];b[f]=null;a[d]=g[0];c[d]=g[1]}else a[d]=a[f],c[d]=c[f]}delete b};
ADMUtil.navigateToPage=function(a,c){var b=window.location.href,d=b.substring(0,b.lastIndexOf("/")+1);d.lastIndexOf("/sf/")==d.length-4&&(d=b.substring(0,b.lastIndexOf("/sf/")+1),d+="xi/ui/pages/compensation/");b=ADMUtil.constructURL(d+a,c);try{window.location.href=b}catch(e){}};ADMUtil.findDuplicate=function(a){var c=a.length;if(2>c)return!1;for(var b=0;b<c;b++)for(var d=b+1;d<c;d++)if(a[b]==a[d])return!0;return!1};
ADMUtil.constructURL=function(a,c){var b=[],d;for(d in c)b.push(encodeURIComponent(d)+"\x3d"+encodeURIComponent(c[d]));(d=Util.findURLParam("_s.crb"))&&b.push("_s.crb\x3d"+d);0<b.length&&(a+="?"+b.join("\x26"));return a};ADMUtil.forAll=function(a,c,b){if(a)for(var d=0,e=a.length;d<e&&(b?!c.call(b,a[d]):!c(a[d]));d++);};ADMUtil.fieldIdToType=function(a){return a.match(/[a-zA-Z\-]+/g).join("")};ADMUtil.confirmFlag=!0;
ADMUtil.confirmNavigation=function(){if(ADMUtil.noPageNavigation)return ADMUtil.noPageNavigation=!1;if(1==SavingIndicator.HAS_CHANGED&&ADMUtil.confirmFlag)return MSGS.COMMON_Unsaved_Changes;ADMUtil.confirmFlag=!ADMUtil.confirmFlag};function ADMLoading(){this.register()}
ADMLoading.prototype=function(){return set(new Component,{renderHtml:function(a){a.push('\x3cdiv class\x3d"adm-loading"\x3e');a.push("\x3cdiv\x3e");a.push('\x3cspan id\x3d"loading_'+this.id+'" class\x3d"icon_loading"\x3e\x3c/span\x3e'+MSGS.COMMON_loading);a.push("\x3c/div\x3e\x3c/div\x3e")}})}();function ADMBoxLoading(a){this.register();this.setMsg(a?a:MSGS.COMMON_loading);this._setDimensions()}
ADMBoxLoading.prototype=function(){return set(new Component,{renderHtml:function(a){a.push('\x3cdiv id\x3d"',this.id,'loadingDiv" class\x3d"admBoxLoadingDiv" style\x3d"width:',this._width,';"\x3e\x3cb class\x3d"adminv2_helpbar_rtop" \x3e');a.push('\x3cb class\x3d"adminv2_helpbar_r1"\x3e\x3c/b\x3e ');a.push('\x3cb class\x3d"adminv2_helpbar_r2"\x3e\x3c/b\x3e');a.push('\x3cb class\x3d"adminv2_helpbar_r3"\x3e\x3c/b\x3e');a.push('\x3cb class\x3d"adminv2_helpbar_r4"\x3e\x3c/b\x3e');a.push("\x3c/b\x3e");
a.push('\x3cdiv id\x3d"'+this.id+"\" style\x3d'height:",this._height,';\' class\x3d"sfloadingIcon"\x3e');a.push("\x3cdiv style\x3d'padding-top:6px;'\x3e"+escapeHTML(this._msg)+"\x3c/div\x3e");a.push("\x3c/div\x3e");a.push('\x3cb class\x3d"adminv2_helpbar_rbottom"\x3e');a.push('\x3cb class\x3d"adminv2_helpbar_r4" \x3e\x3c/b\x3e');a.push('\x3cb class\x3d"adminv2_helpbar_r3" \x3e\x3c/b\x3e');a.push('\x3cb class\x3d"adminv2_helpbar_r2" \x3e\x3c/b\x3e');a.push('\x3cb class\x3d"adminv2_helpbar_r1" \x3e\x3c/b\x3e ');
a.push("\x3c/b\x3e\x3c/div\x3e")},_setDimensions:function(){this._height="40px";var a=document.createElement("div");a.className="admBoxLoadingDiv admDummyDiv";a.innerHTML=escapeHTML(this._msg);document.body.appendChild(a);var c=a.offsetWidth;isNaN(c)||(140>c?this._width="205px":(400<c&&(a.style.width="400px",c=400),this._width=parseInt(c)+65+"px"));c=a.offsetHeight;!isNaN(c)&&40<c&&(this._height=parseInt(c)+6+"px");document.body.removeChild(a)},setMsg:function(a){this._msg=a;this._setDimensions()},
hide:function(){this.dispatch("hide")}})}();"undefined"==typeof ADMOverlayLoading&&(window.ADMOverlayLoading=function(){return set(new Component,{init:function(){this._loading=null},showLoading:function(a){this._loading||(this._loading=new SFLoading,a=a?a:MSGS.COMMON_loading,this._loading.setMsg(a),SFOverlayMgr.showOverlay(this._loading,!0))},hideLoading:function(){this._loading&&(SFOverlayMgr.removeOverlay(this._loading.id),this._loading=null)}})}());
function ADMPopupMessage(a){this.register();this._init(a)}
ADMPopupMessage.prototype=function(){return set(new Component,{_init:function(a){this._data=a?a:{};this._type=this._data.type?this._data.type:"alert";this._message=this._data.message?this._data.message:"";this._buttonDefs=[];"confirm"==this._type?(this._buttonDefs.push({label:MSGS.COMMON_Yes,active:!0,eventName:"yes"}),this._buttonDefs.push({label:MSGS.COMMON_No,eventName:"no"})):this._buttonDefs.push({label:MSGS.COMMON_Ok,active:!0,eventName:"ok"})},getButtons:function(){return this._buttonDefs},
setButtons:function(a){this._buttonDefs=a},setMessage:function(a){this._message=a;juic.$(this.id)&&(juic.$(this.id).innerHTML=a)},renderHtml:function(a){a.push('\x3cdiv id\x3d"',this.id,'"\x3e',this._message,"\x3c/div\x3e")},handleEvent:function(a){"action"==a.type&&this.dispatch("removeMessage",{data:{actionCommand:a.actionCommand}})}})}();
ADMUtil.isValidAttrInJSON=function(a,c){var b,d;if(!a||!c)return!1;d=c.split(".");for(var e=0;e<d.length;e++){b=a[d[e]];if(!b||"string"==typeof b&&!ADMUtil.isValidStr(b))return!1;a=b}return!0};ADMUtil.escapeRegExp=function(){var a=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\$|\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\\x26|\\^)","g");return function(c){return c.replace(a,"\\$1")}}();
ADMUtil.hasSpecialChar=function(a){return a&&""!=a.trim()?RegExp('(\\\\|\\.|\\\x3c|\\\x3e|\\*|\\?|\\||\\$|\\(|\\)|\\[|\\]|\\{|\\}|\\\x26|\\^|\\!|\\@|\\~|\\"|\\,)',"g").test(a):!0};ADMUtil.isValidStr=function(a){return a&&"string"==typeof a&&""!=a.trim()?!0:!1};ADMUtil.isValidStrForXML=function(a){var c=RegExp("(\\\x3c|\\\x3e|\\\x26|\\\x3d)","g");return ADMUtil.isValidStr(a)&&!c.test(a)};
"undefined"==typeof ADMSavingIndicator&&(ADMSavingIndicator=function(){var a=new SFSpan(""),c=new SFDialog(MSGS.COMMON_Err,a,[{label:MSGS.COMMON_Ok,eventName:"cancelErrorDlg"}],400,150);return set(new juic.EventTarget,{fireEvt:function(b,d){d=d||null;if(b&&SavingIndicator&&$(SavingIndicator.SAVE_INDICATOR_STATUS_ID))"object"==typeof SavingIndicator[b]&&(d?SavingIndicator[b].fire(d):SavingIndicator[b].fire());else if(b&&d)switch(b){case "ERROR_EVT":case "CUSTOM_ERROR_EVT":a.setValue(d),SFOverlayMgr.showOverlay(c,
!0)}},getDialog:function(){return c},handleEvent:function(a){switch(a.type){case "action":switch(a.actionCommand){case "cancelErrorDlg":SFOverlayMgr.removeOverlay(c.id),this.dispatch(a.actionCommand)}}}})}(),ADMSavingIndicator.getDialog().addEventListener("action",ADMSavingIndicator));