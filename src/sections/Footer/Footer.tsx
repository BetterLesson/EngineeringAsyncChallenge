import React from 'react';

const Footer = () => {
  return (
    <section id="footer">
      <div className="bg-white  bottom-0 w-full">
        <div className="flex flex-col tablet:flex-row tablet:justify-center text-xs text-center gap-4 tablet:gap-10 py-10 tablet:py-20 laptop:text-base">
          <div>
            <p className="uppercase font-semibold tracking-wider">
              Email Address
            </p>
            <p>hello@reallygreatsite.com</p>
          </div>
          <div className="">
            <p className="uppercase font-semibold tracking-wider">
              Mailing Address
            </p>
            <p>123 Anywhere St. Any City, St 12345 </p>
          </div>
          <div className="">
            <p className="uppercase font-semibold tracking-wider">
              Phone Number
            </p>
            <p>(123) 456-7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
