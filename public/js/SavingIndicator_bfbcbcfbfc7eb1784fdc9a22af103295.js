function SavingIndicator(){}SavingIndicator.SAVE_INDICATOR_STATUS_ID="save_indicator_status";SavingIndicator.SAVE_INDICATOR_PENDING_ID="save_indicator_pending";SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID="save_indicator_successful";SavingIndicator.ERROR_INDICATOR_ID="error_indicator_status";SavingIndicator.LOADING_INDICATOR_ID="loading_indicator";SavingIndicator.ALERT_INDICATOR_ID="alert_indicator";SavingIndicator.DATE_PATTERN=MSGS.COMMON_DateTimeFormat;
SavingIndicator.SAVE_EVT=new SFCustomEvent("SavingIndicatorSaveEvt",window);SavingIndicator.POST_SAVE_EVT=new SFCustomEvent("SavingIndicatorPostSaveEvt",window);SavingIndicator.CHANGE_EVT=new SFCustomEvent("SavingIndicatorChangeEvt",window);SavingIndicator.CLEAR_EVT=new SFCustomEvent("SavingIndicatorClearEvt",window);SavingIndicator.ERROR_EVT=new SFCustomEvent("ErrorIndicatorEvt",window);SavingIndicator.LOAD_EVT=new SFCustomEvent("LoadIndicatorEvt",window);
SavingIndicator.DONE_LOAD_EVT=new SFCustomEvent("DoneLoadIndicatorEvt",window);SavingIndicator.CUSTOM_ERROR_EVT=new SFCustomEvent("CustomErrorIndicatorEvt",window);SavingIndicator.CUSTOM_ALERT_EVT=new SFCustomEvent("CustomAlertIndicatorEvt",window);SavingIndicator.CLEAR_ALL_HIGHLIGHTS_EVT=new SFCustomEvent("SavingIndicatorClearAllHighlightEvt",window);SavingIndicator.HAS_CHANGED=!1;SavingIndicator.SHOW_SAVED_TIME=!0;
SavingIndicator.show=function(a,b,c){switch(a){case "SavingIndicatorChangeEvt":b[1]&&(Util.gebi(SavingIndicator.SAVE_INDICATOR_PENDING_ID+"_span_header").innerHTML=" "+b[1]);b[2]&&(Util.gebi(SavingIndicator.SAVE_INDICATOR_PENDING_ID+"_span_body").innerHTML=" "+b[2]);"none"==SFDom.getStyle(SavingIndicator.SAVE_INDICATOR_PENDING_ID,"display")&&(SavingIndicator.clear(),SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_PENDING_ID,"display","block"),SavingIndicator.fadeIn(SavingIndicator.SAVE_INDICATOR_PENDING_ID));
SavingIndicator.highlightChanges(b[0]);SavingIndicator.HAS_CHANGED=!0;break;case "SavingIndicatorSaveEvt":SavingIndicator.clear();Util.gebi(SavingIndicator.SAVE_INDICATOR_STATUS_ID+"_span_body").innerHTML=MSGS.COMMON_SAVING;SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_STATUS_ID,"display","block");break;case "SavingIndicatorPostSaveEvt":SavingIndicator.clear();SavingIndicator.clearAllHighlights();b[0]&&(Util.gebi(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID+"_span_body").innerHTML=" "+b[0]);SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID,
"visibility","visible");SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID,"display","block");document.getElementById(SavingIndicator.SAVE_INDICATOR_PENDING_ID).focus();setTimeout(function(){SavingIndicator.fadeOut(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID);if(SavingIndicator.SHOW_SAVED_TIME){var a=new DateFormat(SavingIndicator.DATE_PATTERN);Util.gebi(SavingIndicator.SAVE_INDICATOR_STATUS_ID+"_span_body").innerHTML=sfMessageFormat.format(MSGS.COMMON_LAST_SAVED,a.format(new Date));a=document.getElementById(SavingIndicator.SAVE_INDICATOR_STATUS_ID);
SFDom.addClass(a,SavingIndicator.SAVE_INDICATOR_STATUS_ID+"_lastsaved");SavingIndicator.fadeIn(SavingIndicator.SAVE_INDICATOR_STATUS_ID)}SavingIndicator.HAS_CHANGED=!1},5E3);break;case "SavingIndicatorClearEvt":SavingIndicator.clear();SavingIndicator.HAS_CHANGED=!1;break;case "ErrorIndicatorEvt":SavingIndicator.clear();a=MSGS.COMMON_Errors_occurred;a=a.replace(/\{0\}/,b[0]);Util.gebi(SavingIndicator.ERROR_INDICATOR_ID+"_span").innerHTML=" "+a;b=Util.gebi(SavingIndicator.ERROR_INDICATOR_ID);SFDom.setX(b,
SFDom.getViewportWidth()-parseInt(SFDom.getComputedStyle(SFDom.getFirstChild(b),"width"))-100);a=SFDom.getXY(b);SFDom.setStyle(b,"display","block");SFAnimUtil.motion(b,{points:{to:[a[0],a[1]]}},{duration:.25});break;case "CustomErrorIndicatorEvt":a=b[0];Util.gebi(SavingIndicator.ERROR_INDICATOR_ID+"_span").innerHTML=" "+a;b=Util.gebi(SavingIndicator.ERROR_INDICATOR_ID);SFDom.setStyle(b,"display","block");break;case "CustomAlertIndicatorEvt":a=b[0];Util.gebi(SavingIndicator.ALERT_INDICATOR_ID+"_span_body").innerHTML=
" "+a;b=Util.gebi(SavingIndicator.ALERT_INDICATOR_ID);SFDom.setStyle(b,"display","block");break;case "LoadIndicatorEvt":SavingIndicator.clear();SFDom.setStyle(SavingIndicator.LOADING_INDICATOR_ID,"display","block");break;case "DoneLoadIndicatorEvt":SavingIndicator.clear(),SFDom.setStyle(SavingIndicator.LOADING_INDICATOR_ID,"display","none")}};
SavingIndicator.highlightChanges=function(a){if(a&&(a=a.elemsToHighlight))for(var b=0;b<a.length;b++){var c=a[b];c&&(SFDom.addClass(c,"unsaved"),SavingIndicator.CLEAR_ALL_HIGHLIGHTS_EVT.subscribe(function(a,b,c){SFDom.removeClass(c,"unsaved")},c))}};SavingIndicator.clearAllHighlights=function(){SavingIndicator.CLEAR_ALL_HIGHLIGHTS_EVT.fire()};
SavingIndicator.clear=function(){var a=Util.gebi(SavingIndicator.SAVE_INDICATOR_STATUS_ID),b=document.getElementById(SavingIndicator.SAVE_INDICATOR_STATUS_ID);SFDom.removeClass(b,SavingIndicator.SAVE_INDICATOR_STATUS_ID+"_lastsaved");a&&(Util.gebi(SavingIndicator.SAVE_INDICATOR_STATUS_ID+"_span_body").innerHTML="",SFDom.setStyle(a,"display","none"));SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_PENDING_ID,"display","none");SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID,"display","none");
SFDom.setStyle(SavingIndicator.ERROR_INDICATOR_ID,"display","none")};SavingIndicator.SAVE_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.POST_SAVE_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.CHANGE_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.CLEAR_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.ERROR_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.LOAD_EVT.subscribe(SavingIndicator.show,this);
SavingIndicator.DONE_LOAD_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.CUSTOM_ERROR_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.CUSTOM_ALERT_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.fadeIn=function(a){SFDom.setStyle(a,"display","block");SFAnimUtil.fadeIn(a)};SavingIndicator.fadeOut=function(a){SFAnimUtil.fadeOut(a)};
SavingIndicator.topNavChanged=function(a,b){var c="hide"==a||pageHeaderJsonData&&"V12"==pageHeaderJsonData.uiVersion?0:95;SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_STATUS_ID,"top",c+"px");SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_PENDING_ID,"top",c+"px");SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID,"top",c+"px");SFDom.setStyle(SavingIndicator.ERROR_INDICATOR_ID,"top",c+"px")};
SFDOMEvent.ready(function(){"undefined"!=typeof TopNavBar?(TopNavBar.hideEvent.subscribe(SavingIndicator.topNavChanged),TopNavBar.showEvent.subscribe(SavingIndicator.topNavChanged)):window.opener&&(SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_STATUS_ID,"margin-top","-90px"),SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_PENDING_ID,"margin-top","-90px"),SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID,"margin-top","-90px"),SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_STATUS_ID,"z-index",
"1"),SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_PENDING_ID,"z-index","1"),SFDom.setStyle(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID,"z-index","1"))});