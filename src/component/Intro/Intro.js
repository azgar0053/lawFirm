import React from "react";
import styles from './Intro.module.css'

const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.introHeading}>
                <h1>Let's Introduce</h1>
                <h1>Ourself</h1>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.introText}>
                <h2>Criminal Lawyer</h2>
                <p>Amet minim mollit non deserunt ullamco est
                </p>
                <p>sit aliqua dolor do amet sint. Velit officia consequatduis
                </p>
                <p>enim velit mollit Exercitation.
                </p>
            </div>

        </div>
    )
}

export default Intro;