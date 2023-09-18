// THIS WILL ACT AS API FOR WORKING WITH EMPLOYEE DATA 
// WHICH IS STORED ON LOCAL STORAGE FOR NOW TO ACT AS A DATABASE

// add employee to db
function createEmployee(employee) {
    // Retrieve the existing employees array from local storage
    const existingEmployees = JSON.parse(localStorage.getItem("employees"));

    // Check if an employee with the same email already exists
    const duplicateEmployee = existingEmployees.find(emp => emp.email === employee.email);

    if (!duplicateEmployee) {
        // No duplicate found, add the new employee to the array
        existingEmployees.push(employee);

        // Update the employees array in local storage
        localStorage.setItem("employees", JSON.stringify(existingEmployees));
        console.log("Employee added successfully.");
    } else {
        console.error("An employee with the same email already exists.");
    }
}


// gets the employee from db
function getEmployee(employeeEmail) {
    // Retrieve the existing employees array from local storage
    const existingEmployees = JSON.parse(localStorage.getItem("employees"));

    // Find the employee with the specified email
    return existingEmployees.find(emp => emp.email === employeeEmail) || null;
}


// updates existing employee from db
function updateEmployee(employeeEmail, updatedEmployee) {
    // Retrieve the existing employees array from local storage
    const existingEmployees = JSON.parse(localStorage.getItem("employees"));

    // Find the index of the employee with the specified email
    const index = existingEmployees.findIndex(emp => emp.email === employeeEmail);

    if (index !== -1) {
        // Update the employee in the array
        existingEmployees[index] = updatedEmployee;

        // Update the employees array in local storage
        localStorage.setItem("employees", JSON.stringify(existingEmployees));
        console.log("Employee updated successfully.");
    } else {
        console.error("Employee not found.");
    }
}


// removes employee from db
function removeEmployee(employeeEmail) {
    // Retrieve the existing employees array from local storage
    const existingEmployees = JSON.parse(localStorage.getItem("employees"));

    // Find the index of the employee with the specified email
    const index = existingEmployees.findIndex(emp => emp.email === employeeEmail);

    if (index !== -1) {
        // Remove the employee from the array
        existingEmployees.splice(index, 1);

        // Update the employees array in local storage
        localStorage.setItem("employees", JSON.stringify(existingEmployees));
        console.log("Employee removed successfully.");
        alert("Employee removed successfully.")

    } else {
        console.error("Employee not found.");
        alert("Employee not found.")
    }
}
