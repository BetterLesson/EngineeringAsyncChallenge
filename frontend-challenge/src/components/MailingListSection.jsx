import React from 'react';
import MailingListForm from './MailingListForm';

function MailingListSection(props) {
    return (
       <section className='
       tracking-wide
        mb-20 
        text-semibold
         text-white 
         text-center 
         mail-list-section
         '> 
         <div className="container flex flex-col " >
            <div className="image rounded-lg"></div>
            <div className="overlay rounded-lg"></div>
            <h1 className='font-semibold m-10 text-6xl relative self-center'>Join Our Mailing List</h1>
            <MailingListForm />
        </div>
        </section>
    );
}

export default MailingListSection;