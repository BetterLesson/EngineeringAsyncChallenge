import { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import classes from './Mailing.module.scss';

const Mailing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const isValidEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const onSubmit = (data) => console.log(data);

  const options = ['e-sports', 'option-2', 'option-3'];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className={classes.mailingList}>
      <form
        className={classes.form + ' align-vertical-center'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container>
          <Grid item xs={12}>
            <h1 className="text-align-center">Join our mailing list.</h1>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="standard"
              {...register('firstName', { required: true })}
            />
            <FormHelperText>
              {errors.firstName && (
                <span className="error-text">First name is required.</span>
              )}
            </FormHelperText>

            <TextField
              fullWidth
              label="Last Name"
              variant="standard"
              {...register('lastName', { required: true })}
            />
            <FormHelperText>
              {errors.lastName && (
                <span className="error-text">Last name is required.</span>
              )}
            </FormHelperText>

            <TextField
              fullWidth
              label="Email Name"
              variant="standard"
              {...register(
                'email',
                { validate: isValidEmail },
                { required: true }
              )}
            />
            <FormHelperText>
              {errors.email && (
                <span className="error-text">Email is required.</span>
              )}
            </FormHelperText>

            <Select
              className="margin-top-1"
              fullWidth
              label="Industry"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              {...register('industry', { required: true })}
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {errors.industry && (
                <span className="error-text">Industry is required.</span>
              )}
            </FormHelperText>
          </Grid>

          <Grid item xs={0} md={1} />

          <Grid item xs={12} md={5}>
            <p className={classes.largeText + ' text-align-center '}>
              Join our mailing list to receive notifications about program
              availability and special discounts.
              <br />
              <Button
                className="margin-top-2"
                fullWidth
                type="submit"
                size="large"
                variant="contained"
              >
                Sign Up
              </Button>
            </p>
          </Grid>
        </Grid>
      </form>

      <footer className={classes.footer + ' text-align-center'}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <p>Email Address</p>
            <p>
              <a
                href="mailto:hello@reallygreatsite.com"
                rel="noreferrer"
                target="_blank"
              >
                hello@reallygreatsite.com
              </a>
            </p>
          </Grid>

          <Grid item xs={12} md={4}>
            <p>Mailing Address</p>
            <p>
              <a
                href="https://maps.google.com/?q=123 Anywhere St., Any City, ST 12345"
                rel="noreferrer"
                target="_blank"
              >
                123 Anywhere St., Any City, ST 12345
              </a>
            </p>
          </Grid>

          <Grid item xs={12} md={4}>
            <p>Phone Number</p>
            <p>
              <a href="tel:123.456.7890" rel="noreferrer" target="_blank">
                123.456.7890
              </a>
            </p>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};

export default Mailing;
