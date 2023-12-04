import React from "react";
import styles from './OurTeam.module.css';
import Chip from "../TeamChip/TeamChip";


const OurTeam=()=>{
    return(
        <div className={styles.ourTeamComp}>
            <h1 style={{color:'#fff'}}>Our Team</h1>
            <div className={styles.chipDiv}>
            <div><Chip teamName='Danial Def' cases='301' teamImg='https://play-lh.googleusercontent.com/Hz5jiybLawpC0GSXNy7hWtCL1QVpj3Q79rqEWfsUFit7eRHgEYARFH07J5u3awoXagE'/></div>            
            <div><Chip teamName='Sanfole' cases='850' teamImg='https://play-lh.googleusercontent.com/Hz5jiybLawpC0GSXNy7hWtCL1QVpj3Q79rqEWfsUFit7eRHgEYARFH07J5u3awoXagE'/></div>            
            <div><Chip teamName='Cesforila' cases='407' teamImg='https://play-lh.googleusercontent.com/Hz5jiybLawpC0GSXNy7hWtCL1QVpj3Q79rqEWfsUFit7eRHgEYARFH07J5u3awoXagE'/></div>            
            <div><Chip teamName='Colleen' cases='180' teamImg='https://play-lh.googleusercontent.com/Hz5jiybLawpC0GSXNy7hWtCL1QVpj3Q79rqEWfsUFit7eRHgEYARFH07J5u3awoXagE'/></div>            
            <div><Chip teamName='Haldone' cases='212' teamImg='https://play-lh.googleusercontent.com/Hz5jiybLawpC0GSXNy7hWtCL1QVpj3Q79rqEWfsUFit7eRHgEYARFH07J5u3awoXagE'/></div>            
            <div><Chip teamName='Nik Jeo' cases='350' teamImg='https://play-lh.googleusercontent.com/Hz5jiybLawpC0GSXNy7hWtCL1QVpj3Q79rqEWfsUFit7eRHgEYARFH07J5u3awoXagE'/></div>            

            </div>
        </div>
    )
}

export default OurTeam
