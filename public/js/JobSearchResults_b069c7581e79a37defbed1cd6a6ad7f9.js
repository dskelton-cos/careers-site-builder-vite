function JobSearchResults(a,b,d){this.register();assert(null!=a,"Must have a valid resultData");this._model=new JobSearchResultsModel(a);this._model.setFiltersList(b);this._initAjax(d);this._init();this._registerEvents()}
JobSearchResults.prototype=function(){return set(new Component,{_init:function(){this._actionDAO=new JobSearchResultsDAO(this._ajaxController);this._resultHeader=new JobSearchResultHeader(this._model);this._loadingBox=new SFLoading(MSGS.COMMON_loading,"",{isNewLoadingIndicator:!0});this._focusElementId=null},_initAjax:function(a){this._ajaxController=null==a?AjaxService.getMBeanInstance("careerJobSearchController"):a},cleanup:function(){this._actionDAO.cleanup();this._resultHeader.cleanup()},_registerEvents:function(){this._resultHeader.getSorter().addEventListener("sortingChanged",
this);this._actionDAO.addEventListener("searchResultsObtained",this);this._actionDAO.addEventListener("searchResultsObtainedForSearch",this);this._actionDAO.addEventListener("searchFailed",this);this._resultHeader.getPaginator().addEventListener("paginationChanged",this);this._resultHeader.getPaginatorBottom().addEventListener("paginationChanged",this);this._resultHeader.getSorterBottom().addEventListener("sortingChanged",this)},renderHtml:function(a){a.push('\x3cdiv id\x3d"'+this.id+'"\x3e');this.rederResult(a);
a.push("\x3c/div\x3e")},_showLoadingBox:function(){this._loadingBox&&SFOverlayMgr.showOverlay(this._loadingBox,!0)},_hideLoadingBox:function(){this._loadingBox&&this._loadingBox.hide()},setFocusElementId:function(a){this._focusElementId=a},getFocusElementId:function(){return this._focusElementId},rederResult:function(a){a.push('\x3ctable role\x3d"presentation" border\x3d"0" style\x3d"margin-bottom:2px;margin-left:10px;margin-right:2px;width:100%" \x3e');if(this._model.getCount()&&0<this._model.getCount()){a.push('\x3ctr\x3e\x3ctd class\x3d"resultsHeaderCounter" colspan\x3d"3"\x3e');
this._resultHeader.getCounter().renderHtml(a);a.push("\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e");a.push('\x3ctd class\x3d"resultsHeaderPaginator"\x3e');this._resultHeader.getPaginator().renderHtml(a);a.push("\x3c/td\x3e");a.push('\x3ctd class\x3d"resultSorter" colspan\x3d"2" nowrap\x3d"true"\x3e');this._resultHeader.getSorter().renderHtml(a);a.push("\x3c/td\x3e\x3c/tr\x3e");a.push('\x3ctr class\x3d"resultSeparator"\x3e\x3ctd colspan\x3d"3"\x3e\x3cdiv class\x3d"jobResultHeader"\x3e\x3chr\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e');
for(var b=0,d=this._model.getPostings().length;b<d;b++){var c=new JobSearchResultEntry({resultEntryData:this._model.getPosting(b),isInternal:this._model.isInternal(),isUserLoggedIn:this._model.isUserLoggedIn(),isApplyWithLinkedInEnabled:this._model.getIsApplyWithLinkedInEnabled(),isOwnershipConfigured:this._model.getisOwnershipConfigured(),disableEmailJobToFriendInternal:this._model.disableEmailJobToFriendInternalEnabled(),disableEmailJobToFriendExternal:this._model.disableEmailJobToFriendExternalEnabled()});
a.push('\x3ctr class\x3d"jobResultItem"\x3e\x3ctd\x3e');c.getText().setSearchResultNumber(b);c.getText().renderHtml(a);a.push('\x3c/td\x3e\x3ctd\x3e\x3cdiv class\x3d"jobResultItemMenu"\x3e');c.getAction().renderHtml(a);a.push("\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e");b+1===d?a.push('\x3ctr class\x3d"resultSeparator" \x3e\x3ctd colspan\x3d"3"\x3e\x3cdiv class\x3d"jobResultHeader"\x3e\x3chr\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e'):a.push('\x3ctr class\x3d"resultSeparator"\x3e\x3ctd colspan\x3d"3"\x3e\x3cdiv class\x3d"jobResult jobResult_accessible"\x3e\x3chr\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e')}a.push('\x3ctr\x3e\x3ctd colspan\x3d"3"\x3e\x26nbsp;\x3c/td\x3e\x3c/tr\x3e');
a.push('\x3ctr class\x3d"bottomPaginator"\x3e');a.push("\x3ctd\x3e");this._resultHeader.getPaginatorBottom().renderHtml(a);a.push("\x3c/td\x3e");a.push('\x3ctd colspan\x3d"2"\x3e');this._resultHeader.getSorterBottom().renderHtml(a);a.push("\x3c/td\x3e\x3c/tr\x3e");a.push('\x3ctr\x3e\x3ctd colspan\x3d"3"\x3e\x26nbsp;\x3c/td\x3e\x3c/tr\x3e')}else a.push('\x3ctr\x3e\x3ctd colspan\x3d"3"\x3e\x3cdiv class\x3d"noJobCountText" aria-live\x3d"polite"\x3e',MSGS.RECRUITING_NO_JOB_MATCH,"\x3cbr\x3e",MSGS.RECRUITING_NO_JOB_COUNT_ADVICE,
"\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e");a.push("\x3c/table\x3e")},reRederResult:function(){var a=[];this.rederResult(a);juic.$(this.id).innerHTML=a.join("")},reRender:function(){var a=[];this.renderHtml(a);juic.$(this.id+"_w").innerHTML=a.join("")},search:function(){this._actionDAO.search()},handleEvent:function(a){switch(a.type){case "searchFailed":this._hideLoadingBox();alert(a.errMsg);break;case "searchCompleted":alert("searchCompleted handle");this._model.setSearchResult(a.data.results);this.dispatch("filterReloaded",
{data:a.data.filters});this.rederResult();break;case "sortingChanged":this.setFocusElementId(a.focusId);this._showLoadingBox();this._actionDAO.searchForSortingAndPagination(this._model.getOptions());break;case "searchResultsObtained":this._model.setSearchResult(a.data.results);this._hideLoadingBox();this.reRederResult();SFDom.setFocus(this.getFocusElementId());break;case "paginationChanged":this.setFocusElementId(a.focusId);this._showLoadingBox();this._actionDAO.searchForSortingAndPagination(this._model.getOptions());
break;case "searchJobs":this._showLoadingBox();this._actionDAO.searchJobs(a.data);break;case "searchResultsObtainedForSearch":this._model.setSearchResult(a.data.results),this.dispatch("reloadFiltersAfterSearch",{data:a.data.filters}),this._hideLoadingBox(),this.reRederResult()}}})}();function JobSearchResultsDAO(a){this._ajaxController=a;this._init()}
JobSearchResultsDAO.prototype=function(){return set(new juic.EventTarget,{_init:function(){},cleanup:function(){},search:function(a){var b={model:this,callback:function(a){b.model.dispatch("searchCompleted",{data:a})}};this._ajaxController.search(b)},searchForSortingAndPagination:function(a){var b={model:this,callback:function(a){b.model.dispatch("searchResultsObtained",{data:a})},exceptionHandler:function(a,c){b.model.dispatch("searchFailed",{errMsg:c.message})}};this._ajaxController.search(a,b)},
searchJobs:function(a){var b={model:this,callback:function(a){b.model.dispatch("searchResultsObtainedForSearch",{data:a})}};this._ajaxController.searchJobs(a,b)}})}();