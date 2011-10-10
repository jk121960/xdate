
test("no args", function() {
	var xdate = new XDate();
	var time = +new Date();
	return (xdate.getTime() - time) < 100;
});

test("from XDate, with timezone", function() {
	var xdate1 = new XDate();
	var xdate2 = new XDate(xdate1);
	return xdate1.getTime() == xdate2.getTime() &&
		xdate1.hasLocalTimezone() && xdate2.hasLocalTimezone();
});

test("from XDate, with no timezone", function() {
	var xdate1 = new XDate().removeLocalTimezone();
	var xdate2 = new XDate(xdate1);
	return xdate1.getTime() == xdate2.getTime() &&
		!xdate1.hasLocalTimezone() && !xdate2.hasLocalTimezone();
});

test("from native Date, hasLocalTimezone=yes", function() {
	var date = new Date();
	var xdate1 = new XDate(date);
	var xdate2 = new XDate(date, true);
	return date.getTime() == xdate1.getTime() &&
		date.getTime() == xdate2.getTime() &&
		xdate1.hasLocalTimezone() && xdate2.hasLocalTimezone();
});

test("from native Date, hasLocalTimezone=no", function() {
	var date = new Date();
	var xdate = new XDate(date, false);
	return date.getTime() == xdate.getTime() &&
		!xdate.hasLocalTimezone();
});

test("from milliseconds time, hasLocalTimezone=yes", function() {
	var MS = 933490800000;
	var xdate1 = new XDate(MS);
	var xdate2 = new XDate(MS, true);
	return xdate1.hasLocalTimezone() &&
		xdate2.hasLocalTimezone() &&
		xdate1.getTime() == MS &&
		xdate2.getTime() == MS;
});

test("from milliseconds time, hasLocalTimezone=no", function() {
	var MS = 933490800000;
	var xdate = new XDate(MS, false);
	return !xdate.hasLocalTimezone() && xdate.getTime() == MS;
});

test("year/month/date, hasLocalTimezone=yes", function() {
	var YEAR = 2011;
	var MONTH = 5;
	var DATE = 4;
	var xdate1 = new XDate(YEAR, MONTH, DATE);
	var xdate2 = new XDate(YEAR, MONTH, DATE, true);
	return xdate1.hasLocalTimezone() && xdate2.hasLocalTimezone() &&
		xdate1.getTime() == xdate2.getTime() &&
		xdate1.getFullYear() == YEAR &&
		xdate1.getMonth() == MONTH &&
		xdate1.getDate() == DATE &&
		!xdate1.getHours() &&
		!xdate1.getMinutes() &&
		!xdate1.getSeconds() &&
		!xdate1.getMilliseconds();
});

test("year/month/date/minutes/seconds/milliseconds, hasLocalTimezone=yes", function() {
	var YEAR = 2011;
	var MONTH = 5;
	var DATE = 4;
	var HOURS = 13;
	var MINUTES = 45;
	var SECONDS = 20;
	var MILLISECONDS = 750;
	var xdate1 = new XDate(YEAR, MONTH, DATE, HOURS, MINUTES, SECONDS, MILLISECONDS);
	var xdate2 = new XDate(YEAR, MONTH, DATE, HOURS, MINUTES, SECONDS, MILLISECONDS, true);
	return xdate1.hasLocalTimezone() && xdate2.hasLocalTimezone() &&
		xdate1.getTime() == xdate2.getTime() &&
		xdate1.getFullYear() == YEAR &&
		xdate1.getMonth() == MONTH &&
		xdate1.getDate() == DATE &&
		xdate1.getHours() == HOURS &&
		xdate1.getMinutes() == MINUTES &&
		xdate1.getSeconds() == SECONDS &&
		xdate1.getMilliseconds() == MILLISECONDS;
});

test("year/month/date, hasLocalTimezone=no", function() {
	var YEAR = 2011;
	var MONTH = 5;
	var DATE = 4;
	var xdate = new XDate(YEAR, MONTH, DATE, false);
	return !xdate.hasLocalTimezone()
		xdate.getFullYear() == YEAR &&
		xdate.getMonth() == MONTH &&
		xdate.getDate() == DATE &&
		!xdate.getHours() &&
		!xdate.getMinutes() &&
		!xdate.getSeconds() &&
		!xdate.getMilliseconds();
});

test("year/month/date/minutes/seconds/milliseconds, hasLocalTimezone=no", function() {
	var YEAR = 2011;
	var MONTH = 5;
	var DATE = 4;
	var HOURS = 13;
	var MINUTES = 45;
	var SECONDS = 20;
	var MILLISECONDS = 750;
	var xdate = new XDate(YEAR, MONTH, DATE, HOURS, MINUTES, SECONDS, MILLISECONDS, false);
	return !xdate.hasLocalTimezone() &&	
		xdate.getFullYear() == YEAR &&
		xdate.getMonth() == MONTH &&
		xdate.getDate() == DATE &&
		xdate.getHours() == HOURS &&
		xdate.getMinutes() == MINUTES &&
		xdate.getSeconds() == SECONDS &&
		xdate.getMilliseconds() == MILLISECONDS;
});

test("no new", function() {
	return XDate("Sun Aug 14 2011 00:28:53 GMT-0700 (PDT)") &&
		!XDate("asdf").isValid();
});

// we will test the dateString constructor in parsing.js
