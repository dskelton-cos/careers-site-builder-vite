(function(c){var f=c.dwr;f||(f=c.dwr={});var e=f.engine;e||(e=f.engine={});c.DWREngine||(c.DWREngine=f.engine);var g=c.AjaxService,f=c.AjaxServiceFactory;f||(f=c.AjaxServiceFactory={});c=c.rcm2jobAlertControllerASProxy=function(){};f.rcm2jobAlertController=c;c.createNewAlert=function(d,a){var b={};"undefined"!=typeof a&&("function"==typeof a?b.callback=a:b=a);b.headers=g._preCall();"undefined"!=typeof cid&&(b.headers.cid=cid);e._execute("/xi/ajax/remoting","rcm2jobAlertControllerProxy","createNewAlert",
d,b)};c.deleteAlert=function(d,a){var b={};"undefined"!=typeof a&&("function"==typeof a?b.callback=a:b=a);b.headers=g._preCall();"undefined"!=typeof cid&&(b.headers.cid=cid);e._execute("/xi/ajax/remoting","rcm2jobAlertControllerProxy","deleteAlert",d,b)};c.getAllJobAlerts=function(d){var a={};"undefined"!=typeof d&&("function"==typeof d?a.callback=d:a=d);a.headers=g._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);e._execute("/xi/ajax/remoting","rcm2jobAlertControllerProxy","getAllJobAlerts",
a)};c.getJobAlert=function(d,a){var b={};"undefined"!=typeof a&&("function"==typeof a?b.callback=a:b=a);b.headers=g._preCall();"undefined"!=typeof cid&&(b.headers.cid=cid);e._execute("/xi/ajax/remoting","rcm2jobAlertControllerProxy","getJobAlert",d,b)};c.getRadialSearchCountyList=function(d){var a={};"undefined"!=typeof d&&("function"==typeof d?a.callback=d:a=d);a.headers=g._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);e._execute("/xi/ajax/remoting","rcm2jobAlertControllerProxy","getRadialSearchCountyList",
a)};c.isAlertMaxReached=function(d){var a={};"undefined"!=typeof d&&("function"==typeof d?a.callback=d:a=d);a.headers=g._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);e._execute("/xi/ajax/remoting","rcm2jobAlertControllerProxy","isAlertMaxReached",a)};c.saveJobAlert=function(d,a){var b={};"undefined"!=typeof a&&("function"==typeof a?b.callback=a:b=a);b.headers=g._preCall();"undefined"!=typeof cid&&(b.headers.cid=cid);e._execute("/xi/ajax/remoting","rcm2jobAlertControllerProxy","saveJobAlert",
d,b)};c.setAlertType=function(d,a,b){var c={};"undefined"!=typeof b&&("function"==typeof b?c.callback=b:c=b);c.headers=g._preCall();"undefined"!=typeof cid&&(c.headers.cid=cid);e._execute("/xi/ajax/remoting","rcm2jobAlertControllerProxy","setAlertType",d,a,c)}})(window);