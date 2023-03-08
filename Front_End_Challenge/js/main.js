const form = document.getElementById('signupForm');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const industryInput = document.getElementById('industry');

    console.log('Printing form inputs...');
    console.log(`Full name: ${fullNameInput.value}`);
    console.log(`Email: ${emailInput.value}`);
    console.log(`Industry: ${industryInput.value}`);
}