(function(e){var h=e.dwr;h||(h=e.dwr={});var f=h.engine;f||(f=h.engine={});e.DWREngine||(e.DWREngine=h.engine);var g=e.AjaxService,h=e.AjaxServiceFactory;h||(h=e.AjaxServiceFactory={});e=e.quickcardControllerASProxy=function(){};h.quickcardController=e;e.addBadge=function(c,b,a){var d={};"undefined"!=typeof a&&("function"==typeof a?d.callback=a:d=a);d.headers=g._preCall();"undefined"!=typeof cid&&(d.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","addBadge",c,b,d)};e.addNote=
function(c,b,a){var d={};"undefined"!=typeof a&&("function"==typeof a?d.callback=a:d=a);d.headers=g._preCall();"undefined"!=typeof cid&&(d.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","addNote",c,b,d)};e.getActionList=function(c,b,a){var d={};"undefined"!=typeof a&&("function"==typeof a?d.callback=a:d=a);d.headers=g._preCall();"undefined"!=typeof cid&&(d.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","getActionList",c,b,d)};e.getActionListGoToLinks=
function(c,b){var a={};"undefined"!=typeof b&&("function"==typeof b?a.callback=b:a=b);a.headers=g._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","getActionListGoToLinks",c,a)};e.getBadgeTemplates=function(c){var b={};"undefined"!=typeof c&&("function"==typeof c?b.callback=c:b=c);b.headers=g._preCall();"undefined"!=typeof cid&&(b.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","getBadgeTemplates",b)};e.getGoToList=
function(c,b){var a={};"undefined"!=typeof b&&("function"==typeof b?a.callback=b:a=b);a.headers=g._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","getGoToList",c,a)};e.getPersonInfo=function(c,b){var a={};"undefined"!=typeof b&&("function"==typeof b?a.callback=b:a=b);a.headers=g._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","getPersonInfo",c,a)};e.getPersonInfoWithId=
function(c,b,a){var d={};"undefined"!=typeof a&&("function"==typeof a?d.callback=a:d=a);d.headers=g._preCall();"undefined"!=typeof cid&&(d.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","getPersonInfoWithId",c,b,d)};e.getPersonInfoWithIdFromHeader=function(c,b,a){var d={};"undefined"!=typeof a&&("function"==typeof a?d.callback=a:d=a);d.headers=g._preCall();"undefined"!=typeof cid&&(d.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","getPersonInfoWithIdFromHeader",
c,b,d)};e.getPersonInfoWithPersonId=function(c,b){var a={};"undefined"!=typeof b&&("function"==typeof b?a.callback=b:a=b);a.headers=g._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","getPersonInfoWithPersonId",c,a)};e.getRenderingInfoPersonAdvancedSearch=function(c,b){var a={};"undefined"!=typeof b&&("function"==typeof b?a.callback=b:a=b);a.headers=g._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);f._execute("/ec/ajax/remoting",
"quickcardControllerProxy","getRenderingInfoPersonAdvancedSearch",c,a)};e.getShowMoreInfo=function(c,b,a){var d={};"undefined"!=typeof a&&("function"==typeof a?d.callback=a:d=a);d.headers=g._preCall();"undefined"!=typeof cid&&(d.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","getShowMoreInfo",c,b,d)};e.getTakeActionPermission=function(c,b,a){var d={};"undefined"!=typeof a&&("function"==typeof a?d.callback=a:d=a);d.headers=g._preCall();"undefined"!=typeof cid&&(d.headers.cid=
cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","getTakeActionPermission",c,b,d)};e.getTalentCardTemplates=function(c,b){var a={};"undefined"!=typeof b&&("function"==typeof b?a.callback=b:a=b);a.headers=g._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","getTalentCardTemplates",c,a)};e.isOrgChartEnabled=function(c){var b={};"undefined"!=typeof c&&("function"==typeof c?b.callback=c:b=c);b.headers=g._preCall();"undefined"!=
typeof cid&&(b.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","isOrgChartEnabled",b)};e.searchPersonAdvanced=function(c,b){var a={};"undefined"!=typeof b&&("function"==typeof b?a.callback=b:a=b);a.headers=g._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","searchPersonAdvanced",c,a)};e.searchPersonAutocomplete=function(c,b){var a={};"undefined"!=typeof b&&("function"==typeof b?a.callback=b:a=b);a.headers=
g._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","searchPersonAutocomplete",c,a)};e.searchUser=function(c,b){var a={};"undefined"!=typeof b&&("function"==typeof b?a.callback=b:a=b);a.headers=g._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","searchUser",c,a)};e.searchUserFromSolr=function(c,b){var a={};"undefined"!=typeof b&&("function"==typeof b?a.callback=b:a=b);a.headers=
g._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);f._execute("/ec/ajax/remoting","quickcardControllerProxy","searchUserFromSolr",c,a)}})(window);