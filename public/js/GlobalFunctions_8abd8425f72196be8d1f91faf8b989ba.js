function secureUrl(a){var b=null!=/^(https?:)?\/\/.*/i.exec(a);if(b){var c=window.location,d=c.port;0===a.indexOf(c.origin||c.protocol+"//"+c.hostname+(d?":"+d:""))&&(b=!1)}var e=window.pageHeaderJsonData&&window.pageHeaderJsonData.baseUrl&&0===a.indexOf(window.pageHeaderJsonData.baseUrl);if(b&&e&&(b=!1),b){if(window.interstitial){var f=a.lastIndexOf(interstitial.skipinterstitial);if(0<=f&&(a=a.substring(0,f)+a.substring(f+interstitial.skipinterstitial.length),!interstitial.disableskipinterstitialflag))return a;if(InterstitialUtil.isInterstitialWhitelisted(a))return a;switch(interstitial.version){case"1.0":a=interstitial.urlPrefix+encodeURIComponent(a);break;case"2.0":"function"==typeof b64_hmac_sha256&&(window.b64pad="=",a=interstitial.urlPrefix+encodeURIComponent(a)+"&_s.isg="+encodeURIComponent(b64_hmac_sha256(interstitial.secretKey,a)));}}return a}var g=a.toLowerCase();if(!e&&(0===g.indexOf("http:")||0===g.indexOf("https:")||0===g.indexOf("http%3a")||0===g.indexOf("https%3a")||0===g.indexOf("javascript:")||0===g.indexOf("blob:http")))return a;var h=/^([^#]*)(#.*)?$/.exec(a),i=h[1];return 0<=i.indexOf("?")?0<=i.indexOf("_s.crb")?i=i.replace(/(_s.crb=)[^\&]+/,"$1"+ajaxSecKey):i+="&_s.crb="+ajaxSecKey:i+="?_s.crb="+ajaxSecKey,i+(h[2]||"")}(function(){var a=window.open;if(window.open=function(b,c,d){return b&&null==/^(javascript:)/i.exec(b)?a(secureUrl(b),c,d):a(b,c,d)},window.showModelessDialog){var b=window.showModelessDialog,c=window.showModalDialog;window.showModelessDialog=function(a,c,d){return b(secureUrl(a),c,d)},window.showModalDialog=function(a,b,d){return c(secureUrl(a),b,d)}}window.setLocation=function(a){window.location=secureUrl(a)},window.openInterstitialWindow=function(a,b,c,d){var e=c;d||(e="noopener,noreferrer"+(e?",":"")+e),window.open(a,b,e)}})(),window.CKEDITOR_DEFAULT_SKIN="moono",window.CKEDITOR_GETURL=function(a){return-1==a.indexOf(":/")&&0!==a.indexOf("/")&&(a=CKEDITOR.basePath+a),-1!=a.indexOf("/lang/en.js")&&-1==a.indexOf("/dialogs/lang/en.js")&&(a=a.replace("lang","sflang")),a},window.getMSGSWindow=function(){var a=window.parent;if(a)try{a.MSGS||(a=null)}catch(b){a=null}return a||(a=window),a};