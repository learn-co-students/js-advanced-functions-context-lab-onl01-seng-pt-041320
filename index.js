/* Your Code Here */

function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array){
    return array.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp){
    let date = dateStamp.split(" ")[0]
    let hour = parseInt(dateStamp.split(" ")[1])
    this.timeInEvents.push({type: "TimeIn", date: date, hour: hour})
    return this
}

function createTimeOutEvent(dateStamp){
    let date = dateStamp.split(" ")[0]
    let hour = parseInt(dateStamp.split(" ")[1])
    this.timeOutEvents.push({type: "TimeOut", date: date, hour: hour})
    return this
}

function hoursWorkedOnDate(dateStamp){
    let date = dateStamp.split(" ")[0]
    let inEvent = this.timeInEvents.find((e) => {return e.date === date})
    let outEvent = this.timeOutEvents.find((e) => {return e.date === date})
    let hours = parseInt(outEvent.hour) - parseInt(inEvent.hour)
    return hours / 100
}

function wagesEarnedOnDate(date){
    let payRate = this.payPerHour
    let hours = hoursWorkedOnDate.call(this, date)
    return payRate * hours
}
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

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find((employee) => employee.firstName = firstName)
}

function calculatePayroll(srcArray){
    return srcArray.reduce((payroll, employees) => {
      return payroll + allWagesFor.call(employees)
    }, 0)
}