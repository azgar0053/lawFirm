import React from "react";
import styles from './Practice.module.css'

const Practice=()=>{
    return(
        <div className={styles.practiceDiv} id='practiceSec'>
            <h1>Area of Practices</h1>            
            <div className={styles.mosiacImages}>
                <div className={styles.bigPic} id={styles.mosiac1}><h2>BUSINESS LAW</h2></div>
                <div className={styles.smallPic} id={styles.mosiac2}><h2>PARTNERSHIP LAW</h2></div>
                <div className={styles.smallPic} id={styles.mosiac3}><h2>REAL ESTATE LAW</h2></div>
                <div className={styles.bigPic} id={styles.mosiac4}><h2>BUSINESS LAW</h2></div>
                <div className={styles.bigPic} id={styles.mosiac5}><h2>LANDLORD DISPUTES</h2></div>
                <div className={styles.smallPic} id={styles.mosiac6}><h2>ELDER ABUSE</h2></div>
            </div>
        </div>
    )
}

export default Practice;