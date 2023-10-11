function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(values.firstname === "") {
        error.firstname = "Field Required"
    }
    else {
        error.firstname = ""
    }
    if(values.lastname === "") {
        error.lastname = "Field Required"
    }
    else {
        error.lastname = ""
    }
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
    else {
        error.password = ""
    }
    return error;
}
export default Validation;