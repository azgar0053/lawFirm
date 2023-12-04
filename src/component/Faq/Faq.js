import React from "react";
import styles from './Faq.module.css'
import AccordionComp from "../Accordion/Accordion";

const Faq = () => {
    return (
        <div className={styles.faqMainDiv}>
            <div className={styles.faqLeftContext}>
                <h1>FAQ</h1>
                <p>Amet minim mollit non deserunt ullamco est sit</p>
                <p>aliqua dolor do amet sint. </p>
            </div>
            <div style={{marginTop:'80px'}}>
                <div className={styles.faqAccordion}>
                    <AccordionComp question={'Do I need a personal injury report?'}
                        answer={'Amet minim mollit non deserunt ullamco est sitialiqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'}
                        num={'1'}
                    />
                </div>
                <div className={styles.faqAccordion}>
                    <AccordionComp question={'How much is my case worth?'}
                        answer={'Amet minim mollit non deserunt ullamco est sitialiqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'}
                        num={'2'}
                    />
                </div>
                <div className={styles.faqAccordion}>
                    <AccordionComp question={'What should I do right after car accidect'}
                        answer={'Amet minim mollit non deserunt ullamco est sitialiqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'}
                        num={'3'}
                    />
                </div>
                <div className={styles.faqAccordion}>
                    <AccordionComp question={'How much is my case worth?'}
                        answer={'Amet minim mollit non deserunt ullamco est sitialiqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'}
                        num={'4'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Faq;