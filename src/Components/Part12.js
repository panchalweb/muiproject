import { WidthFull } from '@mui/icons-material'
import { Container, Grid, Box } from '@mui/material'
import { Divider } from '@mui/material';
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";



function Part12() {
    return (
        <Box sx={{ backgroundColor: "#141618" }}>
            <Container >
                <Grid  >
                    <Grid container sx={{ paddingTop: "90px", paddingBottom: "90px" }}>
                        <Grid xs={12} sm={6} md={3} lg={3}>
                            <Box component='h2' sx={{ color: "#696A6B" }}>BROOKLYN</Box>
                            <Box component='h5' sx={{ color: "#515152" }}>© 2009 – 2024 UNITED THEMES™</Box>
                        </Grid>
                        <Grid xs={12} sm={6} md={3} lg={3}>
                            <Box component='h2' sx={{ color: "#696A6B" }}>MENU</Box>
                            <Box component='h5' sx={{ color: "#515152" }}>
                                <Box>All Brooklyn Websites</Box>
                                <Box>Showcase</Box>
                                <Box>What’s New</Box>
                                <Box>Changelog</Box>
                                <Box>Terms And Conditions</Box>
                                <Box>Privacy Policy</Box>
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={6} md={3} lg={3}>
                            <Box component='h2' sx={{ color: "#696A6B" }}>SUPPORT</Box>
                            <Box component='h5' sx={{ color: "#515152" }}>
                                <Box>Help Desk</Box>
                                <Box>Support Policy</Box>
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={6} md={3} lg={3}>
                            <Box component='h2' sx={{ color: "#696A6B" }}>FOLLOW</Box>
                            <Box component='h5' sx={{ color: "#515152" }}>
                                <Box>Facebook</Box>
                                <Box>Twitter</Box>
                                <Box>YouTube</Box>
                                <Box>Instagram</Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Divider sx={{ bgcolor: 'grey.500', textAlign: "center" }} />;


                    {/* className='justify-content-sm-start justify-content-md-end d-flex order-sm-1 order-md-2' 
                     sx={{ display: 'flex', justifyContent: { sm: 'center', lg: 'flex-end' } }}
                    */}

                    <Grid container sx={{ padding: "10px" }} >

                        <Grid sx={{
                            color: "#909090", display: "flex", order: {xs:'2',  sm:'2', md:'1' ,lg:'1'}, justifyContent: {
                                xs: 'center', sm: 'flex-start', md: 'flex-start', lg: 'flex-start'
                            }
                        }} xs={12}  sm={6} md={6} lg={6}>

                            <Box > <FaFacebookF /> </Box>
                            <Box sx={{ marginLeft: "10px" }}> <FaTwitter /></Box>
                            <Box sx={{ marginLeft: "10px" }}> <TfiYoutube /></Box>
                            <Box sx={{ marginLeft: "10px" }}><FaInstagram /></Box>
                        </Grid>


                        <Grid sx={{ color: "#909090", display: "flex", order: {xs:'1', sm:'2', md:'2' ,lg:'2'},  justifyContent: { xs: 'center', sm: 'flex-end', md: 'flex-end', lg: 'flex-end' } }} xs={12} sm={6} md={6} lg={6} >
                            U.S.A.
                        </Grid>


                    </Grid>


                </Grid>
            </Container>
        </Box>
    )
}

export default Part12
