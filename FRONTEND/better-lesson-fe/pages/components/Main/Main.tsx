import React from 'react';
import Header from './Header';
import Coaches from './Coaches';
import Mailing from './Mailing';
import Footer from './Footer';
import styles from './Main.module.css'

const Main = () => {
    return <body className={styles.body}>
        <Header/>
        <Coaches />
        <Mailing />
        <Footer />
    </body>;
}

export default Main;