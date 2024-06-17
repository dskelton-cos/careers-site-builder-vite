function RCMAbstractListView(){}RCMAbstractListView.DEFAULT_PAGE_SIZE=100;
RCMAbstractListView.prototype=function(){return set(new Component,{_init:function(a,b){"undefined"!=typeof a&&this.setModel(a);this._options=set({NO_RESULTS_MESSAGE:MSGS.COMMON_no_items},b)},setOption:function(a,b){this._options[a]=b},setModel:function(a){this._model&&(this.getModel().removeEventListener("dataAvailable",this),this.getModel().removeEventListener("dataRefreshed",this),this.getModel().removeEventListener("listSizeChange",this),this.getModel().removeEventListener("loadingData",this));
(this._model=a)?(this.getModel().addEventListener("dataAvailable",this),this.getModel().addEventListener("dataRefreshed",this),this.getModel().addEventListener("listSizeChange",this),this.getModel().addEventListener("loadingData",this),a=RCMAbstractListView.DEFAULT_PAGE_SIZE,this._paginator&&(a=this._paginator.getPagingModel().getExtent(),this._paginator.getPagingModel().setRangeProperties(this._paginator.getPagingModel().getMinimum(),this.getModel().getNumChildren()-1,0,a)),this.getModel().getData({startIndex:0,
endIndex:a-1}),this.getModel().dispatch("listSizeChange",{newSize:this.getModel().getNumChildren()})):(this._paginator&&(this._paginator.getPagingModel().getExtent(),this._paginator.getPagingModel().setRangeProperties(this._paginator.getPagingModel().getMinimum(),0,0,this._paginator.getPagingModel().getExtent())),this.reRender())},getModel:function(){return this._model},setAutoFetchPagedDataInView:function(a){this._autoFetchPagedDataInView=a},setPaginator:function(a){this._paginator&&(this._paginator.removeEventListener("action",
this),this._paginator.cleanup());this._paginator=a;this.getModel()&&this._paginator.getPagingModel().setRangeProperties(this._paginator.getPagingModel().getMinimum(),this.getModel().getNumChildren()-1,0,this._paginator.getPagingModel().getExtent());this._paginator.addEventListener("action",this)},renderHtml:function(a){a.push('\x3cdiv class\x3d"listview_wrapper clear_all" id\x3d"',this.id,'"');1==this._autoFetchPagedDataInView&&a.push(' onscroll\x3d"',this.fireCode("_checkMoreMarkers"),'"');a.push("\x3e");
a.push('\x3cdiv class\x3d"listview_items" id\x3d"',this.id,'list" \x3e');if(null!=this.getModel()){var b=this.getModel();null!=b.getList()&&0<b.getList().length?this._getListHtml(a):a.push('\x3cdiv id\x3d"rbListNoFilterCriteria" class\x3d"instructionalText rb_help_txt"\x3e',MSGS.COMMON_no_items,"\x3c/div\x3e")}a.push("\x3c/div\x3e");a.push("\x3c/div\x3e")},_getListHtml:function(a,b){var c=b?b:this.getModel().getList();delete this._moreMarker;var d="";this.getModel()instanceof RCMSingleSelectListModel?
d="single_select":this.getModel()instanceof RCMSelectListModel||this.getModel()instanceof RCMMultiSelectListModel?d="multi_select":this.getModel()instanceof RCMListModel&&(d="no_select");if(c&&0<c.length){a.push('\x3cul id\x3d"',this.id,":childNodes",'" class\x3d"',d,'"\x3e');var e=0,f=c.length-1;this._paginator&&(e=(this._paginator.getCurrentPageNumber()-1)*this._paginator.getExtent(),e=0<e?e:0,f=f<e+this._paginator.getExtent()?f:e+this._paginator.getExtent());var g=f;for("undefined"!=typeof rbsd&&
null!=rbsd&&"LaunchForm"===rbsd._source&&parseInt(f)-parseInt(e)>=this._paginator.getExtent()&&(g=f-1);e<=g&&"undefined"!=typeof c[e];e++)this._getListItemHtml(c[e],e,a,d);e<f?(this._moreMarker=!0,a.push('\x3cli id\x3d"',this.id,':more" class\x3d"more_items"\x3e'),a.push('\x3ca id\x3d"',this.id,':more_text" href\x3d"javascript:;" onclick\x3d"',this.fireCode("_handleMore",{index:e}),';return false;"\x3e',MSGS.COMMON_More,"\x3c/a\x3e"),a.push("\x3c/li\x3e")):delete this._moreMarker;a.push("\x3c/ul\x3e");
"undefined"!=typeof rbsd&&null!=rbsd&&"LaunchForm"===rbsd._source&&enableDeselectAllLaunchForms()}else a.push('\x3cdiv id\x3d"rbListNoResults" class\x3d"instructionalText rb_help_txt"\x3e',this._options.NO_RESULTS_MESSAGE,"\x3c/div\x3e"),"undefined"!=typeof rbsd&&null!=rbsd&&"LaunchForm"===rbsd._source&&(disableDeselectAllLaunchForms("selectnone"),disableDeselectAllLaunchForms("clearall"))},_getListItemHtml:function(a,b,c){c.push('\x3cli id\x3d"',this.id,a.getNodeId(),':wrapper" class\x3d"item" \x3e');
a.renderHtml(c);c.push("\x3c/li\x3e")},_pageAdjust:function(a){var b=this._paginator.getPagingModel(),c="undefined"==typeof a.newPageSize?b.getExtent():a.newPageSize,c=parseInt(c),d="undefined"==typeof a.newPageSize?a.newPage:1,d=parseInt(d),d=c*(d-1)+1;b.setRangeProperties(b.getMinimum(),b.getMaximum(),d,c);"undefined"!=typeof rbsd&&null!=rbsd&&"LaunchForm"===rbsd._source&&(typeCheckbox=(document.querySelector(".rbSelectionSection","div.sfPaginator")&&document.querySelector(".rbSelectionSection").querySelector("div.sfPaginator")?
document.querySelector(".rbSelectionSection").querySelector("div.sfPaginator").id:null)==a.target.id?!0:!1);this.reRender()},_checkMoreMarkers:function(){if(this._moreMarker){var a=juic.$(this.id).getBoundingClientRect(),b=juic.$(this.id+":more").getBoundingClientRect();b.top<=a.bottom&&b.bottom>=a.top&&b.left<=a.right&&b.right>=a.left&&(a=juic.$(this.id+":more_text"),a.onclick.call(a))}},_handleMore:function(a,b){1==this._moreMarker&&(delete this._moreMarker,this.getModel().getData({startIndex:a.index}))},
renderFilteredHtml:function(a){var b=[];juic.$(this.id+"list")&&(this._getListHtml(b,a),juic.$(this.id+"list").innerHTML=b.join(""),1==this._autoFetchPagedDataInView&&this._checkMoreMarkers());"undefined"!=typeof rbsd&&null!=rbsd&&"LaunchForm"===rbsd._source&&enableDeselectAllLaunchForms()},reRender:function(){var a=[];juic.$(this.id+"list")&&(this._getListHtml(a),juic.$(this.id+"list").innerHTML=a.join(""),1==this._autoFetchPagedDataInView&&this._checkMoreMarkers());"undefined"!=typeof rbsd&&null!=
rbsd&&"LaunchForm"===rbsd._source&&enableDeselectAllLaunchForms()},handleEvent:function(a){try{switch(a.type){case "dataAvailable":case "dataRefreshed":if(this._paginator){var b=this._paginator.getPagingModel();b.getValue()>this.getModel().getNumChildren()&&b.setValue(this.getModel().getNumChildren()-this.getModel().getNumChildren()%b.getExtent());b.setRangeProperties(b.getMinimum(),this.getModel().getNumChildren(),b.getValue(),b.getExtent())}juic.$(this.id)&&this.reRender();break;case "listSizeChange":this._paginator&&
(b=this._paginator.getPagingModel(),b.setRangeProperties(b.getMinimum(),a.newSize-1,b.getValue(),b.getExtent()));break;case "action":"pageAdjust"===a.actionCommand&&("undefined"!=typeof event&&(event.returnValue=!1),this._pageAdjust(a));break;case "loadingData":juic.$(this.id+"list")&&(juic.$(this.id+"list").innerHTML=MSGS.COMMON_loading);break;case "change":this._buttonGroup?this.getModel()&&this.getModel().getDao()instanceof FilterColumnValuesListDAO?(this.inlineSelectContent=new RBInlineSelectListContent({dao:this.getModel().getDao(),
freeForm:!0}),this.inlineSelectContent._model.setNumChildren(this.getModel().getList().length),this.inlineSelectContent._model._list=this.getModel().getList(),this.inlineSelectContent.addEventListener("selectAction",this.inlineSelectContent),this.inlineSelectContent.dispatch("selectAction",{actionCommand:"selected",nodeId:escape(a.value)})):(this._model.addEventListener("radioSelectAction",this._model),this._model.dispatch("radioSelectAction",{actionCommand:"selected",nodeId:escape(a.value)})):a.target&&
this._model.dispatch("selectAction",{actionCommand:a.checked?"selected":"deSelected",nodeId:escape(a.value)})}}catch(c){assert(!1,"[RCMAbstractListView]"+c)}},cleanup:function(){this.getModel().removeEventListener("dataAvailable",this)}})}();function RCMDefaultListView(a,b){this.register();this._init(a,b)}RCMDefaultListView.prototype=function(){return set(new RCMAbstractListView,{_init:function(a,b){RCMAbstractListView.prototype._init.call(this,a,b)}})}();
function RCMSelectListView(a,b){this.register();this._init(a,b)}
RCMSelectListView.prototype=function(){return set(new RCMAbstractListView,{_init:function(a,b){RCMAbstractListView.prototype._init.call(this,a,b)},setModel:function(a){this._model&&this.getModel().removeEventListener("selectAction",this);RCMAbstractListView.prototype.setModel.call(this,a);this.getModel()&&this.getModel().addEventListener("selectAction",this)},_getListItemHtml:function(a,b,c,d){c.push('\x3cli id\x3d"',this.id,a.getNodeId(),':wrapper"');c.push('class\x3d"clear_all item',a.isSelected()?
" selected":"");c.push(a.getNodeId()==this.getModel().getActiveNodeId()?" current":"");c.push(b%2?" even":" odd",'" \x3e');a.renderHtml(c,d);c.push("\x3c/li\x3e")},setActiveNode:function(a){this.getModel().getActiveNodeId()&&juic.$(this.id+this.getModel().getActiveNodeId()+":wrapper")&&Util.removeClass(this.id+this.getModel().getActiveNodeId()+":wrapper","current");Util.gebi(this.id+a)&&Util.addClass(this.id+a+":wrapper","current")},handleEvent:function(a){switch(a.type){case "selectAction":switch(a.actionCommand){case "selected":if(0<=
a.startNodeIndex&&a.endNodeIndex<=this.getModel().getNumChildren()){for(var b=a.startNodeIndex;b<=a.endNodeIndex;b++)Util.gebi(this.id+this.getModel().getList()[b].getNodeId()+":wrapper")&&Util.addClass(this.id+this.getModel().getList()[b].getNodeId()+":wrapper","selected");this.dispatch("selected",{startNodeIndex:a.startNodeIndex,endNodeIndex:a.endNodeIndex});this.reRender()}else b=this.getModel().getNodeIndex(a.nodeId),this.setActiveNode(a.nodeId),Util.gebi(this.id+a.nodeId+":wrapper")&&Util.addClass(this.id+
a.nodeId+":wrapper","selected"),this.dispatch("selected",{nodeId:a.nodeId,nodeIndex:b});break;case "deSelected":if(0<=a.startNodeIndex&&a.endNodeIndex<=this.getModel().getNumChildren()){for(b=a.startNodeIndex;b<=a.endNodeIndex;b++)this.getModel().getList()[b]&&Util.gebi(this.id+this.getModel().getList()[b].getNodeId()+":wrapper")&&Util.removeClass(this.id+this.getModel().getList()[b].getNodeId()+":wrapper","selected");this.dispatch("deSelected",{startNodeIndex:a.startNodeIndex,endNodeIndex:a.endNodeIndex});
this.reRender()}else b=this.getModel().getNodeIndex(a.nodeId),null!=Util.gebi(this.id+a.nodeId+":wrapper")&&Util.removeClass(this.id+a.nodeId+":wrapper","selected"),this.dispatch("deSelected",{nodeId:a.nodeId,nodeIndex:b})}}RCMAbstractListView.prototype.handleEvent.call(this,a)}})}();function RCMMultiSelectListView(a,b){this._init(a,b)}
RCMMultiSelectListView.prototype=function(){return set(new RCMSelectListView,{_init:function(a,b){RCMSelectListView.prototype._init.call(this,a,b)},handleEvent:function(a){RCMSelectListView.prototype.handleEvent.call(this,a)},_getListItemHtml:function(a,b,c){var d=a.getNodeId();a instanceof RBMultiSelectListNode&&(d=a.isDuplicate()?a.getGeneratedNodeId():a.getNodeId());c.push('\x3cli id\x3d"',this.id,d,':wrapper"');c.push('class\x3d"clear_all item',a.isSelected()?" selected":"");c.push(a.getNodeId()==
this.getModel().getActiveNodeId()?" current":"");c.push(b%2?" even":" odd",'" \x3e');a.renderHtml(c);c.push("\x3c/li\x3e")}})}();function enableDeselectAllLaunchForms(){rbsd.reRenderSelectedMassButtons();rbsd.reRenderSelectionMassButtons()}
function disableDeselectAllLaunchForms(a){var b=document.querySelectorAll(".multi_select")!=[]?document.querySelectorAll(".multi_select").length:0;a=document.getElementById(a);if((1===b||document.getElementById("rbListNoResults"))&&a)for(a.disabled=!0,a.tabIndex="-1",b=a.getElementsByTagName("div"),a=0;a<b.length;a++)if("pointer"===b[a].style.cursor){b[a].disabled=!0;b[a].style.cursor="default";b[a].style.filter="alpha(opacity\x3d30)";b[a].style.opacity="0.7";b[a].onclick="return false";b[a].tabIndex=
"-1";break}};