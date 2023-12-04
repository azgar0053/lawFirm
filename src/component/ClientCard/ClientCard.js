import React from "react";
import styles from './ClientCard.module.css';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";



const ClientCard = ({ bgColor, clientName }) => {
    return (
        <div className={styles.cardDiv}>
            <Card sx={{ minWidth: 275 }} style={{ backgroundColor: bgColor, height: '100%' }}>
                <CardContent className={styles.cardContent}>
                    <img src="https://play-lh.googleusercontent.com/Hz5jiybLawpC0GSXNy7hWtCL1QVpj3Q79rqEWfsUFit7eRHgEYARFH07J5u3awoXagE" alt="client img" className={styles.logo} />
                    <Typography variant="h5" component="div" color="white" className={styles.clientName}>
                        {clientName}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="white" className={styles.cardDesignation}>
                        CEO
                    </Typography>
                    <Typography variant="body1" color='#ffffff30' className={styles.cardPara}>
                        Amet minim mollit non deserunt ullamco est
                        sit aliqua dolor do amet sint. Velit officia
                        consequatduis enim velit mollit Exer. sit
                        aliqua dolor do amet sint. Velit officia
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ClientCard;