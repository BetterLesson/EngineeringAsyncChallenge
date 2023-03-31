import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CSS from 'csstype';
import { Button, Grid, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Constants } from '../constants';

const Container = styled(Paper)(({ theme }) => ({
    backgroundColor: '#000080',
    backgroundBlendMode: 'screen',
    backgroundImage: "url('./media/mailingList.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
    width: '100vw',
    height: '100vh',
    position: 'relative',
  }));

const textStyle : CSS.Properties = {
    textAlign: 'center',
    color: 'white',
    fontSize: '60px'
};

const paperStyle = {
    backgroundColor: '#cccdd6',
    width:'70%',
    margin: '0 auto'
}

const formsStyle = {
    color:'black'
}

const industryOptions = [
    { key: 'e-sports', label: 'E-Sports'},
    { key: 'other', label: 'Other'},
    { key: '', label: ''}
];

export default function MailingList() {
    const [name, setName] = useState('');
    //I'm going to go ahead and say that errors are only shown when a non-empty, invalid
    //value is supplied. I could track whether a field has been interacted with and thenceforth
    //set to error if empty OR a bad value but that seems like needless extra steps.
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [industry, setIndustry] = useState('');
    const [industryError, setIndustryError] = useState(false);

    const validateEmail = (email : string) => {
        return email && Constants.emailRegex.test(email);
    }

    const validateName = (name : string) => {
        //Going to go ahead and be pretty permissive with name, so as to support
        //accents and the like.
        //All that is required is it contain a space and be atleast 5 characters total 
        return name && name.includes(' ') && name.length >= 5;
    }

    const validateIndustry = (industry : string) => {
        return industry && industryOptions.find( ({ key}) => key === industry) !== undefined;
    }

    const onFieldChange = (field: string, newValue: any) => {
        switch(field) {
            case 'email':
                setEmail(newValue);
                setEmailError(!!newValue && !validateEmail(newValue));
                break;
            case 'name':
                setName(newValue);
                setNameError(!!newValue && !validateName(newValue));
                break;
            case 'industry':
                setIndustry(newValue);
                setIndustryError(!!newValue && !validateIndustry(newValue));
                break;
            default:
                console.error(`Somehow got a field of ${field}`);
                break;
        }
    }

    const onSubmitForm = () => {
        console.log(`validated user submitted mailing list form. As follows`);
        console.log(JSON.stringify({
            name,
            email,
            industry
        }, null, 2));
    }

    //If all values are non-empty and there are no errors, submit should be
    //available
    //Normally, I would shy away from any calculations in the render method.
    //But, this is a simple calculation and doing it here instead of in the change
    //handler allows easy reuse of the calculations made in said method.
    const formEnabled = !!email && !!name && !!industry && 
        !emailError && !nameError && !industryError;

    return (
        <Container>
            <p style={textStyle}>Join our mailing list</p>
            <br/>
            <Paper style={paperStyle}>
                <Grid container spacing={2}>
                <Grid item xs={1}/>
                <Grid item xs={5}>
                    <FormControl>
                        <FormLabel style={formsStyle}>Full Name</FormLabel>
                        <TextField
                            error={nameError}
                            value={name} 
                            style={{backgroundColor: 'white'}} 
                            type="text" 
                            onChange={( (event: { target: { value: any; }; }) => onFieldChange('name', event?.target?.value))}
                        />
                        <FormLabel style={formsStyle}>Email</FormLabel>
                        <TextField
                            error={emailError}
                            value={email} 
                            style={{backgroundColor: 'white'}} 
                            type="text" 
                            onChange={( (event: { target: { value: any; }; }) => onFieldChange('email', event?.target?.value))}
                        />
                        <FormLabel style={formsStyle}>Industry</FormLabel>
                        <Select
                            error={industryError}
                            id="industry"
                            style={{backgroundColor: 'white'}}
                            value={industry}
                            label="Industry"
                            onChange={( (event: { target: { value: any; }; }) => onFieldChange('industry', event?.target?.value))}
                        >
                            { industryOptions.map( ({key, label}) => {
                                return (
                                    <MenuItem key={key} value={key}>{label}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid textAlign='center' item xs={6}>
                    <p style={{fontSize: '40px'}}>Join our mailing to receive notifications about program availability and special discounts</p>
                    <Button onClick={onSubmitForm} disabled={!formEnabled} size="large">Sign Up</Button>
                </Grid>
                </Grid>
            </Paper>
        </Container>
    );
  }