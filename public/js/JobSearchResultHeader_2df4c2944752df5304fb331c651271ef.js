function JobSearchResultHeader(a){this.register();assert(null!=a,"Must have a valid model");this._model=a;this._init();this._registerEvents()}
JobSearchResultHeader.prototype=function(){return set(new Component,{_init:function(){this._model.addSortColumns();this._counter=new JobSearchResultCounter(this._model);this._paginator=new JobSearchResultPaginator(this._model);this.sorter=new JobSearchResultSorter(this._model);this._paginator_bottom=new JobSearchResultPaginator(this._model);this._sorter_bottom=new JobSearchResultSorter(this._model)},getCounter:function(){return this._counter},getPaginator:function(){return this._paginator},getSorter:function(){return this.sorter},
getPaginatorBottom:function(){return this._paginator_bottom},getSorterBottom:function(){return this._sorter_bottom},cleanup:function(){this._counter.cleanup();this._paginator.cleanup();this.sorter.cleanup()},_registerEvents:function(){},renderHtml:function(a){},handleEvent:function(a){}})}();function JobSearchResultCounter(a){this.register();assert(null!=a,"Must have a valid model");this._model=a;this._init();this._registerEvents()}
JobSearchResultCounter.prototype=function(){return set(new Component,{_init:function(){},cleanup:function(){this.unregister()},_registerEvents:function(){},renderHtml:function(a){var b=document.getElementById("jobAlertController_jobAlertName");a.push('\x3cdiv class\x3d"jobCountLine" role\x3d"heading" aria-level\x3d"2"\x3e');1===this._model.getCount()?b&&""!=b.value?a.push(sfMessageFormat.format(MSGS.RECRUITING_JOB_MATCH_SAVED_MESSAGE_WITH_ADVICE_SINGULAR,this._model.getCount(),b.value)):a.push(sfMessageFormat.format(MSGS.RECRUITING_JOB_MATCH_MESSAGE_WITH_ADVICE_SINGULAR,
this._model.getCount())):b&&""!=b.value?a.push(sfMessageFormat.format(MSGS.RECRUITING_JOB_MATCH_SAVED_MESSAGE_WITH_ADVICE,this._model.getCount(),b.value)):a.push(sfMessageFormat.format(MSGS.RECRUITING_JOB_MATCH_MESSAGE_WITH_ADVICE,this._model.getCount()));a.push("\x3c/div\x3e")},handleEvent:function(a){}})}();function JobSearchResultPaginator(a){this.register();assert(null!=a,"Must have a valid resultData");this._model=a;this._init();this._registerEvents()}
JobSearchResultPaginator.prototype=function(){return set(new Component,{_init:function(){this._paginationModel=new SFBoundedRangeModel(0,this._model.getTotalCount(),this._model.getStartRow(),this._model.getPageSize());this._pagination=new SFPagination({noFloat:!0,hideItemsPerPage:!1,model:this._paginationModel,useIconFonts:!0});this._pagination.addEventListener("action",this)},cleanup:function(){this.unregister()},_registerEvents:function(){},renderHtml:function(a){a.push('\x3cspan style\x3d"position:relative"\x3e');
this._paginationModel.setMinimum(0);this._paginationModel.setMaximum(this._model.getTotalCount());this._paginationModel.setValue(this._model.getStartRow());this._paginationModel.setExtent(this._model.getPageSize());this._pagination.renderHtml(a);a.push("\x3c/span\x3e")},handleEvent:function(a){switch(a.type){case "action":"pageAdjust"==a.actionCommand&&(this._model.updatePaginationOptions(a.newPage,a.newPageSize),this.dispatch("paginationChanged",{focusId:this._pagination.id}))}}})}();
function JobSearchResultSorter(a){this.register();this._model=a;this._init();this._registerEvents()}
JobSearchResultSorter.prototype=function(){return set(new Component,{_init:function(){this._filterTypeOption=new SFSingleSelect(this._model.getSortColumn(),this._model.getSortColumns(),"sort by")},cleanup:function(){this.unregister()},_registerEvents:function(){this._filterTypeOption.addEventListener("change",this)},renderHtml:function(a){this._filterTypeOption.setValue(this._model.getSortColumn());a.push('\x3clabel for\x3d"',this._filterTypeOption.id,'" class\x3d"right"\x3e',MSGS.ADMIN_CONFIGURE_SCORECARD_SORT_BY,
" \x3c/label\x3e\x3cspan\x3e");this._filterTypeOption.renderHtml(a);a.push("\x3c/span\x3e\x3cspan\x3e");"JOB_RELEVANCE"!=this._model.getSortColumn()?"ASC"==this._model.getSortOrder()?a.push('\x3ca id\x3d"',this.id,'" href\x3d"javascript:void(0);" class\x3d"moveDownIcon ui5 sortingOrderJobSearch" role\x3d"button" title\x3d"',MSGS.COMMON_SORT_BY_ASC,'" onclick\x3d"',this.fireCode("_changeSortingOrder"),'"\x3e',Util.isFioriFDEnabled()?"\x26#xe1fc;":"\x26#xe04e","\x3c/a\x3e"):a.push('\x3ca id\x3d"',this.id,
'" href\x3d"javascript:void(0);" class\x3d"moveUpIcon ui5 sortingOrderJobSearch" role\x3d"button" title\x3d"',MSGS.COMMON_SORT_BY_DES,'" onclick\x3d"',this.fireCode("_changeSortingOrder"),'"\x3e',Util.isFioriFDEnabled()?"\x26#xe1fd;":"\x26#xe04b;","\x3c/a\x3e"):a.push('\x3ca href\x3d"javascript:void(0);" class\x3d"sortingOrderJobSearch sortingOrderJobSearchNoCursor"\x3e\x3c/a\x3e');a.push("\x3c/span\x3e")},handleEvent:function(a){switch(a.type){case "change":this._model.updateSortOptions(a.newValue),
this.dispatch("sortingChanged",{focusId:this._filterTypeOption.id})}},_changeSortingOrder:function(){this._model.updateSortOrder();this.dispatch("sortingChanged",{focusId:this.id})}})}();