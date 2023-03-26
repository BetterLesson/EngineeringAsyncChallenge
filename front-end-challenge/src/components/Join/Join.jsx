import React, { useState, useMemo } from 'react';
import { Typography, TextField, Paper, MenuItem, Button } from '@mui/material';
import mailingListImg from '../../assets/mailinglist.png';
import './join.css';

function Join() {
	const industries = ['E-Sports', 'Professional Services', 'Sports / Fitness'];

	const defaultInfo = {
		name: '',
		email: '',
		industry: industries[0]
	}
	
	const defaultError = {
		name: false,
		email: false,
		industry: false
	}

	
	const [info, setInfo] = useState(defaultInfo);
	const [error, setError] = useState(defaultError);
	const errorOrDefault = useMemo(() => {
    return (
      Object.values(error).filter(item => item === true).length > 0 
      || Object.values(info).filter(item => item === '').length > 0
      || error === defaultError
    )
  }, [error])

	const handleChange = e => {
		if (!e.target.value) {
      setError(prevErrors => ({...prevErrors, [e.target.name]: true}))
    } else {
      setError(prevErrors => ({...prevErrors, [e.target.name]: false}))
    }
    if (e.target.name === 'email' 
      && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
      ) {
        setError(prevErrors => ({...prevErrors, [e.target.name]: true}))
      }
    setInfo(prevInfo => {
      return (
        {
          ...prevInfo,
          [e.target.name]: e.target.value
        }
      )
    })
	}

	const handleSubmit = e => {
		if (errorOrDefault) return
    console.log("info", info)
	}

	const industryOptionsMapped = industries.map((option, index) => {
    return (<MenuItem key={index} value={option}>{option}</MenuItem>)
  })

  return (
    <div className='join-section section'>
			<img className='background-img mailing-img' src={mailingListImg} />
			<div className='form-area-container'>
				<Typography variant='h4' color='white'>Join our mailing list</Typography>
				<div className='inner-signup-section'>
					<Paper sx={{bgcolor: 'rgb(210, 210, 210, 0.8)', display: 'flex'}} >
          <div className='form-inputs'>
            <TextField 
              component={Paper}
              required
              variant='outlined'
              label='Full Name'
              placeholder='Jane Doe'
              size='small'
              sx={{m: 2}}
              value={info.name}
              name='name'
              onChange={handleChange}
              error={error.name}
            />
            <TextField 
              component={Paper}
              required
              variant='outlined'
              label='Email'
              placeholder='jane_doe@email.com'
              size='small'
              sx={{m: 2}}
              value={info.email}
              name='email'
              onChange={handleChange}
              error={error.email}
            />
            <TextField
              select
              component={Paper}
              label='Industry'
              required
              size='small'
              sx={{m: 2, minWidth: '200px'}}
              value={info.industry}
              name='industry'
              onChange={handleChange}
              error={error.industry}
            >
              {industryOptionsMapped}
            </TextField>
          </div>
          <div className='form-info-submit'>
            <Typography variant='h6' align='center' sx={{mb: 3}}>Join our mailing list to receive notifications about program availability and special discounts</Typography>
            <Button 
              variant='contained' 
              onClick={handleSubmit}
              disabled={errorOrDefault}
							sx={{mx: 6}}
            >
              Sign Up
            </Button>
          </div>
        </Paper>
					</div>

			</div>
    </div>
  )
}

export default Join