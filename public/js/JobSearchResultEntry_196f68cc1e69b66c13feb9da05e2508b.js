function JobSearchResultEntry(a){this.register();assert(null!=a.resultEntryData,"Must have a valid resultEntryData");this._entryData=a&&a.resultEntryData?a.resultEntryData:null;this._isInternal=a&&"boolean"==typeof a.isInternal?a.isInternal:!1;this._isUserLoggedIn=a&&"boolean"==typeof a.isUserLoggedIn?a.isUserLoggedIn:!1;this._isApplyWithLinkedInEnabled=a&&"boolean"==typeof a.isUserLoggedIn?a.isApplyWithLinkedInEnabled:!1;this._isOwnershipConfigured=a&&"boolean"==typeof a.isOwnershipConfigured?a.isOwnershipConfigured:
!1;this._disableEmailJobToFriendInternal=a&&"boolean"==typeof a.disableEmailJobToFriendInternal?a.disableEmailJobToFriendInternal:!1;this._disableEmailJobToFriendExternal=a&&"boolean"==typeof a.disableEmailJobToFriendExternal?a.disableEmailJobToFriendExternal:!1;this._init();this._registerEvents()}
JobSearchResultEntry.prototype=function(){return set(new Component,{_init:function(){this._entryText=new JobSearchResultEntryText(this._entryData,this._isInternal,this._isOwnershipConfigured);this._action=new JobSearchResultAction({resultEntryData:this._entryData,isUserLoggedIn:this._isUserLoggedIn,isApplyWithLinkedInEnabled:this._isApplyWithLinkedInEnabled,isOwnershipConfigured:this._isOwnershipConfigured,disableEmailJobToFriendInternal:this._disableEmailJobToFriendInternal,disableEmailJobToFriendExternal:this._disableEmailJobToFriendExternal})},
getText:function(){return this._entryText},getAction:function(){return this._action},cleanup:function(){},_registerEvents:function(){},renderHtml:function(a){},handleEvent:function(a){}})}();function JobSearchResultEntryText(a,b,c){this.register();assert(null!=a,"Must have a valid resultEntryData");this._posting=a;this._isInternal=b;this._isOwnershipConfigured=c;this._init();this._registerEvents()}
JobSearchResultEntryText.prototype=function(){return set(new Component,{_init:function(){this.MilesToKmFactor=1.60934;var a=""==this._posting.multiLingualTitles||null==this._posting.multiLingualTitles?this._posting.multiLingualTitles:JSON.parse(this._posting.multiLingualTitles);this._multiLingualTitles=this.getLanguages(a);this._languageDropDown=new JobPostLangDropDown(this._multiLingualTitles,this._posting.id,this._isInternal)},getLanguages:function(a){var b=[];if(null!=a)for(var c=0;c<a.length;c++)for(key in a[c])b.push({label:a[c][key],
value:key});return b},cleanup:function(){},_registerEvents:function(){},showMFieldDialog:function(a,b,c){this._valueBubble?this._valueBubble.setValues(b):this._valueBubble=new MultipleValueBubble(b);c||(c={refocusId:a,closeOnEsc:!0});SFInfoInContext.show(this._valueBubble,a,c);(a=SFDom.getElementsByClassName("content","","sfOverlayMgr"))&&a[0]&&(a[0].setAttribute("tabindex","0"),a[0].setAttribute("role","note"),a[0].classList.add("closeX"),SFDom.setFocus(a[0].id))},hideMFieldDialog:function(a){SFInfoInContext.hide(a)},
_handleKeyDown:function(a,b,c){switch(SFDOMEvent.getKeyName(c)){case "RETURN":case "SPACEBAR":SFDOMEvent.preventDefault(c),this.showMFieldDialog(a,b,{refocusId:a,closeOnEsc:!0})}},setSearchResultNumber:function(a){this._searchResultNumber=a},renderHtml:function(a){var b="",c;juic.$("jobAlertController_jobAlertId")&&(b="\x26jobAlertController_jobAlertId\x3d"+juic.$("jobAlertController_jobAlertId").value);juic.$("jobAlertController_jobAlertId")&&(b+="\x26jobAlertController_jobAlertName\x3d"+encodeURIComponent(juic.$("jobAlertController_jobAlertName").value));
c=0===this._searchResultNumber?" autofocus ":"";a.push('\x3cdiv role\x3d"heading" aria-level\x3d"3"\x3e\x3ca class\x3d"jobTitle" href\x3d"'+this._posting.detailURL+b+"\x26browserTimeZone\x3d"+Intl.DateTimeFormat().resolvedOptions().timeZone+"\x26_s.crb\x3d"+ajaxSecKey+'" '+c+"\x3e"+Util.escapeHTML(this._posting.title)+"\x3c/a\x3e");this._isOwnershipConfigured&&this._posting.showReferJobToFriend&&(b=Util.isFioriFDEnabled()?"group":"empReferralIcon",this._empReferralIcon=new RCMIcon(b,MSGS.RECRUITING_EMPLOYEE_REFERRAL,
!0),this._empReferralIcon.renderHtml(a));this._languageDropDown.renderHtml(a);a.push("\x3c/div\x3e");a.push('\x3cdiv class\x3d"noteSection" role\x3d"note"\x3e');a.push("\x3cdiv\x3e"+MSGS.RECRUITING_JOB_SEARCH_REQUISITION_ID+' \x3cspan class\x3d"jobContentEM"\x3e'+this._posting.id+'\x3c/span\x3e - \x3cspan class\x3d"jobContentEM"\x3e'+sfMessageFormat.format(MSGS.RCM_JRS_JOB_POSTED_ON,this._posting.postingDate)+"\x3c/span\x3e - ");isNaN(this._posting.radialDistance)||(b=+this._posting.radialDistance,
this._posting.isLocaleDistanceUnitMiles&&(b/=this.MilesToKmFactor),a.push(MSGS.RECRUITING_RADIAL_SEARCH_DISTANCE_COLUMN+'\x3cspan class\x3d"jobContentEM"\x3e '+b.toFixed(1)+"\x26nbsp"),this._posting.isLocaleDistanceUnitMiles?a.push(MSGS.RECRUITING_RADIAL_SEARCH_RESULT_UNIT_MILES):a.push(MSGS.RECRUITING_RADIAL_SEARCH_RESULT_UNIT_KMS),a.push("\x3c/span\x3e - "));b=!0;c=0;for(var f=this._posting.otherValues.length;c<f;c++){var h=this._posting.otherValues[c];b?b=!1:a.push("\x3cdiv\x3e");for(var k=!0,
l=0,m=h.length;l<m;l++){var d=h[l],e=!d.shortVal||/^\s*$/.test(d.shortVal);k||e?e||(k=!1):a.push("\x26nbsp;\x26nbsp;-\x26nbsp;\x26nbsp;");if(d.fieldId&&d.fieldId.indexOf&&0==d.fieldId.indexOf("mfield")){if((e=d.longVal&&JSON.parse(d.longVal)||d.shortVal&&JSON.parse(d.shortVal))&&e.length){var g=e[0],g=g+" ("+(e.length-1)+")",d=this.id+"_"+d.fieldId;a.push('\x3cspan class\x3d"jobMFieldContent" id\x3d"'+d+'" aria-label\x3d"'+g+'" role\x3d"button" tabindex\x3d"0" onclick\x3d"'+this.fireCode("showMFieldDialog",
d,e.slice(1),null)+'" onkeydown\x3d"'+this.fireCode("_handleKeyDown",d,e.slice(1))+'"\x3e',g,"\x3c/span\x3e")}}else d.fieldId&&d.fieldId.indexOf&&0==d.fieldId.indexOf("location_obj")?(e=d.longVal&&JSON.parse(d.longVal)||d.shortVal&&JSON.parse(d.shortVal))&&e.length&&(a.push('\x3cspan class\x3d"jobContentEM"\x3e',juic.escapeHTML(e[2]),"\x3c/span\x3e"),3<e.length&&1<e[1]&&(g=" "+MSGS.COMMON_More+"("+(e.length-3)+")",d=this.id+"_"+d.fieldId,a.push('\x3cspan class\x3d"jobMFieldContent" id\x3d"'+d+'" aria-label\x3d"'+
g+'" role\x3d"button" tabindex\x3d"0" onclick\x3d"'+this.fireCode("showMFieldDialog",d,e.slice(2),null)+'" onkeydown\x3d"'+this.fireCode("_handleKeyDown",d,e.slice(2))+'"\x3e',g,"\x3c/span\x3e"))):d.longVal?(new SearchResultLongEntry("tt"+c+"_"+l+"_"+this._posting.id,d.shortVal,d.longVal)).renderHtml(a):a.push('\x3cspan class\x3d"jobContentEM"\x3e',juic.maybeEscapeHTML(d.shortVal),"\x3c/span\x3e")}a.push("\x3c/div\x3e")}a.push("\x3c/div\x3e")},handleEvent:function(a){}})}();
function MultipleValueBubble(a){this.register();this._valueArray=a}MultipleValueBubble.prototype=function(){return set(new Component,{renderHtml:function(a){var b=this._valueArray&&this._valueArray.length;if(b){a.push('\x3cdiv class\x3d"popOverDialog" style\x3d"width:215px"\x3e');for(var c=0;c<b;c++)a.push("\x3cbr\x3e"),a.push("\x3cspan style\x3d'jobContentEM'\x3e"+juic.maybeEscapeHTML(this._valueArray[c])+"\x3c/span\x3e");a.push("\x3c/div\x3e")}},setValues:function(a){this._valueArray=a},cleanup:function(){this.unregister()}})}();
function JobSearchResultAction(a){this.register();assert(null!=a.resultEntryData,"Must have a valid resultEntryData");this._entryData=a&&a.resultEntryData?a.resultEntryData:null;this._isUserLoggedIn=a&&"boolean"==typeof a.isUserLoggedIn?a.isUserLoggedIn:!1;this._isApplyWithLinkedInEnabled=a&&"boolean"==typeof a.isUserLoggedIn?a.isApplyWithLinkedInEnabled:!1;this._isOwnershipConfigured=a&&"boolean"==typeof a.isOwnershipConfigured?a.isOwnershipConfigured:!1;this._disableEmailJobToFriendInternal=a&&
"boolean"==typeof a.disableEmailJobToFriendInternal?a.disableEmailJobToFriendInternal:!1;this._disableEmailJobToFriendExternal=a&&"boolean"==typeof a.disableEmailJobToFriendExternal?a.disableEmailJobToFriendExternal:!1;this._init();this._registerEvents()}
JobSearchResultAction.prototype=function(){return set(new Component,{_init:function(){},cleanup:function(){},_registerEvents:function(){},buildSearchResultActionMenu:function(){for(var a=this.buildMenuItems(),b=0,c=a.length;b<c;b++){var f=a[b],f=new RCMRolloverMenu(f.menuType,f.displayText,f.actionCommand,f.actionData,f.encodeDisplayText,f.iconHexCode,c,b);f.addEventListener("action",this);this._massActionMenu.addMenuItem(f)}},renderHtml:function(a){this._massActionMenu=new SFContextualMenu(MSGS.RECRUITING_JOB_SEARCH_SELECT_ACTION,
"arrowDown",!0,"",!1,!1,!0);this._massActionMenu._ariaLabel=juic.escapeHTML(this._entryData.title)+" "+this._massActionMenu._label;a.push('\x3cdiv id\x3d"'+this.id+'" class\x3d"selectActionMenu selectActionMenu_accessible"\x3e');this.buildSearchResultActionMenu();this._massActionMenu.renderHtml(a);a.push("\x3c/div\x3e")},buildMenuItems:function(){var a=[];this._isUserLoggedIn?(a.push(this.setMenuConfig("edit",MSGS.RECRUITING_JOB_LISTING_APPLY,"loggedInApplyJob","","","\x26#xe038;")),this._isApplyWithLinkedInEnabled&&
a.push(this.setMenuConfig("linkedin",MSGS.RECRUITING_JOB_LISTING_APPLY_USING_LINKIN,"loggedInApplyJobUsingLinkedIn","","","\x26#xe038;")),a.push(this.setMenuConfig("save",MSGS.RECRUITING_JOB_LISTING_SAVE_JOB,"loggedInSaveJob","","","\x26#xe09a;")),this._disableEmailJobToFriendInternal||this._disableEmailJobToFriendExternal||a.push(this.setMenuConfig("email",MSGS.RECRUITING_EMAIL_JOB_BUTTON,"emailJobMenu","","","\x26#xe037;")),this._isOwnershipConfigured&&this._entryData.showReferJobToFriend&&a.push(this.setMenuConfig("forward",
MSGS.RECRUITING_REFER_FRIEND_TO_JOB,"referJobToFriendMenu","","","\x26#xe1f1;"))):(a.push(this.setMenuConfig("edit",MSGS.RECRUITING_JOB_LISTING_APPLY,"applyJobMenu","","","\x26#xe038;")),this._isApplyWithLinkedInEnabled&&a.push(this.setMenuConfig("linkedin",MSGS.RECRUITING_JOB_LISTING_APPLY_USING_LINKIN,"applyUsingLinkedInJobMenu","","","\x26#xe038;")),this._disableEmailJobToFriendInternal||this._disableEmailJobToFriendExternal||a.push(this.setMenuConfig("email",MSGS.RECRUITING_EMAIL_JOB_BUTTON,"emailJobMenu",
"","","\x26#xe037;")));return a},setMenuConfig:function(a,b,c,f,h,k){return{menuType:a,displayText:b,actionCommand:c,actionData:f,encodeDisplayText:h,iconHexCode:k}},handleEvent:function(a){switch(a.actionCommand){case "applyJobMenu":Util.setField("career_job_req_id",this._entryData.id);Util.setField("career_job_req_sec_key",this._entryData.jobReqSecKey);Util.setField("career_os","job_listing_summary");Util.setField("navBarLevel","JOB_SEARCH");Util.setField("isApplyWithLinkedIn","false");Util.setFieldAndSubmit("career_ns",
"job_application");break;case "applyUsingLinkedInJobMenu":Util.setField("career_job_req_id",this._entryData.id);Util.setField("career_job_req_sec_key",this._entryData.jobReqSecKey);Util.setField("career_os","job_listing_summary");Util.setField("navBarLevel","JOB_SEARCH");Util.setField("isApplyWithLinkedIn",this._isApplyWithLinkedInEnabled?"true":"false");Util.setFieldAndSubmit("career_ns","job_application");break;case "emailJobMenu":this._massActionMenu.hide();emailJobReq(this._entryData.id,this._massActionMenu.id,
escapeHTML(this._entryData.title),this._entryData.defaultLocale,""+this._entryData.corporatePosting,"label_"+this._massActionMenu.id);break;case "loggedInApplyJob":checkDpcs2AndProceed({jobReqId:this._entryData.id,jobSecKey:this._entryData.jobReqSecKey,isApplyWithLinkedIn:!1,evtSrc:"Apply"});break;case "loggedInApplyJobUsingLinkedIn":checkDpcs2AndProceed({jobReqId:this._entryData.id,jobSecKey:this._entryData.jobReqSecKey,isApplyWithLinkedIn:!0,evtSrc:"Apply"});break;case "loggedInSaveJob":checkDpcs2AndProceed({jobReqId:this._entryData.id,
jobSecKey:this._entryData.jobReqSecKey,saveRedirect:this._entryData.saveRedirect,evtSrc:"SaveJob"});break;case "referJobToFriendMenu":this._massActionMenu.hide(),this._addReferralDialog=new AddReferralDialog({title:MSGS.RECRUITING_REFER_FRIEND_TO_JOB,context:"referJobToFriend",jobReqId:this._entryData.id,refocusId:"label_"+this._massActionMenu.id})}}})}();function SearchResultLongEntry(a,b,c){this.register();this._divId=a;this._shortVal=b;this._longVal=c}
SearchResultLongEntry.prototype=function(){return set(new Component,{renderHtml:function(a){a.push('\x3cspan id\x3d"',this._divId,'" class\x3d"jobContentEM" onmouseout\x3d',this.fireCode("_hideTooltip")," onmouseover\x3d",this.fireCode("_showTooltip"));a.push("\x3e",juic.maybeEscapeHTML(this._shortVal),"\x3c/span\x3e")},_showTooltip:function(){SFInfoInContext.show(new SFLabel(this._longVal),this._divId)},_hideTooltip:function(){SFInfoInContext.hide(this._divId)},handleEvent:function(a){},cleanup:function(){this.unregister()}})}();