function RCMIntelliInput(a,b,c,d){this.register();this._inputType=!1;"undefined"!=typeof c&&(this._config=c,this._config.onkeypress&&(this._onkeypress=this._config.onkeypress),this._config.inputType&&(this._inputType=this._config.inputType));this._input=this._inputType?new RCMProfileInput(a,b,this._config):new SFInput(a,b,this._config);this._createHelpText(d);this._input.addEventListener("change",this);this._input.addEventListener("focus",this);this._input.addEventListener("blur",this);this._inputType&&
this._input.addEventListener("action",this)}
RCMIntelliInput.prototype=function(){return set(new Component,{renderHtml:function(a){a.push("\x3cspan class\x3d'rcmIntelliInput'");this._onkeypress&&"function"==typeof this._onkeypress&&(a.push(" onkeypress\x3d'"),a.push(this.fireCode("_kp")),a.push("'"));a.push("\x3e");this._input.renderHtml(a);var b="string"==typeof this._htmltext?this._htmltext:this._htmltext._text,c=document.createElement("div");c.innerHTML=MSGS.RECRUITING_SHOW_HELP+", "+b;b=c.textContent||c.innerText;a.push("\x26nbsp;\x3cspan class \x3d 'questionMarkIcon ui5 questionMarkIcon_accessible' id\x3d'question_id' title\x3d'",
MSGS.RECRUITING_SHOW_HELP,"' onclick\x3d'");a.push(this.fireCode("_showHelpText"));a.push(" return false;' tabindex\x3d'0' role\x3d'button' aria-label\x3d'",MSGS.RECRUITING_JOB_SEARCH_HELP_TEXT_ARIA_LABEL_ACCESSIBLE);a.push("' onkeydown\x3d'");a.push(this.fireCode("_showHelpTextOnKeyDown"));a.push("'\x3e");a.push("\x3cspan class\x3d'sr-only'\x3e",b,"\x3c/span\x3e\x3c/span\x3e")},_createHelpText:function(a){this._htmltext=new SFSpan(a);this._htmltext.setEscapeHtml(!1);this._htmltext.setCSSClass("rcmIntelliHelpText");
this._htmltext.setAriaRole("tooltip")},_showHelpText:function(){SFInfoInContext.show(this._htmltext,this._input.id,{closeOnEsc:!0,refocusId:"question_id",autoHide:!1});SFInfoInContext.setFocusOnCloseButton();var a=SFDom.getElementsByClassName("globalContentBackground globalContentForeground sfoverlaycontainer")[0],b=SFDom.getElementsByClassName("beige_caret arrow")[0],c=SFDom.getElementsByClassName("sfInfoInContext")[0];c&&c.classList.add("searchHelpIcon");var d=SFDom.getElementsByClassName("beige_dlg")[0],
e=c&&c.getElementsByClassName("ct")[0],c=c&&c.getElementsByClassName("cb")[0];a&&a.setAttribute("aria-hidden","true");b&&b.setAttribute("aria-hidden","true");e&&e.setAttribute("aria-hidden","true");c&&c.setAttribute("aria-hidden","true");d&&d.classList.add("jobReqAddChildReq")},_showHelpTextOnKeyDown:function(a){var b=a.keyCode;if(13===b||32===b)a.preventDefault(),this._showHelpText()},hideHelpText:function(){SFInfoInContext.hide();var a=SFDom.getElementsByClassName("globalContentBackground globalContentForeground sfoverlaycontainer")[0];
a&&a.setAttribute("aria-hidden","flase")},setHelpText:function(a){this._createHelpText(a)},setEnabled:function(a){this._input.setEnabled(a)},setWritable:function(a){this._input.setWritable(a)},getName:function(){this._input.getName()},setValue:function(a){this._input.setValue(a)},getValue:function(){return this._input.getValue()},_kp:function(a){var b=0;a&&a.which?b=a.which:window.event&&(b=window.event.keyCode);if(this._onkeypress&&"function"==typeof this._onkeypress)return this._onkeypress({keyCode:b})},
handleEvent:function(a){switch(a.type){case "beforehide":this.hideHelpText();break;default:this.dispatchEvent(a)}}})}();