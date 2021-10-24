import React from 'react';
import styles from './Coaches.module.css'
import Image from 'next/image'
import coaching from './../../../public/coaching.png'

const Coaches = ({}) => {
    return <div className={styles.flexDiv}>
        <div className={styles.leftContent}>
            <div className={styles.coachingImage}></div>
            {/* <Image src={coaching} alt="Coaching" objectFit='fill'/> */}
        </div>
        <div className={styles.rightContent}>
            <div className={styles.columnFlex}>
                <h2 className={styles.currentCoaches}>Current Coaches</h2>
                <div className={styles.gridContent}>
                    <div className={styles.coachNameColumn}>
                        <p className={styles.title}>Coach Name</p>
                        <p className={styles.coachInfoText}>Bob Ross</p>
                        <p className={styles.coachInfoText}>Bob Poss</p>
                        <p className={styles.coachInfoText}>Bob Cross</p>
                    </div>
                    <div className={styles.coachNameColumn}>
                        <p className={styles.title}>Available Starting</p>
                        <p className={styles.coachInfoText}>Now!</p>
                        <p className={styles.coachInfoText}>1/1/2031</p>
                        <p className={styles.coachInfoText}>Hopefully never!</p>
                    </div>
                    <div className={styles.coachNameColumn}>
                        <p className={styles.title}>Industry</p>
                        <p className={styles.coachInfoText}>Cool Dude, cooler hair.</p>
                        <p className={styles.coachInfoText}>Cool(ish) Dude. Good at math.</p>
                        <p className={styles.coachInfoText}>Anger</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Coaches;