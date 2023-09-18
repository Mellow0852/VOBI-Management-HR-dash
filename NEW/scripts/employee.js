// THIS WILL ACT AS API FOR WORKING WITH EMPLOYEE DATA 
// WHICH IS STORED ON LOCAL STORAGE FOR NOW TO ACT AS A DATABASE

// add employee to db
function createEmployee(employee) {
    // Use the email as the ID and store the employee object
    localStorage.setItem(employee.email, JSON.stringify(employee));
}

// gets the employee from db
function getEmployee(employeeEmail) {
    // Retrieve and parse the employee object from local storage using email as the key
    const employeeJSON = localStorage.getItem(employeeEmail);
    return JSON.parse(employeeJSON);
}

// updates existing employee from db
function updateEmployee(employeeEmail, updatedEmployee) {
    // Update the existing employee data in local storage using email as the key
    localStorage.setItem(employeeEmail, JSON.stringify(updatedEmployee));
}

// removes employee from db
function removeEmployee(employeeEmail) {
    // Remove the employee data from local storage using email as the key
    localStorage.removeItem(employeeEmail);
}
