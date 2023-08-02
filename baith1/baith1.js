let MyDate = function (day, month, year) {
    this.day = day
    this.month = month
    this.year = year

    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }

    this.setDay = function (day) {
        this.day = day;
        return this.day
    }
    this.setMonth = function (month) {
        this.month = month;
        return this.month
    }
    this.setYear = function (year) {
        this.year = year;
        return this.year
    }
};
let date = new MyDate(4, 2, 2012);

let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
let a = date.setDay(10);
let b = date.setMonth(10);
let c = date.setYear(2019);


alert(day + "/" + month + "/" + year);
alert(a + "/" + b + "/" + c);

let date1 = new MyDate(10, 5, 2001);
let day1 = date1.getDay();
let month1 = date1.getMonth();
let year1 = date1.getYear();
alert(day1 + "/" + month1 + "/" + year1);
// date.setDay(10);
// date.setMonth(10);
// date.setYear(2019);