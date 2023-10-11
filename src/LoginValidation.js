function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(values.email === "") {
        error.email = "Field Required"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email Not Found"
    }
    else {
        error.email = ""
    }
    if(values.password === "") {
        error.password = "Field Required"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "The password you've entered is incorrect."
    }
    else {
        error.password = ""
    }
    return error;
}
export default Validation;