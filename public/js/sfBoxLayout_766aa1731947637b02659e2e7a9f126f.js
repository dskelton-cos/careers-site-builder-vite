function SFAbstractBoxLayout(){juic.assert(this.constructor!==SFAbstractBoxLayout,"[SFAbstractBoxLayout] No implementation available for SFAbstractBoxLayout. You must subclass it.")}SFAbstractBoxLayout.prototype=function(){return juic.set(new juic.Component,{_renderOpenDiv:function(a){a.push("<div class='card clear_all'>")},_renderCloseDiv:function(a){a.push("</div>")},renderHtml:function(a){this._renderOpenDiv(a),this.component.renderHtml(a),this._renderCloseDiv(a)}})}();function SFBoxLayout(a){this.register(),juic.assert(a,"[sfBoxLayout] JUIC component required."),this.component=a}SFBoxLayout.prototype=function(){return juic.set(new SFAbstractBoxLayout,{})}();function SFStapleBoxLayout(a){this.register(),juic.assert(a,"[sfBoxLayout] JUIC component required."),this.component=a}SFStapleBoxLayout.prototype=function(){return juic.set(new SFAbstractBoxLayout,{_renderOpenDiv:function(a){a.push("<div class='card clear_all ",this.generateFDClasses("card"),"'>"),a.push(" <div class='staple'></div>")}})}();