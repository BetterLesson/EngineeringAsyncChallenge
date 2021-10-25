import './Title.css';
import Button from '../../components/Button/Button';
import Logo from '../../assets/logo.png';


export default function Title() {
  const handleButtonClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="title-container">
      <div className="title-header">
        <img className="title-logo" data-testid="title-logo" src={Logo} alt="BetterLesson Logo" />
        <h1 className="title-heading" data-testid="title">BetterLesson</h1>
        <h2 className="title-heading" data-testid="title">Professional Coaching</h2>
        <h3 className="title-subheading" data-testid="title">Professional Coach Seminars &amp; Mentorship</h3>
        <Button text="Register Now" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

