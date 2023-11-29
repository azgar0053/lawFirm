import React from "react";
import Header from "./Header";
import Hero from "./HeroSection";
import styles from './Main.module.css'

const Main=()=>{
    return (
        <div className={styles.main}>
            <div className={styles.mainSec}>
            <Header/>
            <Hero/>
            </div>
        </div>
    )
}

export default Main;