import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Button, Paper } from "@material-ui/core";
import './Form.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = { nameValue: '', emailValue: '', nameError: '', emailError: '', submitted: false }
    }

    isNameValid(name) {
        return name != "Stephen Brewer";
    }

    isEmailValid(email) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEmail.test(email);
    }

    onNameChange(event) {
        this.setState({ nameValue: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ emailValue: event.target.value })
    }

    onNameBlur(event) {
        if (this.isNameValid(event.target.value)) {
            this.setState({ nameError: '' })
        } else {
            this.setState({ nameError: 'There can be only one!!!' })
        }
    }

    onEmailBlur(event) {
        if (this.isEmailValid(event.target.value)) {
            this.setState({ emailError: '' })
        } else {
            this.setState({ emailError: 'Invalid email' })
        }
    }

    onSubmit(event) {
        console.log("Success! Name: " + this.state.nameValue + ". Email: " + this.state.emailValue);
        this.setState({ submitted: true })
    }

    render() {
        if (this.state.submitted) {
            return (
                <div className="SubmittedText">
                    Thank you for your interest in <br />
                    BetterLesson. Keep an eye on your inbox <br />
                    for more information!
                </div>
            );
        }
        let submitDisabled = !(this.state.nameError === '' && this.state.emailError === '');
        return (
            <div className="FormWrapper">
                <Paper>
                    <div className="FormTitle">
                        Sign up now!
                    </div>

                    <div className="FormContainer">
                        <TextField className="FormText"
                            onBlur={this.onNameBlur.bind(this)}
                            value={this.state.nameValue}
                            label={"Name"}
                            helperText={this.state.nameError}
                            error={this.state.nameError != ''}
                            onChange={this.onNameChange.bind(this)}
                        />

                        <TextField className="FormText"
                            onBlur={this.onEmailBlur.bind(this)}
                            value={this.state.emailValue}
                            label={"Email"}
                            helperText={this.state.emailError}
                            error={this.state.emailError != ''}
                            onChange={this.onEmailChange.bind(this)}
                        />

                        <Button disabled={submitDisabled} className="FormButton" onClick={this.onSubmit.bind(this)}>Submit</Button>
                    </div>
                </Paper>
            </div>
        );
    }
}
