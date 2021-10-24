import React from 'react';
import styles from './Mailing.module.css'
import JoinForm from './JoinForm';




const Mailing = ({}) => {

    const handleButtonClick = () => {
        alert('No dinner first? How rude.')
    }

    return (
        <div>
            <div className={styles.mainSection}>
                <h1 className={styles.mailingTitle}>Join our mailing list</h1>
                <div className={styles.innerContent}>
                    <div className={styles.leftContent}>
                        <JoinForm />
                    </div>
                    <div className={styles.rightContent}>
                        <h2>Join our mailing to receive notifications about program availability and special discounts</h2>
                        <button onClick={handleButtonClick} className={styles.button}>
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mailing;