import React from "react";
import styles from './Header.module.css'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.menu}>
                <h4 style={{padding:'10px'}}><a>Home</a></h4>
                <h4 style={{padding:'10px'}}><a>Attorneys</a></h4>
                <h4 style={{padding:'10px'}}><a>Practice Areas</a></h4>
                <h4 style={{padding:'10px'}}><a>About Us</a></h4>
            </div>
                <button className={styles.contactButton}>Contact Now</button>
        </div>
    )
}

export default Header;