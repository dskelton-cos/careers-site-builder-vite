function RCMJobReqRadialSearch(f,c){assert(c&&c.countryOptionList&&0<c.countryOptionList.length,"Must have a configuration for the country list");this.register();this._initialize(f,c)}
RCMJobReqRadialSearch.prototype=function(){function f(a){return a&&a.trim?a.trim():a}function c(a){if(a){var b=a.lastIndexOf&&a.lastIndexOf("("),d=a.lastIndexOf&&a.lastIndexOf(")");if(!(isNaN(b)||isNaN(d)||b+1>=d))return(a=a.substring(b+1,d))&&a.toUpperCase()}}function n(a,b){if(!a||!a.length||!b)return null;for(var d=a.length,e=0;e<d;e++)if(b===c(a[e]))return a[e]}var k,e,p,q,r="'"+MSGS.RECRUITING_JOB_REQ_SEARCH_RADIAL_FIELD_NAME+"' "+MSGS.RECRUITING_RADIAL_SEARCH_INCOMPLETE_INFORMATION,t="'"+MSGS.RECRUITING_JOB_REQ_SEARCH_RADIAL_FIELD_NAME+
"' "+MSGS.RECRUITING_JOB_REQ_SEARCH_RADIAL_INVALID_ZIP_CODE,u="'"+MSGS.RECRUITING_JOB_REQ_SEARCH_RADIAL_FIELD_NAME+"' "+MSGS.RECRUITING_JOB_REQ_SEARCH_RADIAL_INVALID_POSTAL_CODE,v="'"+MSGS.RECRUITING_JOB_REQ_SEARCH_RADIAL_FIELD_NAME+"' "+MSGS.RECRUITING_RADIAL_SEARCH_LOCATION_ERROR_MSG_MILE_RADIUS,w="'"+MSGS.RECRUITING_JOB_REQ_SEARCH_RADIAL_FIELD_NAME+"' "+MSGS.RECRUITING_RADIAL_SEARCH_LOCATION_ERROR_MSG_KM_RADIUS;return set(new Component,{_initialize:function(a,b){q=new RadialInformationDAO;q.addEventListener("validationComplete",
this);var d={};this.countryList=b.countryOptionList;var c=b.distanceInputSize||3;p=b.textClass||"rcmradialtext";k=b&&"true"===b.isDistanceUnitMiles?"miles":"km";_distanceInput=new RCMProfileInput("jobReqRadialDistance",null,{label:sfMessageFormat.format(MSGS.RECRUITING_JOBREQ_RADIALSEARCH_DISTANCE_LABEL,k),size:c,fieldDescription:sfMessageFormat.format(MSGS.RECRUITING_JOBREQ_RADIALSEARCH_DISTANCE_LABEL,k),maxLength:c});a&&a.distance?_distanceInput.setValue(a.distance):(c=this.getDefaultDistanceValue(),
_distanceInput.setValue(c));_distanceInput.addEventListener("action",this);_distanceInput.addEventListener("inputClickEvent",this);d.fieldDescription=MSGS.RECRUITING_JOB_REQ_SEARCH_RADIAL_FIELD_NAME;d.ariaLabel=MSGS.RECRUITING_JOB_REQ_SEARCH_RADIAL_FIELD_NAME;var c=SFSingleSelect,x=a?n(this.countryList,a.country):"",l;if(l=this.countryList){for(var f=[{key:MSGS.COMMON_Select_one,value:"not_selected"}],h=l&&l.length,m=0;m<h;m++)f[m+1]={key:l[m],value:l[m]};l=f}else l=void 0;_countryPickList=new c(x,
l,null,d);_countryPickList.addEventListener("change",this);this._hasError=!1;e=new RCMProfileInput("jobReqRadialZipCode",null,{label:MSGS.RECRUITING_JOBREQ_RADIALSEARCH_ZIPCODE_LABEL,size:9,fieldDescription:MSGS.RECRUITING_JOBREQ_RADIALSEARCH_ZIPCODE_LABEL});a&&a.distance&&e.setValue(a.zipCode);e.addEventListener("action",this)},getErrorMessage:function(a){switch(a){case "ERROR_KEY_NOT_COMPLETE":return r;case "ERROR_KEY_INVALID_ZIP":return this.isCountryUS()?t:u;case "ERROR_KEY_DISTANCE_NOT_IN_RANGE":return this.isDistanceInMiles()?
v:w}},isDistanceInMiles:function(){return"miles"===k},isCountryUS:function(){return"US"===c(_countryPickList.getValue())},getPostalCodeLabelForCountry:function(a){return this.isCountryUS()?MSGS.RECRUITING_RADIAL_SEARCH_LOCATION_CRITERIA_LABEL_ZIP:MSGS.RECRUITING_RADIAL_SEARCH_LOCATION_CRITERIA_LABEL_POSTAL},getLocationLabel:function(){return this.isDistanceInMiles()?MSGS.RECRUITING_RADIAL_SEARCH_LOCATION_CRITERIA_LABEL_MILES:MSGS.RECRUITING_RADIAL_SEARCH_LOCATION_CRITERIA_LABEL_KM},renderHtml:function(a){_distanceInput.renderHtml(a);
a.push("\x3cspan class\x3d'"+escapeHTML(p)+"' id\x3d'"+escapeHTML(this.id)+"_distanceUnitText'\x3e");a.push("  "+this.getLocationLabel());a.push("\x3c/span\x3e");a.push("\x3cbr\x3e");a.push("\x3cspan class\x3d'rcmRadialSingleSelect' style\x3d'display:inline-block;margin:3px 0px;'\x3e");_countryPickList.renderHtml(a);a.push("\x3c/span\x3e");a.push("\x3cbr\x3e\x3cspan class\x3d'"+escapeHTML(p)+"' id\x3d'"+escapeHTML(this.id)+"_postalText'\x3e"+escapeHTML(this.getPostalCodeLabelForCountry())+" \x3c/span\x3e");
a.push("\x26nbsp;");e.renderHtml(a);a.push("\x3cspan  class\x3d'rcmRadialInProgress' style\x3d'visibility:hidden' id\x3d'"+this.id+"_progressIcon'\x3e\x3c/span\x3e")},toggleZipValidationIcon:function(a){var b=juic.$(this.id+"_progressIcon");a&&b&&b.style?b.style.visibility="":b&&b.style&&(b.style.visibility="hidden")},handleEvent:function(a){if(!this._isResetting&&!this._settingValue)switch(a.type){case "change":a.target===_countryPickList&&(this.adjustPostalText(),f(e.getValue())&&this.validateZipCode(!0));
break;case "action":"change"===a.actionCommand&&(a.target===e?this.getPostalCode()?this.validateZipCode(!0):this.validateAllFields(!0):a.target===_distanceInput&&(this._isValidateAllFields?(this.validateAllFields(!0),this._isValidateAllFields=!1):this.setFieldErrorMessage(this.validateDistance())));break;case "inputClickEvent":this._isValidateAllFields=!0;break;case "validationComplete":a.validationData&&"zipCode"===a.validationData.field&&(a.validationData.isValid?this.validateAllFields(!1,null):
this.validateAllFields(!1,["ERROR_KEY_INVALID_ZIP"]),this.toggleZipValidationIcon(!1))}},adjustPostalText:function(){this.isCountryUS()?juic.$(e.id).size=12:juic.$(e.id).size=9;juic.$(this.id+"_postalText").innerHTML=escapeHTML(this.getPostalCodeLabelForCountry())},isAtleastOneFieldFilled:function(){return this.isDistanceEntered()&&this.getDistance()!=this.getDefaultDistanceValue()||this.isPostalCodeEntered()||this.isCountrySelected()},validateAllFields:function(a,b){var d={fieldName:"radialField"};
d.refocusId=_distanceInput.id;var c=juic.$(_distanceInput.id),f=juic.$(e.id),l=juic.$(_countryPickList.id),k={},h,m;if(a&&(h=this.validateZipCode(!1))&&0<h.length){SFDom.addClass(f,"invalidInput");for(var g=0;g<h.length;g++)k[h[g]]="Y"}if((h=this.validateDistance())&&0<h.length)for(SFDom.addClass(c,"invalidInput"),g=0;g<h.length;g++)k[h[g]]="Y";else SFDom.removeClass(c,"invalidInput");if((h=this.validateCountry())&&0<h.length)for(SFDom.addClass(l,"invalidInput"),g=0;g<h.length;g++)k[h[g]]="Y";else SFDom.removeClass(l,
"invalidInput");if(b)for(c=b.length,SFDom.addClass(f,"invalidInput"),g=0;g<c;g++)k[b[g]]="Y";f=[];for(m in k)f[f.length]=this.getErrorMessage(m);d.hasError=0<f.length;d.msgs=f;d.hasError?(this._hasError=!0,this._errorMessages=f):(d.value=this.getValue(),this._hasError=!1,this._errorMessages=null);this.dispatch("action",{actionCommand:"change",actionData:d})},getDefaultDistanceValue:function(){return"miles"===k?50:75},hasErrors:function(){return this._hasError},getErrorMessages:function(){if(this.hasErrors())return this._errorMessages},
isCountrySelected:function(){return"not_selected"!==_countryPickList.getValue()},isPostalCodeEntered:function(){return!!f(e.getValue())},isDistanceEntered:function(){return!!f(_distanceInput.getValue())},getDistance:function(){return f(_distanceInput.getValue())},getPostalCode:function(){return f(e.getValue())},getSelectedCountry:function(){return this.isCountrySelected()?_countryPickList.getValue():""},validateCountry:function(){this.getSelectedCountry();var a=[];this.isAtleastOneFieldFilled()&&
!this.isCountrySelected()&&(a[a.length]="ERROR_KEY_NOT_COMPLETE");return a},validateZipCode:function(a){a=this.getPostalCode();var b=c(this.getSelectedCountry()),d=[];if(this.isPostalCodeEntered())this.isCountrySelected()?(q.isZipCodeValid(b,a),this.toggleZipValidationIcon(!0)):this.validateAllFields(!1);else{if(this.isAtleastOneFieldFilled())return d[d.length]="ERROR_KEY_NOT_COMPLETE",d;this.validateAllFields(!1)}},validateDistance:function(){var a=this.getDistance(),b=[];if(this.isDistanceEntered()){if(isNaN(a)||
0>a||this.isDistanceInMiles()&&300<a||!this.isDistanceInMiles()&&500<a)(a=juic.$(_distanceInput.id))&&SFDom.addClass(a,"invalidInput"),b[b.length]="ERROR_KEY_DISTANCE_NOT_IN_RANGE"}else this.isAtleastOneFieldFilled()&&(b[b.length]="ERROR_KEY_NOT_COMPLETE");return b},setFieldErrorMessage:function(a){var b={};if(a&&0<a.length)for(var d=0;d<a.length;d++)b[a[d]]="Y";a=[];for(mesg in b)a[a.length]=this.getErrorMessage(mesg);this._hasError=!0;this._errorMessages=a;b={fieldName:"radialField"};b.refocusId=
_distanceInput.id;b.hasError=0<a.length;b.msgs=a;this.dispatch("action",{actionCommand:"change",actionData:b})},getValue:function(){var a={};if(!this.isCountrySelected()||!this.isPostalCodeEntered()||!this.isDistanceEntered())return null;a.distance=_distanceInput.getValue();a.country=c(_countryPickList.getValue());a.zipCode=e.getValue();return a},setValue:function(a,b){a&&a.country&&a.zipCode&&a.distance&&(b||(this._settingValue=!0),_distanceInput.setValue(a.distance),juic.$(_distanceInput.id).value=
a.distance,e.setValue(a.zipCode),juic.$(e.id).value=a.zipCode,_countryPickList.setValue(n(this.countryList,a.country)),b||(this._settingValue=!1))},reset:function(){this._isResetting=!0;_distanceInput.setValue("");e.setValue("");_countryPickList.setSelectedIndex(0);this._isValidateAllFields=this._isResetting=!1},cleanup:function(){_distanceInput&&_distanceInput.unregister&&_distanceInput.unregister();e&&e.unregister&&e.unregister();_countryPickList&&_countryPickList.unregister&&_countryPickList.unregister();
this.unregister()}})}();function RadialInformationDAO(){}RadialInformationDAO.prototype=function(){return set(new juic.EventTarget,{_ajaxController:null,isZipCodeValid:function(f,c){var n=this;null==this._ajaxController&&(this._ajaxController=AjaxService.getMBeanInstance("rcmRadialSearchController"));this._ajaxController.isZipCodeValid(f,c,{callback:function(c){n.dispatch("validationComplete",{validationData:{field:"zipCode",isValid:c}})}})}})}();