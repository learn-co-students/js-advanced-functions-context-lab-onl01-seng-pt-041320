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

let createEmployeeRecord = (array) =>
{
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(twoDArray)
{
    return twoDArray.map(employee => createEmployeeRecord(employee));
}

function createTimeInEvent(dateTimeStamp)
{
    const [date, hour] = dateTimeStamp.split(' ');

    this.timeInEvents.push(
    {
        type: "TimeIn",
        date: date,
        hour: parseInt(hour,10)
    });

    return this;
}

function createTimeOutEvent(dateTimeStamp)
{
    const [date,hour] = dateTimeStamp.split(' ');

    this.timeOutEvents.push(
    {
        type: "TimeOut",
        date: date,
        hour: parseInt(hour,10)
    });

    return this;
}

function hoursWorkedOnDate(dateStamp)
{
    const timeIn = this.timeInEvents.find(dateIn => dateIn.date === dateStamp);
    const timeOut = this.timeOutEvents.find(dateOut => dateOut.date === dateStamp);

    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(dateStamp)
{
    return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour;
}

function calculatePayroll(employeeRecords)
{
    return employeeRecords.reduce((total, element) =>
    {
        return total + allWagesFor.call(element);
    }, 0);
}

function findEmployeeByFirstName(srcArray, firstName)
{
    return srcArray.find(element => element.firstName === firstName);
}