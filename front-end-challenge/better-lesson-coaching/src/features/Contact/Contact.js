import './Contact.css';
import MailingListForm from './MailingListForm/MailingListForm';

export default function Contact() {
  return (
    <div id="sign-up" className="contact-container">
      <MailingListForm />
      <div className="contact-info-container">
        <div className="contact-header" data-testid="contact-header">Email Address</div>
        <div className="contact-header" data-testid="contact-header">Mailing Address</div>
        <div className="contact-header" data-testid="contact-header">Phone Number</div>
        <div className="contact-value" data-testid="contact-value">hello@reallygreatsite.com</div>
        <div className="contact-value" data-testid="contact-value">123 Anywhere St. Any City, ST 12345</div>
        <div className="contact-value" data-testid="contact-value">(123) 456 7890</div>
      </div>
    </div>
  );
}

