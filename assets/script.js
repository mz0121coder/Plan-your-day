// Show date format
var loadTodayDate = moment().format("dddd, MMMM Do YYYY");
var usePresentHour = parseInt(moment().format("H")); 
// Convert to 12 hour format
function twelveHourFormat(hourOfDay) {
    return parseInt(moment(hourOfDay,["h A"]).format("HH"))
}
// Save activities in local storage
function saveActivity(event){
    var textarea = $(event.currentTarget.parentElement).find("textarea")[0]; 
    var hour = $(event.currentTarget.parentElement).find("div")[0].textContent;
    var displayTimeActivity = twelveHourFormat(hour);
    var activityPlan = $(textarea).val();
    localStorage.setItem("item-" + loadTodayDate + '-' + displayTimeActivity, activityPlan) 
}
// Retrieve items from local storage
function showHourSections() {
    var $planInputSpace = $("textarea");

    $planInputSpace.each(function(key, activityPlan) {
        var hour = $(activityPlan.parentElement).find("div")[0].textContent; 
        var displayTimeActivity = twelveHourFormat(hour);
        var text = localStorage.getItem("item-" + loadTodayDate + '-' + displayTimeActivity) || ""; 
        $(activityPlan).val(text)
    
        if(displayTimeActivity < usePresentHour){
            $(activityPlan).addClass("past");     
        }

        if(displayTimeActivity > usePresentHour){
            $(activityPlan).addClass("future");
        }
    
        if(displayTimeActivity == usePresentHour){
            $(activityPlan).addClass("present");
        } 
    });
}
