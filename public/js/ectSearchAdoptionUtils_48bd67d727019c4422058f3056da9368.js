window.ECTSearchAdoptionUtils=function(){return set({},{isForceNewSearch:!1,setGACEEnabled:function(a,b,d,e){universalSearchFlag=void 0!=e?e:!0;this.isGACEEnabled=d&&(a||b||!universalSearchFlag)?!0:!1},setForceNewSearch:function(a){this.isForceNewSearch=a},getSearchCriteriaForWorkflow:function(a){defaultSearchValues={includeInactiveEmpl:"NO",includeInactivePersons:"YES",includeExternalPersons:"YES",resultScope:"Employment",includeHomeEmpl:"YES",includeSecondEmpl:"YES",displayLocation:"YES",includeECMasteredUsersOnly:"NO",
enforceIgnoreProvisioningFlags:"YES"};a&&(defaultSearchValues.useAlternativePermissionType="WorkerType");return defaultSearchValues},convertValueObject:function(a){data={employments:[]};""!==a?(a=JSON.parse(a),data.name=a.primaryDisplayText,data.userId=a.id,data.id=a.id,data.code=a.code,data.primaryDisplayText=a.primaryDisplayText):(data.userId="",data.name="",data.id="",data.code="",data.primaryDisplayText="");return data},initializeWorkflowSearchWrapper:function(a,b){b.searchOptions.defaultSearchValues.includeInactivePersons=
"YES";return new SFPersonAutoCompleteWrapper([{version:1,arguments:[a,b]},{version:2,arguments:{additionalCriteria:b.searchOptions.defaultSearchValues}}],{version:2})},createUserSelect:function(a,b,d,e,g){var f=window.pageHeaderComp&&pageHeaderComp._universalSearchConfig&&pageHeaderComp._universalSearchConfig.People&&pageHeaderComp._universalSearchConfig.People.enablePhoto,h;h=this.isGACEEnabled?{version:2}:{useVersion3:!0};var c={additionalCriteria:{includeHomeEmpl:"YES",includeSecondEmpl:"YES",
displayLocation:"YES",includeECMasteredUsersOnly:"YES",enforceIgnoreProvisioningFlags:"YES",includeInactiveEmpl:"NO",includeInactivePersons:"YES",includeExternalPersons:"NO",resultScope:"Employment"},title:MSGS.ORGCHART_SEARCH_FOR_PEOPLE,a11yLabel:MSGS.ORGCHART_SEARCH_FOR_PEOPLE};d=juic.set([null,{hideUserName:f?f.hideUserName:0,enablePhoto:f?f.enablePhoto:0,forceSelection:!0,enableExternalSearch:!1,selectFirstItem:!0,isV12Plus:!0,title:MSGS.ORGCHART_SEARCH_FOR_PEOPLE,a11yLabel:MSGS.ORGCHART_SEARCH_FOR_PEOPLE}],
d);g&&(c.additionalCriteria.employmentEffectiveFrom=g,c.additionalCriteria.employmentEffectiveTo=g);"undefined"!==typeof HOCOrgChartModel&&a._model instanceof HOCOrgChartModel&&(c.orgChartModel=a._model,c.additionalCriteria.includeECMasteredUsersOnly="NO",(a=juic.$("gace.hideAlternateEmployments"))&&"true"==a.getAttribute("content")&&(c.additionalCriteria.includeHomeEmpl="NO",c.additionalCriteria.includeSecondEmpl="NO"));return new SFPersonAutoCompleteWrapper([{version:2,arguments:c,constructorName:b},
{version:3,arguments:d,constructorName:e}],h)}})}();