function myFunction() {
  let form = document.getElementsByName("contact-form")[0];
  let fullName = document.getElementById("fName").value;
  let email = document.getElementById("email").value;
  let industry = document.getElementById("industry").value;
  const formValue = {
    fullName,
    email,
    industry,
  };
  console.log("New contact form", formValue);
  form.reset();
  alert("Form submitted");
  return false;
}
