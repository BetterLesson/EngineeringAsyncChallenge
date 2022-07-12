import React, { useState, useEffect, useRef } from 'react';
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css';
import '/node_modules/primereact/resources/themes/vela-blue/theme.css'
import formLogo from '../Images/logo512.png'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Messages } from 'primereact/messages';
import { Message } from 'primereact/message';

function ContactForm({tableData, headers}){

    const formInit = {
        notes: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    }

    const messages = useRef(null)

    const requiredFields = ['notes', 'firstName', 'lastName', 'email']

    const [contactInfo, setContactInfo] = useState(formInit)
    
    useEffect(() => {
       
    }, []); //

    function validateData(){
        
        for(const [key,value] of Object.entries(contactInfo)){
            if(requiredFields.includes(key) && value.trim() === ''){
                return {
                    valid: false, 
                    error: `The ${key} field is required, please input all required fields and re-submit`
                }
            }
        }
        return {
            valid: true, 
            error: ``
        }
    }

    function handleSubmit(event){
        event.preventDefault()
        const validation = validateData()
        if(validation.valid){
            console.log(`data`)
            let lintOut = ''
            console.log(`| ${Object.values(headers).join(' | ')} |`)
            for(const educator of tableData){   
                console.log(`| ${educator.name} | ${educator.field} | ${educator.years} | ${educator.colleges} |`)
            }
            messages.current.replace(
                { severity: 'success', summary: 'Submitted Details!', detail: validation.error, life: 3000 }
            )
        }else{
           
            messages.current.replace(
                { severity: 'warn', summary: 'Warning', detail: validation.error, sticky: true }
            )
        }
    }

    return (
        <form onSubmit={handleSubmit}>

        

        <Card className='flex-wrap'>
            <Messages ref={messages}></Messages>

            <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div className="text-center mb-5">
                <img src={formLogo} alt="hyper" height={50} className="mb-3" />
                <div className="text-900 text-3xl font-medium mb-3">Contact Form</div>
            </div>

        <div>
            <label htmlFor="notes" className="block text-900 font-medium mb-2" required>What are you interested in?<span className='vertical-align-super'>*</span></label>
            <InputTextarea value={contactInfo.notes}  onChange={(e) => setContactInfo((prev)=>{return {...prev,'notes': e.target.value}})} rows={5} cols={30} id="notes" type="text" className="w-full mb-3" />

            <label htmlFor="firstName" className="block text-900 font-medium mb-2 required" >First Name<span className='vertical-align-super'>*</span></label>
            <InputText id="firstName" onChange={(e) => setContactInfo((prev)=>{return {...prev,'firstName': e.target.value}})} value={contactInfo.firstName} type="text" className="w-full mb-3" />

            <label htmlFor="lastName" className="block text-900 font-medium mb-2" >Last Name<span className='vertical-align-super'>*</span></label>
            <InputText id="lastName" onChange={(e) => setContactInfo((prev)=>{return {...prev,'lastName': e.target.value}})} value={contactInfo.lastName} type="text" className="w-full mb-3" />

            <label htmlFor="email" className="block text-900 font-medium mb-2" >Email<span className='vertical-align-super'>*</span></label>
            <InputText id="email"  onChange={(e) => setContactInfo((prev)=>{return {...prev,'email': e.target.value}})} value={contactInfo.email} type="text" className="w-full mb-3" />

            <label htmlFor="phone" className="block text-900 font-medium mb-2">Phone #</label>
            <InputText id="phone" onChange={(e) => setContactInfo((prev)=>{return {...prev,'phone': e.target.value}})} value={contactInfo.phone} type="text" className="w-full mb-3" />

            <Button label="Submit Contact Info" icon="pi pi-user" className="w-full" />
                </div>
            </div>
        </div>
        </Card>
        </form>
    )

}

export default ContactForm