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
                <FormControl sx={{ width: '25ch' }} className={styles.inputTags} id={styles.input1} style={{ borderRadius: '8px 0px 0px 8px'}}>
                    <OutlinedInput placeholder="Name:"  style={{border: 'none', borderRadius:'8px 0px 0px 8px'}}/>
                </FormControl>
                <FormControl sx={{ width: '25ch' }} className={styles.inputTags}>
                    <OutlinedInput placeholder="Enter your Email" style={{border: 'none', borderRadius:'0px'}} />
                </FormControl>
                <Button variant="contained" id={styles.btnSend} style={{borderRadius:'0px 8px 8px 0px', backgroundColor: '#E3B748', color: '#000'}}>SEND</Button>           
            </Stack>
        </div>
    )
}


export default NewsLetter