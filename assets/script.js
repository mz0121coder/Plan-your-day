// Show date format
var loadTodayDate = moment().format("dddd, MMMM Do YYYY");
var usePresentHour = parseInt(moment().format("H")); 
// Convert to 12 hour format
function twelveHourFormat(hourOfDay) {
    return parseInt(moment(hourOfDay,["h A"]).format("HH"))
}
