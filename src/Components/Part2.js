import { Grid, Box, Container } from '@mui/material'
import React from 'react'
import { FiMonitor } from "react-icons/fi";
import { BsMouse2 } from "react-icons/bs";
import { IoUmbrellaOutline } from "react-icons/io5";
import { SlRocket } from "react-icons/sl";


function Part2() {
    return (

        <Box sx={{ backgroundColor:'black', padding:'50px'}}>
        <Container>

            <Grid container spacing={2} sx={{marginTop:'50px', color:'#fff'}}>
                <Grid item md={6} lg={3} sx={{borderRight:"1px solid black"}}>
                    <Box><FiMonitor color='#61173E' fontSize={60} /></Box>
                    <Box component='h3'>Instant Professional Websites</Box>
                    <Box component='h4' sx={{color:'#A7A8A9'}}>Choose from Our Range of Prebuilt Designs</Box>
                    <Box sx={{color:'#A7A8A9'}}>No complex coding needed. Ready to transform your web presence effortlessly? Explore our prebuilt website templates today and get your site live faster than ever!</Box>
                </Grid>
                <Grid item md={6} lg={3} sx={{borderRight:"1px solid black"}}>
                    <Box><BsMouse2  color='#A670D2' fontSize={60} /></Box>
                    <Box component='h3'>Instant Professional Websites</Box>
                    <Box component='h4' sx={{color:'#A7A8A9'}}>Choose from Our Range of Prebuilt Designs</Box>
                    <Box sx={{color:'#A7A8A9'}}>No complex coding needed. Ready to transform your web presence effortlessly? Explore our prebuilt website templates today and get your site live faster than ever!</Box>
                </Grid>
                <Grid item md={6} lg={3} sx={{borderRight:"1px solid black"}}>
                    <Box><IoUmbrellaOutline  color='#3F4D91' fontSize={60} /></Box>
                    <Box component='h3'>Instant Professional Websites</Box>
                    <Box component='h4' sx={{color:'#A7A8A9'}}>Choose from Our Range of Prebuilt Designs</Box>
                    <Box sx={{color:'#A7A8A9'}}>No complex coding needed. Ready to transform your web presence effortlessly? Explore our prebuilt website templates today and get your site live faster than ever!</Box>
                </Grid>
                <Grid item md={6} lg={3}>
                    <Box><SlRocket  color='#83474F' fontSize={60} /></Box>
                    <Box component='h3' >Instant Professional Websites</Box>
                    <Box component='h4' sx={{color:'#A7A8A9'}}>Choose from Our Range of Prebuilt Designs</Box>
                    <Box sx={{color:'#A7A8A9'}}>No complex coding needed. Ready to transform your web presence effortlessly? Explore our prebuilt website templates today and get your site live faster than ever!</Box>
                </Grid>

            </Grid>

        </Container>
        </Box>
    )
}

export default Part2
