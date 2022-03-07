import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import logo from '../../assets/BL_LogoBasic.png';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <>
      <div className={classes.hero}>
        <div className={classes.content + ' align-vertical'}>
          <img src={logo} alt="BetterLesson Professional Coaching" />
          <h1>BetterLesson</h1>
          <h2>Professional Coaching</h2>
          <h3>Professional Coach Seminars &amp; Mentorship</h3>
          <Link to="/mailing-list">
            <Button size="large" variant="contained">
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
