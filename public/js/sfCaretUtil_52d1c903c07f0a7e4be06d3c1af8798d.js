"undefined"==typeof SFCaretUtil&&function(){window.SFCaretUtil={caret:function(a,b,c){var d,e,f=Util.ieVersion(!0);if(f=0<f&&10>=f,"object"==typeof b&&"number"==typeof b.start&&"number"==typeof b.end)d=b.start,e=b.end;else if("number"==typeof b&&"number"==typeof c)d=b,e=c;else if("string"==typeof b)-1<(d=a.value.indexOf(b))?e=d+b.length:d=null;else if("[object RegExp]"===Object.prototype.toString.call(b)){var g=b.exec(a.value);null!=g&&(d=g.index,e=d+g[0].length)}if("undefined"!=typeof d){if(f){var h=a.createTextRange();h.collapse(!0),h.moveStart("character",d),h.moveEnd("character",e-d),h.select()}else a.selectionStart=d,a.selectionEnd=e;a.focus()}else{if(f){var i=document.selection;if("textarea"!=a.tagName.toLowerCase()){var j=a.value,k=i.createRange().duplicate();k.moveEnd("character",j.length),d=""==k.text?j.length:j.lastIndexOf(k.text),k=i.createRange().duplicate(),k.moveStart("character",-j.length),e=k.text.length}else{var k=i.createRange(),l=k.duplicate();l.moveToElementText(a),l.setEndPoint("EndToEnd",k),d=l.text.length-k.text.length,e=d+k.text.length}}else d=a.selectionStart,e=a.selectionEnd;var m=a.value.substring(d,e);return{start:d,end:e,text:m,replace:function(b){return a.value.substring(0,d)+b+a.value.substring(e,a.value.length)}}}}}}();