import React from 'react';

function Footer(props) {
    const companyInfo={
        email:'hello@reallygreatsite.com',
        address:'123 Anywhere St. Any City, ST 12345',
        phoneNumber:'(123) 456-7890'

    }
    return (
        <footer className=' flex flex-row justify-around text-center mb-20 text-white tracking-wide'>
            <section>
                <div className={[myStyles.title]}>EMAIL ADDRESS</div>
                <a href='/' className={myStyles.infoText}>{companyInfo.email}</a>
            </section>
            <section>   
                <div className={[myStyles.title]}>MAILING ADDRESS</div>
                <a href='/' className={myStyles.infoText}>{companyInfo.address}</a>
            </section>

            <section> 
                <div className={[myStyles.title]}>PHONE NUMBER</div>
                <div className={myStyles.infoText}>{companyInfo.phoneNumber}</div>
            </section>
        </footer>
    );
}

export default Footer;

const myStyles = {

    title:`font-semibold text-2xl tracking-wider`,
    infoText: `text-lg `

}