function BasicDialog(d,a,b,c,e){this.register();this._dialog=null;this._width=parseInt(a);this._height=parseInt(b);this._bModal=c;this._dlgElem=juic.$(d);this._options=e;this.initDialog(d,a,b,c)}
BasicDialog.prototype=function(){var d=0;return set(new Component,{initDialog:function(a,b,c,e){this._contentWrapperId="basic-dialog-content-wrapper"+ ++d;this._contentId="basic-dialog-content"+d;this._dialogElemWrapperId="dialog_elem_wrapper"+d;this._dialog=new SFRevolutionPanel({content:"",width:this._width,height:this._height});a=document.createElement("div");a.id=this._contentWrapperId;a.style.display="none";document.body.appendChild(a);b=juic.createRenderContext();b.push('\x3cdiv id\x3d"',this._contentId,
'"\x3e');this._focusLoop=new SFFocusLoop(this._dialog.id);this._focusMarkers=this._focusLoop.getMarkers();this._focusMarkers[0].renderHtml(b);if(this._showCloseButton=!(this._options&&"false"==this._options.xbutton))this._closeButtonId=this._dialog.id+"closeIcon",b.push('\x3cbutton id\x3d"',this._closeButtonId,'" class\x3d"closeDialog globalPortletCloseIcon globalIconFont1Support" aria-label\x3d"',MSGS.COMMON_Close,'" title\x3d"',MSGS.COMMON_Close,'" onclick\x3d"',this.fireCode("_handleClose"),'return false;" style\x3d"z-index:100000;"\x3e',
'\x3cspan class\x3d"legacyFont1Icon"\x3e\x3c/span\x3e\x3c/button\x3e');b.push('\x3cdiv id\x3d"',this._dialogElemWrapperId,'"\x3e\x3c/div\x3e');this._focusMarkers[1].renderHtml(b);b.push("\x3c/div\x3e");b.renderInto(a);juic.$(this._contentId).style.lineHeight="normal";a=this._options&&this._options.xbutton;this._showCloseButton&&a&&("string"===typeof a?this._xbuttonElem=juic.$(a):"function"===typeof a&&(this._xbuttonFn=a))},_handleClose:function(){this.hide();this._xbuttonElem&&this._xbuttonElem.click&&
this._xbuttonElem.click();this._xbuttonFn&&this._xbuttonFn()},findFirstFocus:function(){this._focusControl=null;this._options&&this._options.focusId&&(this._focusControl=juic.$(this._options.focusId));this._focusControl&&this._focusControl.focus?this._focusControl.focus():this._focusLoop.setFocus(!1)},renderHtml:function(a){},show:function(a){SFOverlayMgr.showOverlay(this._dialog,this._bModal);a=juic.$(this._dialog.id+"content");a.style.padding="0";a.appendChild(juic.$(this._contentId));"none"===
SFDom.getStyle(this._dlgElem,"display")&&SFDom.setStyle(this._dlgElem,"display","block");"hidden"===SFDom.getStyle(this._dlgElem,"visibility")&&SFDom.setStyle(this._dlgElem,"visibility","visible");juic.$(this._dialogElemWrapperId).appendChild(this._dlgElem);if(this._bAutoScroll=this._options&&0==this._options.autoscroll?!1:!0){var b=SFDom.getElementsBy(function(a){if("ft"==a.className||a.classList.contains("ftr"))return a},"div",this._dlgElem)[0],c=SFDom.getElementsBy(function(a){if("hd"==a.className||
a.classList.contains("hdr"))return a},"div",this._dlgElem)[0];a=SFDom.getElementsBy(function(a){if(-1!=a.className.indexOf("bd"))return a},"div",this._dlgElem)[0];b=b?b.offsetHeight:0;c=c?c.offsetHeight:0;a&&(SFDom.setStyle(a,"height",parseInt(this._height)-b-c+"px"),SFDom.setStyle(a,"overflow","auto"))}this.findFirstFocus()},hide:function(a){juic.$(this._contentWrapperId).appendChild(juic.$(this._contentId));this._dialog.dispatch("hide")},renderJUICDialog:function(a){if(!this._juicDialogRender){var b=
[];b.push('\x3cdiv class\x3d"hd" id\x3d"',this.id,'header"\x3e');a.renderHeader&&a.renderHeader(b);b.push("\x3c/div\x3e");b.push('\x3cdiv class\x3d"bd"\x3e\x3cdiv class\x3d"innerbd" id\x3d"',this.id,'body"\x3e');a.renderHtml(b);b.push("\x3c/div\x3e\x3c/div\x3e");b.push('\x3cdiv class\x3d"ft" id\x3d"',this.id,'footer"\x3e');a.renderFooter&&a.renderFooter(b);b.push("\x3c/div\x3e");this._dlgElem.innerHTML=b.join("");this._juicDialogRender=!0}},cleanup:function(){this.unregister()}})}();