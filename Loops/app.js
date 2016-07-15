function getEmployees() {

    var employees = [
        {
            empName: "Kiran",
            age: 30,
            salary: 40000
    },
        {
            empName: "Ram",
            age: 45,
            salary: 100000
                  }];

    return employees;

}

function printEmployeeInformation() {
    var data = getEmployees();
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].salary);
    }
    for (var i = data.length - 1; i >= 0; i--) {
        console.log(data[i]);
        if (i == 1) {
            break;
        }
    }
}

printEmployeeInformation();
