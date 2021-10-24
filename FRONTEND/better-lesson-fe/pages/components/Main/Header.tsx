import React from 'react';
import styles from './Header.module.css'
import Image from 'next/image'
import BL_LogoBasic from './../../../public/BL_LogoBasic.png'


const Header = () => {
    return (<div className={styles.mainDiv}>
      <div className={styles.contentWrapper}>
        <Image height='50px' width='50px' src={BL_LogoBasic} alt="BetterLessonLogo" />
        <h1 className={styles.headerText}>BetterLesson</h1>
        <h1 className={styles.headerText}>Professional Coaching</h1>
        <h3 className={styles.headerTwoText}>Professional Coach Seminars & Mentorship</h3>
        </div>
    </div>
    )
}

export default Header;