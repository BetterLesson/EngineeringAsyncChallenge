import { Typography } from '@mui/material'
import React from 'react'

function Info() {
	const contactInfo = [
		{
			type: "Email Address", 
			info: "hello@reallygreatesite.com"
		},
		{
			type: "Mailing Address",
			info: "123 Anywhere St., Any City, ST 12345"
		},
		{
			type: "Phone Number",
			info: "(123) 456-7890"
		}
	];

	const contactInfoMapped = contactInfo.map( (item, index) => {
		return (
			<div key={index}>
				<Typography variant='h6' align='center'>{item.type.toUpperCase()}</Typography>
				<Typography align='center'>{item.info}</Typography>
			</div>
		)
	})

  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', padding: '30px'}}>
        {contactInfoMapped}
    </div>
  )
}

export default Info