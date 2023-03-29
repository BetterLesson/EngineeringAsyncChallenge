const form = document.querySelector('form');

function validateEmail(emailInput){
    const emailRegex = /^\S+@\S+\.\S+$/;
      if (emailInput.value === '' || !emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false;
      }
      return true;
}

function validate_name(nameInput){
  if (nameInput.value === '') {
    alert('Your name can not be left blanked');
    return false;
  }
}

function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  validate_name(nameInput)
  return validateEmail(emailInput)
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()) {
    const formData = new FormData(form);
    for (const pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
    alert('Thank you! We will provide you with information soon!');
    form.reset();
  }
});
