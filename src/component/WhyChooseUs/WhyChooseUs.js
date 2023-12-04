import React from "react";
import styles from './WhyChooseUs.module.css';
import Cards from "../Card/Card";


const WhyChooseUs=()=>{
    return(
        <div className={styles.whychooseCardsDiv}>
            <h1>Why Choose Us?</h1>
            <div className={styles.infoCards}>
                <Cards title={'98% Success Rate'} CardBackgroundColor={'black'}/>
                <Cards title={'100% Success Rate'} CardBackgroundColor={'#ffffff10'}/>
                <Cards title={'100% Success Rate'} CardBackgroundColor={'black'}/>
            </div>
        </div>
    )
}

export default WhyChooseUs