function SFSpacingManager(a,b){this._init(a,b)}SFSpacingManager.prototype=function(){var a=Math.floor,b=Math.min;function c(a,b,c){return null!=b&&a<b?b:null!=c&&a>c?c:a}function d(a,b,d,e){var f=a.size;return a.size=c(b,a.minSize,a.maxSize),(!a.maxSize||a.size<a.maxSize)&&d.push(a),a.size>a.minSize&&e.push(a),a.size-(null==f?0:f)}var e=["simple","adjacent","cascade","distribute"];return{_init:function(a,b){juic.assert(a instanceof Array,"Must provide a spacing array"),this._bounded=b&&b.bounded||!1,this._adjustmentType=b&&b.adjustmentType||"simple",juic.assert(e.contains(this._adjustmentType),"Invalid adjustment type: "+this._adjustmentType),this._spacing=[];for(var c,d=[],f=0,g=0,h=a.length;g<h;g++){c=a[g],this._spacing.push(this._createSpacing(g,c));var i=c.size||c.fixedSize;"number"==typeof i&&0<i&&(f++,d.push(i))}this._refreshTotals(),f==a.length&&(this._initSizes=d)},insertInto:function(a,b){this.insertMultipleInto(a,[b])},insertMultipleInto:function(a,b){var c=this._spacing.length;juic.assert("number"==typeof a&&0<=a&&a<=c,"Invalid index: "+a+", max = "+c),juic.assert(b instanceof Array,"Space must be an array");for(var d=b.length,e=[],f=0;f<b.length;f++)e.push(this._createSpacing(a+f,b[f]));e.splice(0,0,a,0),this._spacing.splice.apply(this._spacing,e);for(var f=a+d;f<c+d;f++)this._spacing[f].index=f;if(this._refreshTotals(),null!=this._allocatedSize){for(var g=!1,f=a;f<a+d;f++){var b=this._spacing[f];if(b.fixedSize)b.size=b.fixedSize,this._distributeDelta(-b.size);else if(this._actualSize<=this._allocatedSize){g=!0;break}else this._actualSize>this._allocatedSize&&(b.size=b.minSize)}g&&this._allocateAllSizes(this._allocatedSize),this._updateActualSize()}},move:function(a,c,d){var e=Math.max;if(this._validateIndex(a),this._validateIndex(c),d=d||1,juic.assert(0<=d,"[SFSpacingManager] Invalid count: "+d),this._validateIndex(a+d-1),this._validateIndex(c+d-1),a!=c){var f=b(a,c),g=e(a,c,c+d-1),h=this._spacing.splice(a,d);h.splice(0,0,c,0),this._spacing.splice.apply(this._spacing,h);for(var i=f;i<=g;i++)this._spacing[i].index=i}},remove:function(a,c){null==c&&(c=1);var d=a+c-1;this._validateIndex(a),this._validateIndex(d);for(var e,f=0,g=a;g<=d;g++)e=this._spacing[a],f+=e.size,this._spacing.splice(a,1);for(var g=d,h=this._spacing.length;g<h;g++)this._spacing[g].index=g;if(this._refreshTotals(),null!=this._allocatedSize&&this._actualSize-f<this._allocatedSize){var i=this._actualSize-f,j=b(this._allocatedSize-i,f);this._distributeDelta(j)}this._updateActualSize()},allocate:function(a){if(juic.assert("number"==typeof a&&0<a,"Provide a positive numerical value to allocate."),null!=this._initSizes){for(var b=0;b<this._initSizes.length;b++)this._spacing[b].size=this._initSizes[b];this._initSizes=null}else this._allocatedSize!=a&&(null==this._allocatedSize?this._allocateAllSizes(a):(this._actualSize>this._allocatedSize&&a>this._actualSize||this._actualSize<=this._allocatedSize)&&this._distributeDelta(a-this._actualSize));this._allocatedSize=a;var c=[];this._updateActualSize();for(var b=0,d=this._spacing.length;b<d;b++)c[b]=this._spacing[b].size;return c},setCustomSize:function(a,b){b=parseInt(b),juic.assert("number"==typeof a&&a<this._spacing.length,"Index is invalid: "+a);var c=this._spacing[a],d=this.getBounds(a),e=c.size;switch(c.size=b,0<=c.fixedSize&&(c.fixedSize=b,c.minSize=b,c.maxSize=b,this._fixedSpace+=b-e),this._adjustmentType){case"simple":break;case"adjacent":this._adjustAdjacent(e-b,a);break;case"cascade":this._adjustCascade(e-b,a);break;case"distribute":this._distributeDelta(e-b,a);}this._updateActualSize()},setSizes:function(a){juic.assert(a instanceof Array&&a.length==this._spacing.length,"sizes must be an array of length "+this._spacing.length);for(var b=0;b<this._spacing.length;b++)this._spacing[b].size=parseInt(a[b]);this._updateActualSize()},getActualSize:function(){return this._actualSize},getMinimumSpace:function(){return this._minimumSpace},size:function(){return this._spacing.length},getBounds:function(a){var c=Number.MAX_VALUE;this._validateIndex(a);var d=this._spacing[a],e={minSize:d.minSize,maxSize:d.maxSize};if(this._bounded)switch(this._adjustmentType){case"adjacent":if(a==this._spacing.length-1)e.minSize=d.size,e.maxSize=d.size;else{var f=this._spacing[a+1],g=null==f.maxSize?c:f.maxSize-f.size,h=f.size-f.minSize,i=null==d.maxSize?c:d.maxSize-d.size,j=d.size-d.minSize;e.minSize=d.size-b(g,j),e.maxSize=d.size+b(i,h)}break;case"distribute":case"cascade":e.maxSize=b(e.minSize+this._actualSize-this._minimumSpace,e.maxSize||c);}return e},setBounds:function(a,b){this._validateIndex(a);var c=this._spacing[a];b&&null!=b.minSize&&(c.minSize=b.minSize),b&&null!=b.maxSize&&(c.maxSize=b.maxSize),c.minSize!=c.maxSize&&(c.fixedSize=void 0)},setHidden:function(a,b){this._validateIndex(a);var c=this._spacing[a];c.hidden!=b&&(c.hidden=b,null==this._allocatedSize?this._refreshTotals():c.hidden?(this._actualSize-=c.size,this._refreshTotals(),this._distributeDelta(this._allocatedSize-this._actualSize)):c.size?(this._actualSize+=c.size,this._distributeDelta(this._allocatedSize-this._actualSize),this._refreshTotals()):(this._refreshTotals(),this._allocateAllSizes(this._allocatedSize)),this._updateActualSize())},_refreshTotals:function(){this._spacingNotFixed=[],this._totalWeight=0,this._fixedSpace=0,this._minimumSpace=0;for(var a,b=0,c=this._spacing.length;b<c;b++)a=this._spacing[b],a.hidden||(null==a.fixedSize?(this._totalWeight+=a.weight,this._spacingNotFixed.push(a)):(this._fixedSpace+=a.fixedSize,juic.assert(0<a.fixedSize,"fixedSize must be a positive number")),this._minimumSpace+=a.fixedSize||a.minSize)},_createSpacing:function(a,b){var c={index:a,weight:b.weight,minSize:b.minSize,maxSize:b.maxSize,fixedSize:b.fixedSize,hidden:b.hidden};if(null==c.weight&&(c.weight=1),juic.assert(0<=c.weight,"weight must be a non-negative number"),null==c.minSize)c.minSize=0;else{var d=c.minSize=parseInt(c.minSize);juic.assert(0<d,"minSize must be a positive number")}if(null!=c.maxSize&&(c.maxSize=parseInt(c.maxSize)),null!=c.minSize&&null!=c.maxSize&&(c.minSize==c.maxSize&&(c.fixedSize=c.minSize),juic.assert(c.minSize<=c.maxSize,"minSize cannot be greater than maxSize")),null!=c.fixedSize){var e=c.fixedSize=parseInt(c.fixedSize);c.size=e,c.minSize=c.fixedSize,c.maxSize=c.fixedSize,juic.assert(0<c.fixedSize,"fixedSize must be a positive number")}return c},_updateActualSize:function(){this._actualSize=0;for(var a=0,b=this._spacing.length;a<b;a++)this._spacing[a].hidden||(this._actualSize+=this._spacing[a].size)},_validateIndex:function(a){juic.assert("number"==typeof a&&0<=a&&a<this._spacing.length,"Index is invalid: "+a)},_adjustCascade:function(a,b){for(var c=b;0!=a&&c<this._spacing.length-1;c++)a=this._adjustAdjacent(a,c);return a},_adjustAdjacent:function(a,b){if(b<this._spacing.length-1){var d=this._spacing[b+1],e=c(d.size+a,d.minSize,d.maxSize),f=e-d.size;d.size=e,a-=f}return a},_distributeDelta:function(a,b){if(0!=a){for(var c,d=[],e=[],f=0,g=this._spacingNotFixed.length;f<g;f++)if(c=this._spacingNotFixed[f],c.index!=b){var h=null==b||c.index>b?d:e;0>a?c.size>c.minSize&&h.push(c):(null==c.maxSize||c.size<c.maxSize)&&h.push(c)}a=this._allocateOrDeallocate(d,a,0),0<d.length&&null!=b&&0!=a&&(a=this._allocateOrDeallocate(e,a,0))}return a},_allocateAllSizes:function(b){if(0<this._spacing.length){var c=b-this._fixedSpace;if(this._minimumSpace-this._fixedSpace<c){for(var e=c,f=[],g=[],h=0,i=this._spacingNotFixed.length;h<i;h++){var j=this._spacingNotFixed[h],k=a(j.weight*b/this._totalWeight);d(j,k,f,g),e-=j.size}0!=e&&this._allocateOrDeallocate(0>e?g:f,e,0)}else for(var j,h=0,i=this._spacing.length;h<i;h++)j=this._spacing[h],j.size=j.minSize}},_allocateOrDeallocate:function(b,c,e){if(0==c||0==b.length||e>b.length)return c;var f=0>c?-1:1,g=Math.abs(c),h=f*a(g/b.length),i=g%b.length;if(0==h)for(var j=0;j<g;j++)b[j].size+=f;else{for(var k=[],l=[],j=0,m=b.length;j<m;j++){var n=b[j],o=f*(j<i?1:0),p=n.size+h+o;c-=d(n,p,k,l)}0!=c&&(c=this._allocateOrDeallocate(0>c?l:k,c,e+1))}return c}}}();