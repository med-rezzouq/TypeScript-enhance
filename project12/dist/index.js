"use strict";
//enum type is like an array but with key and value inversed in adition
var weekdays;
(function (weekdays) {
    weekdays[weekdays["Monday"] = 0] = "Monday";
    weekdays[weekdays["Tuesday"] = 1] = "Tuesday";
    weekdays[weekdays["Wednesday"] = 2] = "Wednesday";
    weekdays[weekdays["Thursday"] = 3] = "Thursday";
    weekdays[weekdays["Friday"] = 4] = "Friday";
    weekdays[weekdays["Saturday"] = 5] = "Saturday";
    weekdays[weekdays["Sunday"] = 1] = "Sunday";
})(weekdays || (weekdays = {}));
console.log(weekdays[6]);
console.log(weekdays.Friday);
