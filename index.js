/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = function(src){
    let emp_record = {};
    emp_record.firstName = src[0];
    emp_record.familyName = src[1];
    emp_record.title = src[2];
    emp_record.payPerHour = src[3];
    emp_record.timeInEvents = [];
    emp_record.timeOutEvents = [];
    return emp_record;
}

let createEmployeeRecords = function(src){
    const emp_record = src.map(x => createEmployeeRecord(x));
    return emp_record;
}

let createTimeInEvent = function(datestamp){
    let [date, hour] = datestamp.split(' ');
    let obj = {};

    obj.type = "TimeIn";
    obj.hour = parseInt(hour, 10);
    obj.date = date;

    this.timeInEvents.push(obj);

    return this;
}


let createTimeOutEvent = function(datestamp){
    let [date, hour] = datestamp.split(' ');
    let obj = {};

    obj.type = "TimeOut";
    obj.hour = parseInt(hour, 10);
    obj.date = date;

    this.timeOutEvents.push(obj);

    return this;
}


let hoursWorkedOnDate = function(datestamp){
    const timein = this.timeInEvents.find(function(event){
        return event.date === datestamp;
    });

    const timeout = this.timeOutEvents.find(function(event){
        return event.date === datestamp;
    });
    return ((timeout.hour - timein.hour) / 100);
}

let wagesEarnedOnDate = function(datestamp){
    const hours = hoursWorkedOnDate.call(this, datestamp);
    const wages = this.payPerHour * hours;

    return wages;
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
}

let findEmployeeByFirstName = function(collection, firstname){
    const name = collection.find(function(emp){
        return emp.firstName === firstname;
    });
    return name;
}

let calculatePayroll = function(employees){
    let counter = 0;
    const payroll = employees.reduce(function(acc, val){
        let wages = allWagesFor.call(val);
        counter += wages;
        return counter;;
    }, 0)
    return payroll;
}