var TYPE_VIEW={EMP_SCORECARD:"scorecard",EMP_PERFORMANCE_PROFILE:"perfprofile",EMP_VAR_PAY_INDIV_VIEW:"varpayindview",EMP_NOTES:"notes",EMP_HISTORY:"history",EMP_COMP_ST:"compstatement",EMP_VAR_PAY_STATEMENT:"varpaystatement",EMP_COMBINED_STATEMENT:"combinedstatement",EMP_VAR_PAY_BONUS_ASSIGNMENT_STATEMENT:"bonusAssignmentStatement",EMP_WORKFLOW_PENDING_APPROVALS:8,ECT_ESS_PERSONAL_INFO_TAB:9,ECT_MSS_EMPLOYMENT_INFO_TAB:10,NO_PERMISSION_VIEW:99999},TYPE_VIEW_CONSTANTS={};
TYPE_VIEW_CONSTANTS[TYPE_VIEW.EMP_COMP_ST]={msg:MSGS.COMP_PER_ST,controller:"compStatementController"};TYPE_VIEW_CONSTANTS[TYPE_VIEW.EMP_VAR_PAY_STATEMENT]={msg:MSGS.VARPAY_PERSONAL_STATEMENT,controller:"varpayStatementController"};TYPE_VIEW_CONSTANTS[TYPE_VIEW.EMP_COMBINED_STATEMENT]={msg:MSGS.VARPAY_COMBINED_PERSONAL_STATEMENT,controller:"combinedStatementController"};TYPE_VIEW_CONSTANTS[TYPE_VIEW.EMP_VAR_PAY_BONUS_ASSIGNMENT_STATEMENT]={msg:MSGS.VARPAY_BONUS_ASSIGNMENT_STATEMENT,controller:"varpayBonusAssignmentStmtController"};
var TYPE_PORTLET={JDMNG_SKILL_PROFILE:127,EMP_SCORECARD_NOMINATION_HISTORY:39,EMP_SCORECARD_PERFORMANCE_HISTORY:31,EMPLOYEE_SUCCESSOR:100,PER_POT_MATRIX_GRID_PLACEMENT:133,COMP_OBJ_MATRIX_GRID_PLACEMENT:134,EMP_SCORECARD_CUSTOM_USERINFO:45,EMP_SCORECARD_CUSTOM_BACKGROUND:46,EMP_SCORECARD_CUSTOM_PHOTOCARD:47,EMP_SCORECARD_PHOTO:48,EMP_SCORECARD_BADGE:49,EMP_SCORECARD_LOA:51,EMP_SCORECARD_TAGS:118,EMP_SCORECARD_OVERVIEW:27,EMP_SCORECARD_COMPETENCIES:32,EMP_SCORECARD_COMP_BEHAVIOR:33,EMP_SCORECARD_OBJECTIVE_RATINGS:34,
CDP_LEARNING_HISTORY:121,CDP_DEVPLAN:101,EMP_SCORECARD_POSITION:120,EMP_SCORECARD_MDF:135,CALIBRATION_HISTORY_PORTLET:138,EMP_SCORECARD_IJH:136},PORTLET_POSITION={POSITION_TOP_LEFT:"POSITION_TOP_LEFT",POSITION_TOP_RIGHT:"POSITION_TOP_RIGHT",POSITION_BOTUMN:"POSITION_BOTTOM"};SM_FACEBOOK="facebook";SM_LINKEDIN="linkedin";PICKLIST_STATUS_ACTIVE=0;PICKLIST_STATUS_OBSOLOTE=1;PICKLIST_STATUS_DELETE=2;
var BACKGROUND_TYPE={insideWorkExperience:{id:"insideWorkExperience",isRating:!1},outsideWorkExperience:{id:"outsideWorkExperience",isRating:!1},sysOverallPerformance:{id:"sysOverallPerformance",isRating:!0},sysOverallPotential:{id:"sysOverallPotential",isRating:!0},sysOverallCompetency:{id:"sysOverallCompetency",isRating:!0},sysOverallObjective:{id:"sysOverallObjective",isRating:!0},sysOverallCustom1:{id:"sysOverallCustom1",isRating:!0},sysOverallCustom2:{id:"sysOverallCustom2",isRating:!0},varPayEmpHistData:{id:"varPayEmpHistData",
isRating:!1},compensation:{id:"compensation",isRating:!1},isRating:function(a){return BACKGROUND_TYPE[a]?BACKGROUND_TYPE[a].isRating:!1}},EDU_TBH_LABEL=MSGS.COMMON_To_Be_Hired,EDU_SELECT_NO_VALUE={LABEL:"",VALUE:""},FILTERABLE_SYMBOL="\x3cspan class\x3d'eduFilteredIcon'\x3e\x26#160;\x3c/span\x3e",FILTER_REPORT_ON_ALL_FORMS="REPORT_ON_ALL_FORMS",EDU_EXPECTION={};EDU_EXPECTION.EMPFILE_EDU_ERROR_UNKOWN_USER=MSGS.EMPFILE_EDU_ERROR_UNKOWN_USER;EDU_EXPECTION.EMPFILE_EDU_ERROR_UNKOWN_VIEW=MSGS.EMPFILE_EDU_ERROR_UNKOWN_VIEW;
EDU_EXPECTION.EMPFILE_EDU_ERROR_PICKLIST_NOT_DEFINED=MSGS.EMPFILE_EDU_ERROR_PICKLIST_NOT_DEFINED;EDU_EXPECTION.EMPFILE_EDU_ERROR_LABEL_NOT_DEFINED_IN_MODEL=MSGS.EMPFILE_EDU_ERROR_LABEL_NOT_DEFINED_IN_MODEL;EDU_EXPECTION.EMPFILE_EDU_ERROR_INVALIDINPUT_INVALID_SECTION_ID=MSGS.EMPFILE_EDU_ERROR_INVALIDINPUT_INVALID_SECTION_ID;EDU_EXPECTION.EMPFILE_EDU_ERROR_INVALIDINPUT_INVALID_ORDER_POS=MSGS.EMPFILE_EDU_ERROR_INVALIDINPUT_INVALID_ORDER_POS;
EDU_EXPECTION.EMPFILE_EDU_ERROR_INVALIDINPUT_MISSING_REQUIRED_VALUE=MSGS.EMPFILE_EDU_ERROR_INVALIDINPUT_MISSING_REQUIRED_VALUE;EDU_EXPECTION.EMPFILE_EDU_ERROR_INVALIDINPUT_STARTDATE_AFTER_ENDDATE=MSGS.EMPFILE_EDU_ERROR_INVALIDINPUT_STARTDATE_AFTER_ENDDATE;EDU_EXPECTION.EMPFILE_EDU_ERROR_START_MUST_BE_BEFORE_END=MSGS.EMPFILE_EDU_ERROR_START_MUST_BE_BEFORE_END;EDU_EXPECTION.EMPFILE_EDU_ERROR_NO_UPDATE_ACCESS_FOR_PORTLET=MSGS.EMPFILE_EDU_ERROR_NO_UPDATE_ACCESS_FOR_PORTLET;
EDU_EXPECTION.EMPFILE_EDU_ERROR_INVALIDINPUT_MAX_LENGTH_EXCEEDED=MSGS.EMPFILE_EDU_ERROR_INVALIDINPUT_MAX_LENGTH_EXCEEDED;EDU_EXPECTION.EMPFILE_EDU_ERROR_INVALIDINPUT_FORMAT_ERROR=MSGS.EMPFILE_EDU_ERROR_INVALIDINPUT_FORMAT_ERROR;EDU_EXPECTION.EMPFILE_EDU_ERROR_INVALIDINPUT_INVALID_OR_MISSING_ATTACHMENT_ID=MSGS.EMPFILE_EDU_ERROR_INVALIDINPUT_INVALID_OR_MISSING_ATTACHMENT_ID;EDU_EXPECTION.EMPFILE_CDP_ERROR_WHILE_LOADING_DATA=MSGS.EMPFILE_CDP_ERROR_WHILE_LOADING_DATA;
EDU_EXPECTION.EMPFILE_EDU_ERROR_INVALIDINPUT_MAX_ENTRIES_EXCEEDED=MSGS.EMPFILE_EDU_ERROR_INVALIDINPUT_MAX_ENTRIES_EXCEEDED;EDU_EXPECTION.COMMON_ERR_INVALID_RATING=MSGS.COMMON_ERR_INVALID_RATING;var EDU_EXCEPTION_TYPES={AjaxNoPermissionException:"AjaxNoPermissionException",AjaxNoPermissionToAccessViewException:"AjaxNoPermissionToAccessViewException"};