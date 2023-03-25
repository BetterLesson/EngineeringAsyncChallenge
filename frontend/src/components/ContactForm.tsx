import { Button, TextField } from '@mui/material';

// component that contains simple contact form with name and email fields
function ContactForm() {
    return (
        <div className='Contact-form-container'>
            <img src={`${process.env.PUBLIC_URL}/coaching.png`} />

            <form className='Contact-form'>
                Join our mailing list
                <p/>

                <TextField className='Contact-form-field'
                    required
                    id='contact-name'
                    label='Full Name'
                />
                <p/>

                <TextField className='Contact-form-field' 
                    required
                    id='contact-email'
                    label='Email'
                />
                <p/>

                <Button className='Contact-button'
                    variant='contained' 
                    onClick={() => handleSubmit()}
                >
                    Sign Up
                </Button>
            </form>
        </div>
    );
}

function handleSubmit() {
    const nameElement = document.getElementById('contact-name') as HTMLInputElement;
    const emailElement = document.getElementById('contact-email') as HTMLInputElement;
    const name = nameElement.value;
    const email = emailElement.value;

    // validate input
    if (name === '' || email === '') {
        alert('Invalid submission! Please enter a name and an email.');
        return;
    }

    // "finalize" submission and clear input
    console.log(`${name} signed up with email ${email}`);
    nameElement.value = '';
    emailElement.value = '';
}
  
export default ContactForm;