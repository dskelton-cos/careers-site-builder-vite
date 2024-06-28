var TLMFormatter={formatBreakSummary:function(a){if(a&&0<a.length){for(var b=0,c=a.length,d=0;d<a.length;d++)b+=a[d].getDuration();1===c?(a=a[0],a=MSGS.get("TIMEANDLABOR_WORKSCHEDULE_BREAKS_INFORMATION_WITH_CLOCK_TIMES",a.getStartTime(),a.getEndTime(),a.getDuration())):a=MSGS.get("TIMEANDLABOR_WORKSCHEDULE_BREAKS_INFORMATION",c,b)}else a=MSGS.get("TIMEANDLABOR_WORKSCHEDULE_NO_BREAKS_DEFINED");return a},formatWorkingTime:function(a){return a&&a.day&&a.day.getWorkingTimeSegments()&&0<a.day.getWorkingTimeSegments().length?
MSGS.get("TIMEANDLABOR_MDF_GO_WorkScheduleDayModel_Time_to_Time",a.day.getWorkingTimeSegments()[0].getStartTime(),a.day.getWorkingTimeSegments()[0].getEndTime()):"Non working Day i18n"},formatWorkingTimeAndBreaksSummary:function(a){var b="";a&&a.day&&a.day.getWorkingTimeSegments()&&0<a.day.getWorkingTimeSegments().length&&(b=MSGS.get("TIMEANDLABOR_MDF_GO_WorkScheduleDayModel_Time_to_Time",a.day.getWorkingTimeSegments()[0].getStartTime(),a.day.getWorkingTimeSegments()[0].getEndTime()),a=TLMFormatter.formatBreakSummaryShort(a.day.getBreakSegments()),
b=b+" * "+a);return b},formatBreakSummaryShort:function(a){if(a&&0<a.length){for(var b=0,c=a.length,d=0;d<a.length;d++)b+=a[d].getDuration();a=1===c?MSGS.get("TIMEANDLABOR_WORKSCHEDULE_BREAK_INFORMATION",b):MSGS.get("TIMEANDLABOR_WORKSCHEDULE_BREAKS_INFORMATION",c,b)}else a=MSGS.get("TIMEANDLABOR_WORKSCHEDULE_NO_BREAKS_DEFINED");return a},formatDurationInMinutes:function(a){return 1===a?a+" "+MSGS.get("TIMEANDLABOR_TIME_UNIT_SINGLE_MINUTE"):Math.round(a)+" "+MSGS.get("TIMEANDLABOR_TIME_UNIT_MINUTES_SMALL")},
formatDurationInHoursAndMinutes:function(a){var b="";if(a){var c=a%60;a=(a-c)/60;b="";0!==a&&(b=1===a?b+(a+" "+MSGS.get("TIMEANDLABOR_TIME_UNIT_SINGLE_HOUR")+" "):b+(a+" "+MSGS.get("TIMEANDLABOR_TIME_UNIT_HOURS")+" "));if(0!==c||0===a)b+=TLMFormatter.formatDurationInMinutes(c)}else 0===a&&(b=a+" "+MSGS.get("TIMEANDLABOR_TIME_UNIT_HOURS"));return b},formatTimePeriod:function(a,b){var c="";a&&b&&(c=a+" - "+b);return c},formatBreak:function(a,b,c){var d="";a&&b&&c&&(d=MSGS.get("TIMEANDLABOR_WORKSCHEDULE_BREAKS_INFORMATION_WITH_CLOCK_TIMES",
a,b,c));return d},formatDate:function(a){var b="";if(a){var b="undefined"!==typeof TLMModels?TLMModels.UserDateFormatter.format(a.date):TLMModelsUI5.UserDateFormatter.format(a.date),c="";a.date&&(c=dateFormatSymbols.weekdays[a.date.getDay()]);b=MSGS.get("TIMEANDLABOR_WORKSCHEDULE_PREVIEW_DATE_WITH_WEEKDAY",c,b)}return b},formatApprovalStatus:function(a){var b="";switch(a){case "PENDING":b=MSGS.get("TIMEANDLABOR_STATUSENUMEMPLOYEETIMEAPPROVAL_PENDING");break;case "CANCELLED":b=MSGS.get("TIMEANDLABOR_STATUSENUMEMPLOYEETIMEAPPROVAL_CANCELLED");
break;case "APPROVED":b=MSGS.get("TIMEANDLABOR_STATUSENUMEMPLOYEETIMEAPPROVAL_APPROVED");break;case "REJECTED":b=MSGS.get("TIMEANDLABOR_STATUSENUMEMPLOYEETIMEAPPROVAL_REJECTED");break;case "PENDING_CANCELLATION":b=MSGS.get("TIMEANDLABOR_STATUSENUMEMPLOYEETIMEAPPROVAL_PENDING_CANCELLATION")}return b}};