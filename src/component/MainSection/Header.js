import React from "react";
import styles from './Header.module.css'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className={styles.header}>
            <div style={{padding:'10px 10px 10px 0px', margin:'15px 15px 15px 0px'}}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.menu}>
                <h4 style={{padding:'10px', margin:'15px'}}><a href="#home">Home</a></h4>
                <h4 style={{padding:'10px', margin:'15px'}}><a href="#attorneySec">Attorneys</a></h4>
                <h4 style={{padding:'10px', margin:'15px'}}><a href="#practiceSec">Practice Areas</a></h4>
                <h4 style={{padding:'10px', margin:'15px'}}><a href="#ourTeam">About Us</a></h4>
            </div>
                <button className={styles.contactButton}>Contact Now</button>
        </div>
    )
}

export default Header;