function RCMSelectionDialog(a,b){this.register();this._init(a,b)}
RCMSelectionDialog.prototype=function(){return set(new Component,{_init:function(a,b){this._helpInfo="";this._showTreePanel=!1;this._showSelectedSection=!0;this._selectedSectionTitle=this._browseSectionTitle=this._dialogTitle="";this._selectedHeading2=this._selectedHeading=this._browseHeading2=this._browseHeading=null;this._dialogHeight=this._dialogWidth=-1;this._selectedObject=this._browseObject=this._treeObject=null;this.refocusId=b},_createDialog:function(){this._selectionDlgContent=new RCMSelectionDialogContent;
this._selectionDlgContent.setBrowseSectionTitle(this._browseSectionTitle);this._selectionDlgContent.setSelectedSectionTitle(this._selectedSectionTitle);this._selectionDlgContent.setBrowseHeading(this._browseHeading);this._selectionDlgContent.setBrowseHeading2(this._browseHeading2);this._selectionDlgContent.setSelectedHeading(this._selectedHeading);this._selectionDlgContent.setSelectedHeading2(this._selectedHeading2);this._selectionDlgContent.setShowTreePanel(this._showTreePanel);this._selectionDlgContent.setShowSelectedSection(this._showSelectedSection);
this._selectionDlgContent.setHelpInfo(this._helpInfo);this._selectionDlgContent.setTreeObject(this._treeObject);this._selectionDlgContent.setBrowseObject(this._browseObject);this._selectionDlgContent.setSelectedObject(this._selectedObject);this._selectionDlg=new SFDialogBox(this._dialogTitle,this._selectionDlgContent,[{label:MSGS.COMMON_Done,eventName:"updateSelections",active:"true"},{label:MSGS.COMMON_Cancel,eventName:"hide",buttonDesign:"transparent"}],this.getDialogWidth(),this.getDialogHeight(),
!0);this._selectionDlg.addEventListener("action",this)},setDialogTitle:function(a){this._dialogTitle=a},setDialogWidth:function(a){assert(0<a,"[RCMSelectionDialog] The width of the dialog must be greater than 0");this._dialogWidth=a},getDialogWidth:function(){return 0<this._dialogWidth?this._dialogWidth:this._showTreePanel&&this._showSelectedSection?970:this._showTreePanel||this._showSelectedSection?720:450},setDialogHeight:function(a){assert(0<a,"[RCMSelectionDialog] The height of the dialog must be greater than 0");
this._dialogHeight=a},getDialogHeight:function(){return 0<this._dialogHeight?this._dialogHeight:530},setHelpInfo:function(a){this._helpInfo=a;this._selectionDlgContent&&this._selectionDlgContent.setHelpInfo(a)},setBrowseSectionTitle:function(a){this._browseSectionTitle=a;this._selectionDlgContent&&this._selectionDlgContent.setBrowseSectionTitle(this._browseSectionTitle)},setSelectedSectionTitle:function(a){this._selectedSectionTitle=a;this._selectionDlgContent&&this._selectionDlgContent.setSelectedSectionTitle(this._selectedSectionTitle)},
setBrowseHeading:function(a){this._browseHeading=a},setBrowseHeading2:function(a){this._browseHeading2=a},setSelectedHeading:function(a){this._selectedHeading=a},setSelectedHeading2:function(a){this._selectedHeading2=a},setShowTreePanel:function(a){this._showTreePanel=a;this._selectionDlgContent&&this._selectionDlgContent.setShowTreePanel(this._showTreePanel)},setShowSelectedSection:function(a){this._showSelectedSection=a;this._selectionDlgContent&&this._selectionDlgContent.setShowSelectedSection(this._showSelectedSection)},
setTreeObject:function(a){this._treeObject=a},setBrowseObject:function(a){this._browseObject=a},setSelectedObject:function(a){this._selectedObject=a},show:function(){this._selectionDlg||this._createDialog();try{document.documentElement.focus()}catch(a){document.body.focus()}this._selectionDlg.showDialog()},hide:function(){SFOverlayMgr.removeOverlay(this._selectionDlg.id);this.dispatch("hide")},handleEvent:function(a){switch(a.type){case "action":"updateSelections"==a.actionCommand?(SFOverlayMgr.removeOverlay(this._selectionDlg.id),
this.dispatch("updateSelections")):"hide"==a.actionCommand&&(this.dispatch("hide"),SFDom.setFocus(juic.$(this.refocusId)))}},cleanup:function(){this._selectionDlgContent.cleanup();this._selectionDlg.cleanup();this.unregister()}})}();function RCMSelectionDialogContent(){this.register();this._init()}
RCMSelectionDialogContent.prototype=function(){return set(new Component,{_init:function(){this._helpInfo=new RCMHelpInfoWrapper("");this._showTreePanel=!1;this._showSelectedSection=!0;this._selectedSectionTitle=this._browseSectionTitle="";this._selectedObject=this._browseObject=this._treeObject=this._selectedHeading2=this._selectedHeading=this._browseHeading2=this._browseHeading=null},setHelpInfo:function(a){this._helpInfo.setMainHelpText(a)},setBrowseSectionTitle:function(a){this._browseSectionTitle=
a},setSelectedSectionTitle:function(a){this._selectedSectionTitle=a},setBrowseHeading:function(a){this._browseHeading=a},setBrowseHeading2:function(a){this._browseHeading2=a},setSelectedHeading:function(a){this._selectedHeading=a},setSelectedHeading2:function(a){this._selectedHeading2=a},setShowTreePanel:function(a){this._showTreePanel=a},setShowSelectedSection:function(a){this._showSelectedSection=a},setTreeObject:function(a){this._treeObject=a},setBrowseObject:function(a){this._browseObject=a},
setSelectedObject:function(a){this._selectedObject=a},renderHtml:function(a){a.push('\x3cdiv class\x3d"rb_sel_info_wrap"\x3e');this._helpInfo.renderHtml(a);a.push('\x3c/div\x3e\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e');this._showTreePanel&&this._renderTreePanel(a);this._renderBrowseSection(a);this._showSelectedSection&&this._renderSelectedSection(a)},_renderTreePanel:function(a){a.push('\x3cdiv class\x3d"rb_sel_dlg_tree_container"\x3e\x3cdiv class\x3d"round bun" style\x3d"background-image:none;border-right:none"\x3e',
'\x3cspan class\x3d"ct" style\x3d"background-position: 0 0"\x3e\x3cspan class\x3d"cl"\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"rb_sel_dlg_tree_center"\x3e');this._treeObject&&this._treeObject.renderHtml(a);a.push('\x3c/div\x3e\x3cdiv class\x3d"rb_sel_dlg_tree_btm_conatiner"\x3e','\x3cspan class\x3d"rb_sel_dlg_tree_btm_ct"\x3e\x3cspan class\x3d"rb_sel_dlg_tree_btm_cl floatleft"\x3e\x3c/span\x3e\x3cdiv class\x3d"rb_sel_dlg_tree_btm_cl2"\x3e\x3c/div\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e')},
_renderBrowseSection:function(a){this._browseSection||(this._browseSection=new RCMContainerLayout(this._browseSectionTitle,this._browseObject,{height:"350px"},this._browseHeading,this._browseHeading2));a.push('\x3cdiv class\x3d"rb_sel_dlg_mid_container child_requisition_filter" role\x3d"region" title\x3d"',this._browseSectionTitle._mainTitle,'" aria-labelledby\x3d"rb_help_m',this._helpInfo.id,' "');this._showTreePanel||a.push(' style\x3d"margin-left:10px"');a.push("\x3e");this._browseSection.renderHtml(a);
a.push("\x3c/div\x3e")},_renderSelectedSection:function(a){this._selectedSection||(this._selectedSection=new RCMContainerLayout(this._selectedSectionTitle,this._selectedObject,{height:"350px"},this._selectedHeading,this._selectedHeading2));a.push('\x3cdiv class\x3d"rb_sel_dlg_selected_container" role\x3d"region" aria-label\x3d"',MSGS.RECRUITING_CSW_SELECTED,'"\x3e');this._selectedSection.renderHtml(a);a.push("\x3c/div\x3e")},cleanup:function(){this._helpInfo.cleanup();this.unregister()}})}();