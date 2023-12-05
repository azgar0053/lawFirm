import  React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AiFillPlusCircle } from "react-icons/ai";
import styled from "@emotion/styled";
import styles from './Accordion.module.css'


export default function AccordionComp({question, answer, num}) {
  return (
    <div className={styles.accordionDiv}> 
      <Accordion style={{margin:'20px 0px'}}>
        <AccordionSummary
          expandIcon={<AiFillPlusCircle style={{color:'#E3B748',width: '28px', height: '28px'}} />}
          aria-controls={`'panel'${num}'-a-content'`}
          id={`'panel'${num}'-a-content'`}
          style={{backgroundColor: '#1d1d1d', color:'#fff', fontSize:'24px', fontWeight:'600', lineHeight:'24px', letterSpacing:'0em', textAlign:'left'}}
        >
          <Typography>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{color: '#ffffff30',backgroundColor:'#1d1d1d', fontSize:'18px', fontWeight:'500', lineHeight:'29px', letterSpacing:'0em', textAlign:'left'}}>
          <Typography style={{color: '#ffffff30'}}>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
