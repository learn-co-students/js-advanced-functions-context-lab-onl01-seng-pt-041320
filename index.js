let reducer = (accumulator, currentValue) => accumulator + currentValue

class Employee {
    constructor(firstName, familyName, title, payPerHour) {
        this.firstName = firstName
        this.familyName = familyName
        this.title = title
        this.payPerHour = payPerHour
        this.timeInEvents = []
        this.timeOutEvents = []
    }
}

class ClockIn {
    constructor(date, hour) {
        this.date = date
        this.hour = parseInt(hour)
        this.type = "TimeIn"
    }
}

class ClockOut {
    constructor(date, hour) {
        this.date = date
        this.hour = parseInt(hour)
        this.type = "TimeOut"
    }
}

function createEmployeeRecord(array) {
    let employee = new Employee(...array)
    return employee
}

function createEmployeeRecords(array) {
    let employeeRecords = array.map(createEmployeeRecord)
    return employeeRecords
}

function createTimeInEvent(time) {
    let timeOfDay = time.split(" ")
    this.timeInEvents.push(new ClockIn(...timeOfDay))
    return this
}

function createTimeOutEvent(time) {
    let timeOfDay = time.split(" ")
    this.timeOutEvents.push(new ClockOut(...timeOfDay))
    return this
}

function hoursWorkedOnDate(date) {
    let hours = 0
    for (let i = 0; i < this.timeInEvents.length; i++) {
        if (this.timeInEvents[i].date == date) {
            let start = this.timeInEvents[i]
            let end = this.timeOutEvents[i]
            hours = (end.hour - start.hour) / 100
        }
    }
    return hours
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    console.log(hours * this.payPerHour)
    return hours * this.payPerHour
}

// let allWagesFor = function() {
//     debugger
//     let pay = this.timeInEvents.map(time => wagesEarnedOnDate.call(time.date))
//     debugger
//     return pay.reduce(reducer)
// }

function payrollExpense(dates) {
}

function findEmployeeByFirstName(employees, name) {
    let employee = employees.find(employee => employee.firstName == name)
    return employee
}

function calculatePayroll(employees) {
    let employee = employees.map(employee => allWagesFor.call(employee))
    return employee.reduce(reducer)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    debugger
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    debugger

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}