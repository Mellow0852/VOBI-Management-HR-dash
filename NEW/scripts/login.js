// this will simulate a login functionality
// we can use local storage as a database for now

// Initialize the employee array in local storage if it doesn't exist
if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify([]));
}

// get the email and username of the client from input
const emailInput = document.querySelector('input[type=email]')
const passwordInput = document.querySelector('input[type=password]')

// get the login button
const loginButton = document.querySelector('.login-btn')


loginButton.addEventListener("click", (ev) => {
    const client_email = emailInput.value.toLowerCase()
    const client_password =  passwordInput.value

    // login
    login(client_email, client_password, "../dist/project-dashboard.html")

})

// create an employee so we have an account to test with
createEmployee( "stone", "kabby", "stone@vobi.co.za", "2000", "012345", true)