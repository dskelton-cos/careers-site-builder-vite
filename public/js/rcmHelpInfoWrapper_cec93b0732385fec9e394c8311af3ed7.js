function RCMHelpInfoWrapper(a){this.register();assert("undefined"!==typeof a,"[RCMHelpInfoWrapper] Main help text is required");this.setMainHelpText(a)}
RCMHelpInfoWrapper.prototype=function(){return set(new Component,{setComponent:function(a){this._component=a},setMainHelpText:function(a){this._mainHelpTxt=a;$("rb_help_s"+this.id)&&($("rb_help_s"+this.id).innerHTML=this._mainHelpTxt)},setHelpTextBelowObject:function(a){this._helpTxtBelow=a},renderHtml:function(a){this._component&&(a.push("\x3ctable\x3e\x3ctr\x3e\x3ctd"),this._component instanceof SFDropDown&&a.push(' class\x3d"globalPortletDimmedTextColor"'),a.push("\x3e"),this._component.renderHtml(a),
a.push("\x3c/td\x3e\x3ctd\x3e"));this._title=this._helpTxtBelow?this._mainHelpTxt+"("+this._helpTxtBelow+" )":this._mainHelpTxt;a.push('\x3cdiv title\x3d"',this._title,'" id\x3d"rb_help_m',this.id,'" class\x3d"sapIcon globalPortletDimmedTextColor floatleft"');a.push(' style \x3d "padding-left : 10px; font-size : 16px;font-weight : normal;"\x3e\x26#xE1C4\x3c/div\x3e');this._component&&(a.push("\x3c/td\x3e\x3c/tr\x3e"),a.push("\x3c/table\x3e"))}})}();