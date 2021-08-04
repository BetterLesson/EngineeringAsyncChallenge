import React from 'react';
import { Button, Grid, Typography, TextField, MenuItem } from '@material-ui/core';
import './MailingListForm.css';
 
const industryValues = [
    'E-Sports',
    'Sports/Fitness',
    'Professional Services'
];

function MailingListForm (props) {
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [industry, setIndustry] = React.useState(industryValues[0]);
    const [fullNameError, setFullNameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [industryError, setIndustryError] = React.useState(false);

    function validateFullName(value) {
        var valid = true;
        if (value.length < 1) {
            valid = false;
        }
        setFullNameError(!valid);
        return valid;
    }

    function validateEmail(value) {
        var valid = true;
        if (value.length < 3) {
            valid = false;
        }
        if (/\w+@\w+\.\w+/.exec(value) == null) {
            valid = false;
        }
        setEmailError(!valid);
        return valid;
    }

    function validateIndustry(value) {
        var valid = true;
        if (industryValues.indexOf(value) === -1) {
            valid = false;
        }
        setIndustryError(!valid);
        return valid;
    }

    function submitMailingListForm() {
        if (validateEmail(email) && validateFullName(fullName) && validateIndustry(industry)) {
            console.log('Full Name: ' + fullName);
            console.log('Email: ' + email);
            console.log('Industry: ' + industry);
        }
    }

    return (
        <Grid
            container
            id="mailing-list-form-container"
            direction="column"
            justifyContent="center"
            alignContent="center"
            spacing={2}
        >
            <Grid item>
                <Typography variant="h3" align="center" style={{ color: 'white', fontWeight: '550' }}>
                    Join our mailing list
                </Typography>
            </Grid>
            <Grid
                item
                container
                style={{
                    backgroundColor: 'rgba(175,175,175,.95)',
                    height: '250px',
                    width: '600px'
                }}
                direction="row"
            >
                <Grid item container xs={6} direction="column" spacing={3} justifyContent="center">
                    <Grid item>
                        <TextField
                            variant="outlined"
                            label="Full Name"
                            placeholder="Jane Doe"
                            InputLabelProps={{ shrink:true }}
                            value={fullName}
                            onChange={(event) => {
                                setFullName(event.target.value);
                                validateFullName(event.target.value);
                            }}
                            error={fullNameError}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            variant="outlined"
                            label="Email"
                            placeholder="jane_doe@email.com"
                            InputLabelProps={{ shrink:true }}
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                                validateEmail(event.target.value);
                            }}
                            error={emailError}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            variant="outlined"
                            label="Industry"
                            select
                            InputLabelProps={{ shrink:true }}
                            style={{ width: "75%" }}
                            onChange={(event) => {
                                setIndustry(event.target.value);
                                validateIndustry(event.target.value);
                            }}
                            error={industryError}
                            value={industry}
                        >
                            {industryValues.map((value) => (
                                <MenuItem key={value} value={value}>{value}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Grid item container xs={6} justifyContent="center">
                    <Grid item>
                        <Typography variant="h5" align="center" style={{ marginTop: '15px' }}>
                            Join our mailing to recieve notifications about program availability and special discounts
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Button
                            id="submit-mailing-list-form-button"
                            variant="contained"
                            style={{ backgroundColor: 'blue', color: 'white', width: '150px' }}
                            onClick={submitMailingListForm}
                        >
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MailingListForm;