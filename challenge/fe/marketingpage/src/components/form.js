import React, { Component } from "react";
import { Form, Select, Grid, Message, Header } from "semantic-ui-react";
const validator = require("email-validator");

const industryOptions = [
  { key: "ps", text: "Professional Services", value: "Professional Services" },
  { key: "sf", text: "Sports/Fitness", value: "Sports/Fitness" },
  { key: "es", text: "E-Sports", value: "E-Sports" },
];

class EmailForm extends Component {
  state = {
    name: "",
    email: "",
    selectedIndustry: "",
    submittedName: "",
    submittedEmail: "",
    submittedIndustry: "",
    errorText: "",
    error: null,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { name, email, selectedIndustry } = this.state;
    const formValidationData = this.validateInputs();
    if (formValidationData.valid) {
      this.setState({
        submittedName: name,
        submittedEmail: email,
        submittedIndustry: selectedIndustry,
        error: false,
        errorText: "",
      });
    } else {
      this.setState({ errorText: formValidationData.errorText, error: true });
    }
  };

  validateInputs = () => {
    // our form takes care of validating length/existence of inputs
    // we only need to validate that the user has selected an industry and that the email is proper
    const { email, selectedIndustry } = this.state;
    if (!selectedIndustry) {
      return {
        valid: false,
        errorText: "Please input an Industry",
      };
    }

    if (email.length) {
      if (!validator.validate(email)) {
        return {
          valid: false,
          errorText:
            "Please input an appropriately formatted Email - example: bob@gmail.com",
        };
      }
    }

    return {
      valid: true,
    };
  };

  render() {
    const {
      name,
      email,
      submittedEmail,
      submittedName,
      submittedIndustry,
      error,
      errorText,
    } = this.state;
    if (submittedIndustry && submittedName && submittedEmail) {
      console.log(
        "NAME: ",
        submittedName,
        "\nEMAIL: ",
        submittedEmail,
        "\nINDUSTRY: ",
        submittedIndustry
      );
    }

    return (
      <Grid.Column>
        <Header as="h4" color="black">
          Join our mailing list
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              control={Select}
              options={industryOptions}
              placeholder="Industry"
              search
              searchInput={{ id: "form-select-control-industry" }}
              onChange={this.handleChange}
              name="selectedIndustry"
              required
            />
            <Form.Button content="Submit" />
          </Form.Group>
        </Form>
        {error ? (
          <Message warning>
            <Message.Header>Error!</Message.Header>
            <p>{errorText}</p>
          </Message>
        ) : null}
      </Grid.Column>
    );
  }
}

export default EmailForm;
