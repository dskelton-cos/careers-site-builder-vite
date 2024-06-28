function AutoCompleteBase(){0<arguments.length&&this.init()}AutoCompleteBase.prototype.module="autocomplete";AutoCompleteBase.prototype.includeInactive=!1;AutoCompleteBase.prototype.textElementId=null;AutoCompleteBase.prototype.delimChar="";AutoCompleteBase.prototype.minQueryLength=Util.getMinSearchKeyLengthBasedOnLocale();AutoCompleteBase.prototype.maxResultsDisplayed=30;AutoCompleteBase.prototype.enableAutoCompFind=!0;AutoCompleteBase.prototype.forceSelection=!0;
AutoCompleteBase.prototype.dataSource=null;AutoCompleteBase.prototype.widget=null;AutoCompleteBase.prototype.maxItemsNoScrollbar=10;AutoCompleteBase.prototype.width="";AutoCompleteBase.prototype.height="";AutoCompleteBase.prototype.forceEditable=!1;AutoCompleteBase.prototype.submitOnSelect=!1;AutoCompleteBase.prototype.onItemSelect=null;AutoCompleteBase.prototype.v10=!0;AutoCompleteBase.prototype.dataSet=null;AutoCompleteBase.prototype.adminPage=!1;AutoCompleteBase.prototype.groupId=0;
AutoCompleteBase.prototype.permContext="";AutoCompleteBase.prototype.queryDelay=.2;
AutoCompleteBase.prototype.init=function(a){if("object"==typeof a)for(var d in a)d&&(this[d]=a[d]);this.v10&&(this.v10=this.isV10());this.photoCachingEnabled=this.isPhotoCachingEnabled();this.textElement=document.getElementById(this.textElementId);this.parentElement=this.parentElementId?document.getElementById(this.parentElementId):this.textElement.parentNode;if(!this.validateTextField(this.textElement))return!1;this.textElement.value&&(this.textElement.value=Util.unescapeHTML(this.textElement.value));
this.addAutoCompContainer();return!0};AutoCompleteBase.prototype.isPhotoCachingEnabled=function(){var a=!1;this.enablePhotoCaching&&(a=(a=document.getElementById("clientPhotoCachingEnabled"))?"true"==a.content:!1);return a};AutoCompleteBase.prototype.isIE=function(){return this.v10?browserDetector.isIE:Util.browserInfo.ie};AutoCompleteBase.prototype.isFirefox=function(){return Util.browserInfo.ff};
AutoCompleteBase.prototype.isV10=function(){var a=document.styleSheets;if(a)for(var d=0;d<a.length;d++)if(a[d].href&&-1<a[d].href.indexOf("ultracommon"))return!1;return!0};
AutoCompleteBase.prototype.validateTextField=function(a){var d=!1;null==a?alert("Could not instantiate AutoComplete due to the text field is null."):1!=a.nodeType?alert("Could not instantiate AutoComplete due to "+a.id+" nodeType is not an element."):this.isIE()&&"INPUT"!=a.tagName&&"TEXTAREA"!=a.tagName?alert("Could not instantiate AutoComplete due to "+a.id+" is not an INPUT or TEXTAREA tag."):d=!0;return d};
AutoCompleteBase.prototype.addAutoCompContainer=function(){this.divContainer=this.createDivTag(this.parentElement,this.textElement)};AutoCompleteBase.prototype.createDivTag=function(a,d){var c=document.createElement("div");c.id=c.name=d.id+"_div";c.className="autocompcontainer";c.style.left="0px";a.appendChild(c);return c};
AutoCompleteBase.prototype._getUserDetails=function(a){var d;if(!a)return d;var c=a._oResultData[0]?a._oResultData[0]:"",g=a._oResultData[1]?a._oResultData[1]:"",b=a._oResultData[2]?a._oResultData[2]:"";a=a._oResultData[9]?a._oResultData[9]:"";"firstname"==this.findtype?d={firstName:c,lastName:g,userName:b,jobCode:a}:"lastname"==this.findtype?d={firstName:g,lastName:c,userName:b,jobCode:a}:"username"==this.findtype&&(d={firstName:g,lastName:b,userName:c,jobCode:a});return d};
AutoCompleteBase.prototype.execOnItemSelectJS=function(a,d){SavingIndicator.LOAD_EVT.fire();if(a&&"function"==typeof a)a.apply(null,[]);else{var c=this._getUserDetails(d);a="var userData\x3d"+juic.dump(c)+";"+a;c=!1;try{if(null==event||void 0==event)c=!0}catch(g){c=!0}c&&(a="var event\x3dnull;"+a);eval(a)}};AutoCompleteBase.prototype.setHiddenValue=function(a){var d=document.getElementById(this.selectedUsersElementId);if(d){var c=d.value;d.value=a;if(c!=a&&d.onchange)d.onchange()}};
AutoCompleteBase.prototype.initDataSourceAndWidget=function(){null!=this.dataSource&&(this.dataSource.responseStripAfter="",this.dataSource.maxCacheEntries=90,this.dataSource.connMgr=juic.legacyUtil.Connect,this.widget=new juic.SFLegacyAutoComplete(this.textElement,this.divContainer,this.dataSource,{useIFrame:!0,useShadow:!1,queryDelay:this.queryDelay,autoHighlight:!0,maxResultsDisplayed:this.maxResultsDisplayed,delimChar:""==this.delimChar?null:[this.delimChar],includeInactive:this.includeInactive,
forceSelection:""==this.delimChar&&this.forceSelection,groupId:this.groupId,typeAhead:!1,animVert:!1,allowBrowserAutocomplete:!1,minQueryLength:this.minQueryLength,permContext:this.permContext}),this.widget.autocomp=this,""!=this.textElement.value&&(this.widget._bItemSelected=!0),this.widget.dataReturnEvent.subscribe(function(a,d){var c=d[0],g=d[2];if(0<g.length){var b=c.autocomp;c.setFooter("");if(null==b.dataSet&&g[0].Count>g.length){var e=MSGS.COMMON_AUTOCOMP_MORE_RESULTS_LINK;if(b.enableUserDirectory){var f=
"morePeople_"+Math.floor(1001*Math.random());c.setFooter('\x3cdiv class\x3d"autocompellipsis"\x3e\x3ca title\x3d"'+e+'" id\x3d"'+f+'" href\x3d"javascript:void(0)"\x3e...\x3cspan class\x3d"hiddenAriaContent"\x3e'+MSGS.get("COMMON_AutoComplete_UserDirectorySearch_Label",e)+"\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e");SFDOMEvent.addListener(f,"click",b.gotoDirectorySearch,b,!0)}else e=MSGS.COMMON_AUTOCOMP_MORE_RESULTS_NO_LINK,c.setFooter('\x3cdiv title\x3d"'+e+'" class\x3d"autocompellipsis"\x3e...\x3cspan class\x3d"hiddenAriaContent"\x3e'+
e+"\x3c/span\x3e\x3c/div\x3e")}var h=c._elContainer,e=c._elContent;h||(h=c._oContainer,e=h._oContent);f=b.parentElement;f==b.textElement.parentNode?(c=parseInt(b.textElement.offsetHeight),c=b.isIE()?c+2:c-4,h.style.top=c+"px"):h.style.top="0px";var k=50;null==b.dataSet&&b.hideUserName&&(k=70);Util.isRTL()&&setTimeout(function(){h.style.left="-"+k+"px"},0);c=parseInt(b.textElement.offsetWidth)+k;if(b.restrictACDropdownToParentWidth&&f){for(var r=0,f=f.parentNode;f!==document.body&&"hidden"!==SFDom.getComputedStyle(f,
"overflow");)f=f.parentNode;if(f!==document.body){var n=0,l,m,p,q;try{n=parseInt(SFDom.getComputedStyle(f,"width")),isNaN(n)&&(l=parseInt(SFDom.getComputedStyle(f,"paddingLeft")),m=parseInt(SFDom.getComputedStyle(f,"paddingRight")),p=parseInt(SFDom.getComputedStyle(f,"borderLeftWidth")),q=parseInt(SFDom.getComputedStyle(f,"borderRightWidth")),n=f.offsetWidth-(isNaN(l)?0:l)-(isNaN(m)?0:m)-(isNaN(p)?0:p)-(isNaN(q)?0:q))}catch(t){l=f.style.paddingLeft,m=f.style.paddingRight,p=f.style.borderLeftWidth,
q=f.style.borderRightWidth,n=f.offsetWidth-(isNaN(l)?0:l)-(isNaN(m)?0:m)-(isNaN(p)?0:p)-(isNaN(q)?0:q)}r=n?n:r}r&&r<c&&(c=r)}l=parseInt(SFDom.getComputedStyle(e,"borderLeftWidth"));m=parseInt(SFDom.getComputedStyle(e,"borderRightWidth"));e.style.width=c-(isNaN(l)?0:l)-(isNaN(m)?0:m)+"px";g.length>=b.maxItemsNoScrollbar&&(e.style.height=b.enablePhoto?"280px":b.v10?"180px":"230px");b.isIE()?(e.style.overflowX="auto",e.style.overflowY="auto"):e.style.overflow="auto";b.isIE()&&g.length<b.maxItemsNoScrollbar&&
(c=null!=b.dataSet?Math.min(18*g.length+20,parseInt(b.height)):b.enablePhoto?26*g.length+23:g.length*(b.v10?15:20)+23)&&(e.style.height=c+"px")}"undefined"!=typeof SessionTimeout&&SessionTimeout.reset()},null,!1),this.widget.dataRequestEvent.fire=function(a,d,c){a=a.autocomp;a.currentQueryQueue||(a.currentQueryQueue=[]);a.currentQueryQueue.push(d)},this.widget.itemSelectEvent.fire=function(a,d,c){a=a.autocomp;a.currentQueryQueue=[];null!=a.onItemSelect&&""!=a.onItemSelect&&a.execOnItemSelectJS(a.onItemSelect,
d);a.submitOnSelect&&a.textElement.form.submit()})};AutoCompleteBase.prototype.getInputValue=function(){var a=this.textElement;return a&&a.value?a.value:""};AutoCompleteBase.prototype.gotoDirectorySearch=function(){var a=this.getInputValue(),a="?peopleSearchString\x3d"+encodeURIComponent(a),d="";window.ajaxSecKey&&(d="\x26_s.crb\x3d"+window.ajaxSecKey);window.location.href="/sf/directory"+a+d};
AutoCompleteBase.prototype._gotoDirectorySearch=function(a){this.enableUserDirectory&&a.ctrlKey&&a.shiftKey&&50==SFDOMEvent.getCharCode(a)&&this.gotoDirectorySearch()};AutoCompleteFindUser.prototype=new AutoCompleteBase;AutoCompleteFindUser.prototype.constructor=AutoCompleteFindUser;AutoCompleteFindUser.superclass=AutoCompleteBase.prototype;function AutoCompleteFindUser(a){0<arguments.length&&this.init(a)}AutoCompleteFindUser.prototype.findtype="fullname";
AutoCompleteFindUser.prototype.hideUserName=0;AutoCompleteFindUser.prototype.fetchUserName=!1;AutoCompleteFindUser.prototype.selectedUsersElementId=null;AutoCompleteFindUser.prototype.enablePhoto=!1;AutoCompleteFindUser.prototype.enableUserDirectory=!1;AutoCompleteFindUser.prototype.minQueryLength=Util.getMinSearchKeyLengthBasedOnLocale();AutoCompleteFindUser.prototype.usernameMap=null;AutoCompleteFindUser.prototype.supressAlert=!1;AutoCompleteFindUser.prototype.errMsg="Can not determine username from input, please use autocompletion to select user.";
AutoCompleteFindUser.prototype.unknownNames=null;AutoCompleteFindUser.prototype.includeExternalUsers=!0;AutoCompleteFindUser.prototype.includeExternalUsersNonMtr=!1;AutoCompleteFindUser.prototype.addOption=null;AutoCompleteFindUser.prototype.recruitEventId=0;AutoCompleteFindUser.prototype.isPreventEnterKeyDefaultSubmit=!1;AutoCompleteFindUser.prototype.restrictACDropdownToParentWidth=!1;AutoCompleteBase.prototype.queryDelay=.2;
AutoCompleteFindUser.prototype.init=function(a){AutoCompleteFindUser.superclass.init.call(this,a)&&(this.textElement.setAttribute("findtype",this.findtype),this.textElement.setAttribute("delimChar",this.delimChar),this.textElement.setAttribute("hideUserName",this.hideUserName+""),this.textElement.setAttribute("fetchUserName",this.fetchUserName?"true":"false"),this.checkArguments()&&(SFDOMEvent.addListener(this.textElementId,"focus",this._setAsFocused,this),SFDOMEvent.addListener(this.textElementId,
"keyup",this._gotoDirectorySearch,this),"username"==this.findtype&&1==this.hideUserName||!this.enableAutoCompFind?(SFDOMEvent.addListener(this.textElementId,"blur",this.onTextUpdate,this),this.textElement.disabled=!this.enableAutoCompFind&&"username"==this.findtype&&1==this.hideUserName,this.textElement.disabled&&this.forceEditable&&(this.textElement.disabled=!1)):(this.setUpAutoComp(),this.isPreventEnterKeyDefaultSubmit&&SFDOMEvent.addListener(this.textElementId,"keypress",this.onKeyPress,this))))};
AutoCompleteFindUser.prototype.onKeyPress=function(a){SFDOMEvent.getKeyCommand(a)==SFDOMEvent.KEY_COMMAND_RETURN&&SFDOMEvent.stopEvent(a)};
AutoCompleteFindUser.prototype.checkArguments=function(){return"string"!=typeof this.findtype||"username"!=this.findtype&&"fullname"!=this.findtype&&"firstname"!=this.findtype&&"lastname"!=this.findtype?(this.supressAlert||alert("invalid argument for AutoCompleteFindUser(), findtype is not [firstname | lastname | username | fullname]"),!1):"number"!=typeof this.hideUserName||0!=this.hideUserName&&1!=this.hideUserName?(this.supressAlert||alert("invalid argument for AutoCompleteFindUser(), hideUserName is not [0 | 1]"),
!1):"boolean"!=typeof this.fetchUserName?(this.supressAlert||alert("invalid argument for AutoCompleteFindUser(), fetchUserName is not [true | false]"),!1):null==this.selectedUsersElementId||this.validateTextField(document.getElementById(this.selectedUsersElementId))?!0:!1};
AutoCompleteFindUser.prototype._setAsFocused=function(){this.widget&&(this.isFirefox()&&(this.widget.enableIntervalDetection?this.widget.enableIntervalDetection():alert("enableIntervalDetection is not a valid function.")),this.widget._onTextboxFocus?this.widget._onTextboxFocus(null,this.widget):alert("_onTextboxFocus is not a valid function."))};
AutoCompleteFindUser.prototype.onTextUpdate=function(){var a=this.selectedUsersElementId;if(null!=a)if(""==this.textElement.value)document.getElementById(a).value="";else if("username"==this.findtype&&this.fetchUserName)if(""==this.delimChar)document.getElementById(a).value=this.textElement.value;else{var d=this.textElement.value.split(this.delimChar);document.getElementById(a).value=d.join(",")}};
AutoCompleteFindUser.prototype.initUsernameMap=function(){this.usernameMap=[];if(null!=this.selectedUsersElementId){var a=this.textElement.value,d=document.getElementById(this.selectedUsersElementId).value;if(""!=d&&""!=a)for(var a=""==this.delimChar?[a]:a.split(this.delimChar),d=""==this.delimChar?[d]:d.split(","),c=0;c<d.length;c++){var g=d[c].trim();if(null!=a[c]){var b=a[c].trim();this.usernameMap[b]=g}}}};
AutoCompleteFindUser.prototype.setUpAutoComp=function(){this.dataSource="fullname"==this.findtype?new juic.legacyUtil.DS_XHR("/jsup","ResultSet.Result FullName FirstName LastName UserName Location Department UserId MiddleInitial Count JobCode".split(" ")):"username"==this.findtype?new juic.legacyUtil.DS_XHR("/jsup","ResultSet.Result UserName FirstName LastName FullName Location Department UserId MiddleInitial Count JobCode".split(" ")):"firstname"==this.findtype?new juic.legacyUtil.DS_XHR("/jsup",
"ResultSet.Result FirstName LastName UserName FullName Location Department UserId MiddleInitial Count JobCode".split(" ")):new juic.legacyUtil.DS_XHR("/jsup","ResultSet.Result LastName FirstName UserName FullName Location Department UserId MiddleInitial Count JobCode".split(" "));var a=[];a.push("m\x3d",this.module);a.push("\x26findtype\x3d",this.findtype);a.push("\x26maxresults\x3d",this.maxResultsDisplayed);a.push("\x26hideusername\x3d",this.hideUserName);a.push("\x26includeInactive\x3d",this.includeInactive);
a.push("\x26includeExternalUsers\x3d",this.includeExternalUsers);a.push("\x26includeExternalUsersNonMtr\x3d",this.includeExternalUsersNonMtr);a.push("\x26adminPage\x3d",this.adminPage);a.push("\x26permContext\x3d",encodeURIComponent(this.permContext));a.push("\x26groupId\x3d",this.groupId);this.addOption&&a.push("\x26addOption\x3d",this.addOption);0<this.recruitEventId&&(a.push("\x26recruitEventId\x3d",this.recruitEventId),0<this.recruitEventId&&(this.dataSource.maxCacheEntries=0,this.dataSource.connMethodPost=
!0));this.dataSource.scriptQueryAppend=a.join("");this.dataSource.responseType=juic.legacyUtil.DS_XHR.TYPE_JSON;this.initDataSourceAndWidget();this.initUsernameMap();this.widget.itemSelectEvent.fire=function(a,c,g){var b=a.autocomp;b.currentQueryQueue=[];if("function"==typeof b.beforeSelect){var d=b.textElement.value;b.textElement.value="";if(0==b.beforeSelect(a,c,g))return b.selectedUsersElementId=null,!1;b.textElement.value=d}null!=b.selectedUsersElementId&&(a=c._oResultData[0],b.usernameMap[a]=
b.fetchUserName?"fullname"==b.findtype?c._oResultData[3]:c._oResultData[0]:c._oResultData[6],""==b.delimChar&&b.setHiddenValue(b.usernameMap[a]));null!=b.onItemSelect&&""!=b.onItemSelect&&(b.widget.textboxBlurEvent.fire(b.widget),b.execOnItemSelectJS(b.onItemSelect,c));b.submitOnSelect&&(b.widget.textboxBlurEvent.fire(b.widget),b.textElement.form.submit())};this.widget.textboxBlurEvent.subscribe(function(a,c){var d=c[0],b=d.autocomp;if(null!=b.selectedUsersElementId){b.unknownNames=[];if(""==b.textElement.value)b.setHiddenValue("");
else{var e=[];""==b.delimChar?e[0]=b.textElement.value:e=b.textElement.value.split(b.delimChar);for(var f=[],h=0;h<e.length;h++){var k=Util.escapeHTML(e[h].trim());""!=k&&(void 0!=b.usernameMap[k]?f.push(Util.unescapeHTML(b.usernameMap[k])):b.unknownNames.push(k))}b.setHiddenValue(""==b.delimChar?f.join(""):f.join(","))}0<b.unknownNames.length&&("username"==b.findtype&&b.fetchUserName?(d._bItemSelected=!0,""==b.delimChar?b.setHiddenValue(b.textElement.value):(e=b.textElement.value.split(b.delimChar),
b.setHiddenValue(e.join(",")))):b.supressAlert||(b.v10&&MSGS&&MSGS.AUTOCOMP_FINDUSER_ERR?alert(MSGS.AUTOCOMP_FINDUSER_ERR):alert(b.errMsg)))}},null,!1);this.widget.doBeforeLoadData=function(a,c,g){if(c&&(c=c.results,g=this.dataSource.responseSchema.fields,c&&g))for(var b=0;b<c.length;b++)for(var d=0;d<g.length;d++){var f=g[d]||g[d].key;"Count"!==f&&(c[b][f]=Util.unescapeHTML(c[b][f]))}if(!this.autocomp||!this.autocomp.currentQueryQueue||this.autocomp._dao||this.autocomp.currentQuery===a)return!0;
c=this.autocomp.currentQueryQueue;g=c.length;for(b=-1;g--;)if(c[g]===a){b=g;break}return 0<=b?(c.splice(0,b+1),this.autocomp.currentQuery=a,!0):!1};this.widget.doBeforeExpandContainer=function(a,c,g,b){return!0};this.widget.formatResult=function(a,c){for(var d=null,b=null,e=0;e<a.length;e++)"string"===typeof a[e]&&(a[e]=Util.escapeHTML(a[e]));e=a[0];if("*"!=c){c=Util.escapeHTML(c);if(-1==c.indexOf(" ")&&-1==c.indexOf(","))d=new RegExp("(\\b"+c+")","gi"),b=new RegExp("(^"+c+")","i");else{c=c.replace(/\s*$/g,
"");var f=-1!=c.indexOf(",")?-1!=c.indexOf(", ")?c.split(", "):c.split(","):c.split(" ");if(0<f.length){if(1==f.length)d=f[0];else{for(var d="(",h=0,k=f.length;h<k;h++)d+=f[h],h!=f.length-1&&(d+="|");d+=")"}d=new RegExp("(\\b"+d+")","gi")}}null!=d&&(e=e.replace(d,"\x3cb\x3e$1\x3c/b\x3e"))}h="\x3cspan class\x3d'autocompUsername' style\x3d'padding:"+(Util.isRTL()?"0px 5px 0px 0px":"0px 0px 0px 5px")+";'\x3e(";f=!0;if(1==this.autocomp.hideUserName){b=[];if(""!=a[4]||""!=a[5])b.push(h),""!=a[4]&&(b.push(Util.escapeHTML(Util.unescapeHTML(a[4]))),
""!=a[5]&&b.push(", ")),""!=a[5]&&b.push(Util.escapeHTML(Util.unescapeHTML(a[5])));f=!!b.length;e+=b.join("")}else{b="fullname"==this.autocomp.findtype?null!=b?a[3].replace(b,"\x3cb\x3e$1\x3c/b\x3e"):a[3]:null!=d?a[3].replace(d,"\x3cb\x3e$1\x3c/b\x3e"):a[3];e+=h+b;b=null;if("firstname"==this.autocomp.findtype||"lastname"==this.autocomp.findtype)(b=a[2])||(b="");null!=b&&(e+=", "+b)}f&&(e+=")\x3c/span\x3e");return this.autocomp.enablePhoto?"\x3cdiv\x3e\x3cspan style\x3d'white-space:nowrap;height:24px;padding:0px;margin:0px;'\x3e\x3cimg style\x3d'height:24px;width:24px;z-index:99;vertical-align:middle;' src\x3d'"+
(this.autocomp.photoCachingEnabled?SFPhoto.url({urlType:SFPhoto.URL_TYPE_EDU,photoType:SFPhoto.PHOTO_TYPE.ORG_CHART,userId:a[6],mod:a[9]}):"/localpicture?ps_p_action\x3dshow\x26amp;ps_p_uid\x3d"+encodeURIComponent(a[6])+"\x26amp;p_type\x3dps_orgchart\x26amp;_s.crb\x3d"+ajaxSecKey)+"'\x3e\x3c/img\x3e"+e+"\x3c/span\x3e\x3c/div\x3e":"\x3cdiv\x3e"+e+"\x3c/div\x3e"}};AutoCompDataSet.prototype=new AutoCompleteBase;AutoCompDataSet.prototype.constructor=AutoCompDataSet;AutoCompDataSet.superclass=AutoCompleteBase.prototype;
function AutoCompDataSet(a){0<arguments.length&&this.init(a)}AutoCompDataSet.prototype.dataSet=null;AutoCompDataSet.prototype.dataSetArr=null;AutoCompDataSet.prototype.height="190px";AutoCompDataSet.prototype.init=function(a){AutoCompDataSet.superclass.init.call(this,a)&&this.checkArguments()&&this.setUpAutoComp()};
AutoCompDataSet.prototype.checkArguments=function(){return"string"!=typeof this.dataSet||null==this.dataSet||""==this.dataSet?(alert("invalid argument for AutoCompDataSet(), dataSet is not a string or is empty."),!1):!0};
AutoCompDataSet.prototype.setUpAutoComp=function(){if(this.enableAutoCompFind){this.populateDataSetArray();this.dataSource=new juic.legacyUtil.DS_JSFunction(this.getMatches);this.dataSource.scope=this;this.initDataSourceAndWidget();var a=this.widget._elContent;a||(a=this.widget._oContainer._oContent);a.style.overflow="auto";this.isIE()&&(a.style.overflowX="auto",a.style.overflowY="auto");this.width=parseInt(this.textElement.offsetWidth)+"px";this.widget.itemSelectEvent.fire=function(a,c){a.autocomp.currentQueryQueue=
[];a.autocomp.textElement.setAttribute("metric",c._oResultData[2])};this.widget.formatResult=function(a,c){this.autocomp.setWidth();return a[1]?a[1]:a}}};AutoCompDataSet.prototype.populateDataSetArray=function(){"staticGoalLibrary"==this.dataSet?void 0!=staticGoalLibrary&&null!=staticGoalLibrary&&(this.dataSetArr=staticGoalLibrary):this.dataSetArr=eval(this.dataSet)};AutoCompDataSet.prototype.setWidth=function(){"0px"==this.width&&(this.width=parseInt(this.textElement.offsetWidth)+"px")};
AutoCompDataSet.prototype.containsNonAscii=function(a){return a.match(/[^A-Za-z 0-9 \.,\?'""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]/)};
AutoCompDataSet.prototype.getMatches=function(a,d){var c=d.autocomp?d.autocomp:this.widget.autocomp;c.setWidth();if(0<a.length){var g=RegExp.escape(decodeURI(a)),b=[],e=this.containsNonAscii(g)?"(":"(\\b",f=new RegExp(e+g+")","i"),g=new RegExp(e+g+")","gi");null==c.dataSetArr&&"staticGoalLibrary"==c.dataSet&&(c.dataSetArr=staticGoalLibrary);for(e=0;e<c.dataSetArr.length;e++)c.addLeafNode(c.dataSetArr[e],b,f,g);return b}return null};
AutoCompDataSet.prototype.addLeafNode=function(a,d,c,g){if(null!=a)if(a.children)for(var b=0;b<a.children.length;b++)this.addLeafNode(a.children[b],d,c,g);else a.name?c.test(a.name.toLowerCase())&&(c=a.name.replace(g,"\x3cb\x3e$1\x3c/b\x3e"),d.push([a.name,c,a.desc])):"function"==typeof a.toLowerCase&&c.test(a.toLowerCase())&&d.push([a])};AutoCompleteDataList.prototype=new AutoCompleteBase;AutoCompleteDataList.prototype.constructor=AutoCompleteDataList;AutoCompleteDataList.prototype.findtype="userTags";
AutoCompleteDataList.superclass=AutoCompleteBase.prototype;function AutoCompleteDataList(a){0<arguments.length&&this.init(a)}AutoCompleteDataList.prototype.errMsg="Can not determine tag from input, please use autocompletion to select tag.";AutoCompleteDataList.prototype.init=function(a){AutoCompleteDataList.superclass.init.call(this,a)&&(SFDOMEvent.addListener(this.textElementId,"change",this.onTextUpdate,this),this.setUpAutoComp())};
AutoCompleteDataList.prototype.onTextUpdate=function(){if(""==this.textElement.value){var a=this.widget.autocomp;null!=a.onItemSelect&&""!=a.onItemSelect&&a.execOnItemSelectJS(a.onItemSelect)}};
AutoCompleteDataList.prototype.setUpAutoComp=function(){if(this.enableAutoCompFind){this.dataSource=new juic.legacyUtil.DS_XHR("/jsup",["ResultSet.Result","name"]);var a=[];a.push("m\x3d",this.module);a.push("\x26findtype\x3d",this.findtype);a.push("\x26maxresults\x3d",this.maxResultsDisplayed);this.dataSource.scriptQueryAppend=a.join("");this.dataSource.responseType=juic.legacyUtil.DS_XHR.TYPE_JSON;this.initDataSourceAndWidget();this.widget.itemSelectEvent.fire=function(a,c,g){a=a.autocomp;a.currentQueryQueue=
[];null!=a.onItemSelect&&""!=a.onItemSelect&&a.execOnItemSelectJS(a.onItemSelect,c);a.submitOnSelect&&(a.widget.textboxBlurEvent.fire(a.widget),a.textElement.form.submit())};this.widget.formatResult=function(a,c){return Util.escapeHTML(a[0]?a[0]:a)}}};juic.SFLegacyAutoComplete.prototype._iFrameSrc=IMAGES["/ui/uicore/img/_.gif"];