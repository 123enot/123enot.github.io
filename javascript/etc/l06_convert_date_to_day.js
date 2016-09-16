/* function converting date to a day of week */

var str = 'вс пн вт ср чт пт сб',
    weekDays = str.split(' ');


function getWeekDay(date) {
    var day;
    if (date) {
        day = date.getDay();
        day = weekDays[day];
    } else {
        return 'Date is empty!';
    }


    return day + '\n(' + date + ')';
}


var date = new Date(2012, 0, 1);

console.log(getWeekDay(date));
