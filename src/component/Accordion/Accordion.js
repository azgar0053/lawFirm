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
      <Accordion>
        <AccordionSummary
          expandIcon={<AiFillPlusCircle />}
          aria-controls={`'panel'${num}'-a-content'`}
          id={`'panel'${num}'-a-content'`}
        >
          <Typography>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
