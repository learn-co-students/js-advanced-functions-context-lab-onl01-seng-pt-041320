const createEmployeeRecord = function(array) {
    let newEmployee = { firstName: array[0], familyName: array[1], title: array[2], payPerHour: array[3] }
    
    newEmployee.timeInEvents = []
    newEmployee.timeOutEvents = []
    return newEmployee
}

function createEmployeeRecords (array) {
    return array.map(
        createEmployeeRecord
    )
}

function createTimeInEvent (string) {
    let splitTime = string.split(" ")
    let d = splitTime[0]
    let h = parseInt(splitTime[1])
    let event = {date: d, hour: h}
    event.type = "TimeIn"
    this.timeInEvents.push(event)
    return this 
}

function createTimeOutEvent (string) {
    let splitTime = string.split(" ")
    let d = splitTime[0]
    let h = parseInt(splitTime[1])
    let event = {date: d, hour: h}
    event.type = "TimeOut"
    this.timeOutEvents.push(event)
    return this 
}

function hoursWorkedOnDate (inputDate) {
    function matchDate(element, index, array) {
        return (element.date === inputDate);
      }
    let timeIn = this.timeInEvents.find(matchDate)
    let timeOut = this.timeOutEvents.find(matchDate)
    let numberOfHours = timeOut.hour - timeIn.hour 
    let string = numberOfHours.toString()
    let newString = string.slice(0, -2);
    return parseInt(newString)
}

function wagesEarnedOnDate (date) {
    let hours = hoursWorkedOnDate.call(this, date)
    return hours*this.payPerHour

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

function calculatePayroll (array) {
    let allWages = array.map(function(e) {return allWagesFor.call(e)})
    return allWages.reduce(function(total, currentValue){ return total + currentValue})

}

function findEmployeeByFirstName (array, inputName) {
    function nameMatch(element, index, array) {
        return (element.firstName === inputName);
      }
    return array.find(nameMatch);
}