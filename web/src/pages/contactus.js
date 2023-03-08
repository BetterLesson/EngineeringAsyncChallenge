function submit_form() {
    var lname = document.getElementById("lname").value;
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value

    if (!lname || !fname || !email || !subject){
        alert("Please enter all form fields!");
        return;
    }

    if (validate_form()) {
        console.clear();
        console.log("Form submitted!");
        console.log("First Name: " + fname);
        console.log("Last Name: " + lname);
        console.log("Email: " + email);
        console.log("Subject: " + subject);

        alert("Form was submitted!");
    }


}

function validate_form() {
    const nameRegex = /^[a-zA-Z'-\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var lname = document.getElementById("lname").value;
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;

    if (!nameRegex.test(lname) && !nameRegex.test(fname)) {
        alert("Invalid first name or last name");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Invalid email id");
        return;
    }

    return true;

}