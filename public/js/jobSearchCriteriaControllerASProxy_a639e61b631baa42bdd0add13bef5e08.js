(function(a){var c=a.dwr;c||(c=a.dwr={});var d=c.engine;d||(d=c.engine={});a.DWREngine||(a.DWREngine=c.engine);var e=a.AjaxService,c=a.AjaxServiceFactory;c||(c=a.AjaxServiceFactory={});a=a.jobSearchCriteriaControllerASProxy=function(){};c.jobSearchCriteriaController=a;a.getCascadePicklistConfigs=function(a,b){var c={};"undefined"!=typeof b&&("function"==typeof b?c.callback=b:c=b);c.headers=e._preCall();"undefined"!=typeof cid&&(c.headers.cid=cid);d._execute("/xi/ajax/remoting","jobSearchCriteriaControllerProxy",
"getCascadePicklistConfigs",a,c)};a.getCriteriaModel=function(a){var b={};"undefined"!=typeof a&&("function"==typeof a?b.callback=a:b=a);b.headers=e._preCall();"undefined"!=typeof cid&&(b.headers.cid=cid);d._execute("/xi/ajax/remoting","jobSearchCriteriaControllerProxy","getCriteriaModel",b)};a.isPicklistSortingKeyEnabled=function(a){var b={};"undefined"!=typeof a&&("function"==typeof a?b.callback=a:b=a);b.headers=e._preCall();"undefined"!=typeof cid&&(b.headers.cid=cid);d._execute("/xi/ajax/remoting",
"jobSearchCriteriaControllerProxy","isPicklistSortingKeyEnabled",b)}})(window);