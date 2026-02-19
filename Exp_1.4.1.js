const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let employee = [];
function menu() {
    console.log("1.Add\n2.List\n3.Update\n4.Delete\n5.Exit");

    rl.question("Choose: ", function (choice) {
        if (choice == 1) addemployee();
        else if (choice == 2) listemployee();
        else if (choice == 3) updateemployee();
        else if (choice == 4) deleteemployee();
        else rl.close();
    });
}
function addemployee() {
    rl.question("Name: ", function (name) {
        rl.question("EmpID: ", function (empID) {
            rl.question("Position: ", function (position) {
                rl.question("Salary: ", function (salary) {

                    let emp = {
                        name: name,
                        empID: empID,
                        position: position,
                        salary: Number(salary)
                    };

                    employee.push(emp);
                    menu();
                });
            });
        });
    });
}
function listemployee() {
    console.log("\nEmployee List:");

    if (employee.length === 0) {
        console.log("No employees");
    } else {
        employee.forEach(function (e, i) {
            console.log(
                (i + 1) + ". " +
                "ID: " + e.empID +
                ", Name: " + e.name +
                ", Position: " + e.position +
                ", Salary: " + e.salary
            );
        });
    }

    menu();
}
function updateemployee() {
    rl.question("Enter EmpID to update: ", function (id) {

        let emp = employee.find(function (e) {
            return e.empID == id;
        });

        if (!emp) {
            console.log("Employee not found");
            return menu();
        }

        rl.question("New Name: ", function (name) {
            rl.question("New Position: ", function (position) {
                rl.question("New Salary: ", function (salary) {

                    if (name) emp.name = name;
                    if (position) emp.position = position;
                    if (salary) emp.salary = Number(salary);

                    menu();
                });
            });
        });
    });
}
function deleteemployee() {
    rl.question("Enter EmpID to delete: ", function (id) {

        let index = employee.findIndex(function (e) {
            return e.empID == id;
        });

        if (index == -1) console.log("Employee not found");
        else employee.splice(index, 1);

        menu();
    });
}
menu();
