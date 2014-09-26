var actualWeekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]
var setdate = new Date();
var dateToday = setdate.getDay(); // 5
var dayToday = actualWeekdays[dateToday]; // Friday
var articleWeekdays = new Array(6);
articleWeekdays[0] = dayToday;
var dayToSet = dateToday - 1;
if (dayToSet < 0) {
    dayToSet = 6;
}
for (i = 1; i <= 6; i++) {
    if (dayToSet < 0) {
        dayToSet = 6;
    };
    articleWeekdays[i] = actualWeekdays[dayToSet];
    dayToSet = dayToSet - 1;
};
return 0 - articleWeekdays.indexOf(date);


console.log(dayToSet);
console.log(articleWeekdays[6] === "Saturday")
