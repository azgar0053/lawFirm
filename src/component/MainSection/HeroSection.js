import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { MdEmail } from "react-icons/md";
import styles from './HeroSection.module.css'
import heroImg from '../../assets/heroImage.png'

const Hero=()=>{
    return(
        <div className={styles.heroSection}>
            <div className={styles.heroText}>
                <h1>You don’t have to </h1>
                <h2>Fight them Alone.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                <Box  >
                    <FormControl variant="standard" className={styles.inputBox}>
                        <Input
                        className={styles.inputField}                        style={{color:"white", borderBottom:'none'}}
                            id="input-with-icon-adornment"
                            placeholder="Enter your eamil address"
                            startAdornment={
                                <InputAdornment position="start">
                                <MdEmail style={{color:"white", opacity:'20%'}}/>
                                </InputAdornment>
                            }
                            />
                        <button className={styles.letsTalkBtn}>Let's Talk</button>
                    </FormControl>
                </Box>
            </div>
            <img src={heroImg} alt="Hero"/>

        </div>
    )
}


export default Hero;