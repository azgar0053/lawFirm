import React from "react";
import styles from './Footer.module.css'
import logo from '../../assets/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Box } from "@mui/material";



const Footer=()=>{
    return(
        <Box style={{display:'flex', flexDirection:'column',maxWidth:'1440px', width:'100vw', backgroundColor:'#171717', height:'367px', justifyContent:'space-around'}}>
        <div className={styles.footer}>
            <div style={{padding:'10px 10px 10px 0px', margin:'15px 15px 15px 0px'}}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.menu}>
                <h4 style={{padding:'10px', margin:'15px'}}><a href="#home">Home</a></h4>
                <h4 style={{padding:'10px', margin:'15px'}}><a href="#attorneySec">Attorneys</a></h4>
                <h4 style={{padding:'10px', margin:'15px'}}><a href="#practiceSec">Practice Areas</a></h4>
                <h4 style={{padding:'10px', margin:'15px'}}><a href="#ourTeam">About Us</a></h4>
            </div>
            <div className={styles.socialMediaLogos}>
                <InstagramIcon style={{width:'30px', height:'30px', margin:'0px 8px'}}/>
                <FacebookIcon style={{width:'30px', height:'30px', margin:'0px 8px'}}/>
                <TwitterIcon style={{width:'30px', height:'30px', margin:'0px 8px'}}/>
                <PinterestIcon style={{width:'30px', height:'30px', margin:'0px 8px'}}/>
            </div>
        </div>
        <div className={styles.footerPolicySec}>
            <p>© 2020 Acme. All right reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
        </Box>
    )
}

export default Footer;