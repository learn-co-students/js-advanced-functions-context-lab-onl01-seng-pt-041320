/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let createEmployeeRecord = function(row) {
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRecord) {
    return employeeRecord.map(function(row) {
        return createEmployeeRecord(row);
    })
}

function createTimeInEvent(dateStamp) {
    let time = dateStamp.split(" ");

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time[1]),
        date: time[0]
    })

    return this
} 

function createTimeOutEvent(dateStamp) {
    let time = dateStamp.split(" ");

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time[1]),
        date: time[0]
    })

    return this
}

function hoursWorkedOnDate(date) {
    let clockIn = this.timeInEvents.find(inTime => inTime.date === date);
    let clockOut = this.timeOutEvents.find(outTime => outTime.date === date);
    return (clockOut.hour - clockIn.hour)/100;
}

let wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
  }
  
  let findEmployeeByFirstName = function(employeeRecords, firstNameString){
    return employeeRecords.find(employee => employee.firstName == firstNameString);
  }

 
  let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}






