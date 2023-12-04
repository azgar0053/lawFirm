import React from "react";
import styles from './TeamChip.module.css';


const Chip=({teamImg, teamName, cases})=>{
    return(
        <div className={styles.chipMainDiv}>
            <div className={styles.chipImg}>
                <img src={teamImg} alt="team img"/>
            </div>
            <div className={styles.chipNames}>
                <h1>{teamName}</h1>
                <p>{cases} Cases</p>
            </div>
        </div>
    )
}

export default Chip;