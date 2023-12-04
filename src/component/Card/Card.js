import React from "react";
import styles from './Card.module.css'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { HiMiniGift } from "react-icons/hi2";


const Cards=({title, CardBackgroundColor })=>{
    return (
        <Card style={{backgroundColor: CardBackgroundColor, width:'359px', height:'377px', borderRadius:'14px'}} sx={{ Width: 359,height:377, margin:1.5, display:"flex", justifyContent:'space-evenly', flexDirection:'column', alignContent:'flex-start', textAlign:'left', padding:1 }}>
            <HiMiniGift className={styles.giftLogo}/>
          <CardContent sx={{display:'flex', justifyContent:'space-evenly', flexDirection:'column',color:'#fff'}}>
                <Typography variant="h5" component="div" paddingBottom={'15px'}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{opacity:'30%'}}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    sint. Velit officia consequatduis enim velit mollit Exer. <br />
                </Typography>
            </CardContent>
          <CardActions>
                <Button className={styles.readMoreBtn}>Read More</Button>
          </CardActions>
        </Card>
    )
}

export default Cards;