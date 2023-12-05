import React from "react";
import styles from './NewsLetter.module.css'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const NewsLetter=()=>{
    return(
        <div className={styles.mainDiv}>
            <h1>Subscribe Our Newsletter</h1>
            <Stack spacing={2} direction="row">
                <FormControl sx={{ width: '25ch' }} className={styles.inputTags} id={styles.input1}>
                    <OutlinedInput placeholder="Name:" />
                </FormControl>
                <FormControl sx={{ width: '25ch' }} className={styles.inputTags}>
                    <OutlinedInput placeholder="Enter your Email" />
                </FormControl>
                <Button variant="contained" id={styles.btnSend} style={{borderRadius:'0px 8px 8px 0px'}}>SEND</Button>           
            </Stack>
        </div>
    )
}


export default NewsLetter