/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// creating Employee Record Cards

function createEmployeeRecord(arr){
    const newObj = {};
    newObj.firstName = arr[0];
    newObj.familyName = arr[1];
    newObj.title = arr[2];
    newObj.payPerHour = arr[3];
    newObj.timeInEvents = [];
    newObj.timeOutEvents = [];
    return newObj;
};

// creating Employee RecordS

function createEmployeeRecords(arr) {
    let result = arr.map(createEmployeeRecord);
    return result;
};

// create Time In Event

function createTimeInEvent(dateStamp) {
    const newEvent = {};
    let[date, hour] = dateStamp.split(' '); // splitting YYYY-MM-DD HHMM into date and time

    // building a new object that will be inserted into timeInEvents array
    newEvent.type = "TimeIn";
    newEvent.hour = parseInt(hour, 10);
    newEvent.date = date;

    this.timeInEvents.push(newEvent);
    return this;
};

// create Time Out Event

function createTimeOutEvent(dateStamp) {
    const timeOutEvent = {};
    let[date, hour] = dateStamp.split(' '); // splitting YYYY-MM-DD HHMM into date and time

    // building a new object that will be inserted into timeInEvents array
    timeOutEvent.type = "TimeOut";
    timeOutEvent.hour = parseInt(hour, 10);
    timeOutEvent.date = date;

    this.timeOutEvents.push(timeOutEvent)
    return this;
};

// calculate hours worked on a given date

function hoursWorkedOnDate(date) {
    // find time IN object that matches with provided date
    // find time OUT object that matches with provided date
    // create a variable that equals time OUT hr
    // create a variable that equals time IN hr
    // total nr hrs is time out - time in / 100

    const objDateIn = this.timeInEvents.find(timeObj => timeObj.date === date);
    const objDateOut = this.timeOutEvents.find(timeObj => timeObj.date === date);
    const hrsOut = objDateOut.hour
    const hrsIn = objDateIn.hour

    return (hrsOut - hrsIn)/100;
};

function wagesEarnedOnDate(employeeRecordObj, date) {
    // find hours worked on the date using hoursWorkedOnDate function
    // get the rate from the object ✔

    const payPerHour = employeeRecordObj.payPerHour;
    const hoursWorked = hoursWorkedOnDate(employeeRecordObj, date);
    return payPerHour * hoursWorked;
}



// all wages for

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}