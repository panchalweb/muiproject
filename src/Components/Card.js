import { Box, Grid, Container } from '@mui/material'
import React from 'react'
// import { BsMouse2 } from "react-icons/bs";



function Card(props) {
    return (
        <div>

                <Box sx={{display:"flex"}}>
                    <Box sx={{ display: "flex", alignItems: "center", fontSize: "50px", padding: "20px", color:"#4B76F6" }}>
                        <div>{props.icon}</div>
                    </Box>
                    <Box >
                        <Box component='h2' sx={{fontFamily:"Montserrat"}} >{props.name}</Box>
                        <Box component='p'>{props.desc}</Box>
                    </Box>
                </Box>
           
        </div>
    )
}

export default Card
