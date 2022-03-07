import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Nav.module.scss';

const Nav = () => {
  return (
    <>
      <nav className={classes.nav}>
        <Link to="/">Home</Link>
        <Link to="/current-coaches">Current Coaches</Link>
        <Link to="/mailing-list">Mailing List</Link>
      </nav>
    </>
  );
};

export default Nav;
