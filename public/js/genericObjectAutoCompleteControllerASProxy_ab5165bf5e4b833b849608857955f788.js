(function(a){var d=a.dwr;d||(d=a.dwr={});var e=d.engine;e||(e=d.engine={});a.DWREngine||(a.DWREngine=d.engine);var f=a.AjaxService,d=a.AjaxServiceFactory;d||(d=a.AjaxServiceFactory={});a=a.genericObjectAutoCompleteControllerASProxy=function(){};d.genericObjectAutoCompleteController=a;a.search=function(a,c){var b={};"undefined"!=typeof c&&("function"==typeof c?b.callback=c:b=c);b.headers=f._preCall();"undefined"!=typeof cid&&(b.headers.cid=cid);e._execute("/xi/ajax/remoting","genericObjectAutoCompleteControllerProxy",
"search",a,b)};a.searchByExternalCode=function(a,c){var b={};"undefined"!=typeof c&&("function"==typeof c?b.callback=c:b=c);b.headers=f._preCall();"undefined"!=typeof cid&&(b.headers.cid=cid);e._execute("/xi/ajax/remoting","genericObjectAutoCompleteControllerProxy","searchByExternalCode",a,b)};a.searchByInternalCode=function(a,c){var b={};"undefined"!=typeof c&&("function"==typeof c?b.callback=c:b=c);b.headers=f._preCall();"undefined"!=typeof cid&&(b.headers.cid=cid);e._execute("/xi/ajax/remoting",
"genericObjectAutoCompleteControllerProxy","searchByInternalCode",a,b)}})(window);