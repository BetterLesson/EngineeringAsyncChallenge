import React from 'react';

const Footer = () => {
  return (
    <section id="footer">
      <div className="bottom-0 w-full bg-white">
        <div className="flex flex-col gap-4 py-10 text-xs text-center tablet:flex-row tablet:justify-center tablet:gap-10 tablet:py-20 laptop:text-base">
          <div>
            <p className="font-semibold tracking-wider uppercase">
              Email Address
            </p>
            <p>hello@reallygreatsite.com</p>
          </div>
          <div className="">
            <p className="font-semibold tracking-wider uppercase">
              Mailing Address
            </p>
            <p>123 Anywhere St. Any City, St 12345 </p>
          </div>
          <div className="">
            <p className="font-semibold tracking-wider uppercase">
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
