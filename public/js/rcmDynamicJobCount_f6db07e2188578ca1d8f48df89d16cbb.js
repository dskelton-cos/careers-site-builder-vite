function rcmDynamicJobCount(a){this._jobCount=a;this.register();this.init()}
rcmDynamicJobCount.prototype=function(){return set(new Component,{init:function(){var a=0!=this._jobCount;this._loadingIndicator=new rcmCountLoading;this._rcmNoJob=new rcmNoJob(a);this._rcmJobCount=new rcmJobCount(a,this._jobCount)},renderHtml:function(a){a.push('\x3cdiv class\x3d"filterJobCountLine"\x3e');this._loadingIndicator.renderHtml(a);this._rcmNoJob.renderHtml(a);this._rcmJobCount.renderHtml(a);a.push("\x3c/div\x3e")},showLoading:function(){this._show(this._loadingIndicator,!1);this._hide(this._rcmNoJob);
this._hide(this._rcmJobCount)},_show:function(a,b){var d=b?"inline-block":"",c=document.getElementById(a.id);null!=c&&(c.style.display=d)},_hide:function(a){a=document.getElementById(a.id);null!=a&&(a.style.display="none")},setCount:function(a){this._hide(this._loadingIndicator);this._oldCount=this._jobCount;this._jobCount=a;this._rcmJobCount.updateCount(a);0!=a?(this._hide(this._rcmNoJob),this._show(this._rcmJobCount,!1)):(this._hide(this._rcmJobCount),this._show(this._rcmNoJob,!0));this.dispatch("jobCountChanged",
{data:this._jobCount})}})}();function rcmCountLoading(){this.register();this._loading=new SFLabel(MSGS.COMMON_DG_Updating)}rcmCountLoading.prototype=function(){return set(new Component,{renderHtml:function(a){a.push('\x3cspan class\x3d"loadingText" id\x3d"',this.id,'" style\x3d"display:none"\x3e\x3cdiv\x3e');this._loading.renderHtml(a);a.push("\x3c/div\x3e\x3cdiv\x3e\x26nbsp;\x3c/div\x3e\x3c/span\x3e")}})}();function rcmNoJob(a){this.register();this._hasJob=a}
rcmNoJob.prototype=function(){return set(new Component,{renderHtml:function(a){a.push('\x3cspan class\x3d"nowrap_accessible" aria-live\x3d"polite" id\x3d"',this.id,'" style\x3d"max-width:230px;display:',this._hasJob?"none":"inline-block",'"\x3e');a.push(MSGS.RECRUITING_NO_JOB_COUNT_MESSAGE_WITH_ADVICE);a.push("\x3c/span\x3e")}})}();function rcmJobCount(a,b){this.register();this._hasJob=a;this._count=new SFText(b)}
rcmJobCount.prototype=function(){return set(new Component,{renderHtml:function(a){a.push('\x3cdiv class\x3d"filterJobMessage" aria-live\x3d"polite" id\x3d"',this.id,'" style\x3d"display:',this._hasJob?"":"none",'"\x3e');var b=[];this._count.renderHtml(b);a.push(sfMessageFormat.format(MSGS.RECRUITING_JOB_COUNT_MESSAGE_WITH_ADVICE,b.join("")));a.push("\x3c/div\x3e")},updateCount:function(a){this._count.setValue(a);this._count.refresh()}})}();