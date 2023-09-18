// this will simulate a login functionality
// we can use local storage as a database for now


// get the email and username of the client from input
const emailInput = document.querySelector('input[type=email]')
const passwordInput = document.querySelector('input[type=password]')

// get the login button
const loginButton = document.querySelector('.login-btn')


loginButton.addEventListener("click", (ev) => {
    const client_email = emailInput.value.toLowerCase()
    const client_password =  passwordInput.value

    // compare the password of user and db
    const db_results = getEmployee(client_email)

    // if employye not found
    if (db_results == null) {
        alert("employee with that email not found!")
        return // ends the whole function
    }

    // email was found, now check for password
    if (db_results.password == client_password) {
        alert('yay all is good')
        return
    } else {
        alert("INVALID EMAIL OR PASSWORD")
    }

})