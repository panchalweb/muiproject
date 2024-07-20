import { Box, Container, Grid } from '@mui/material'
import React from 'react'

function Part3() {
    return (
        <div>
            <Container >
            <Grid container spacing={5} sx={{ marginTop: "50px" }}>
                <Grid item xs={12} md={6} lg={5}>
                    <Box sx={{  padding: { xs: "0px", lg: "0px" }, marginTop: "20px" }}>

                        <Box>
                            <img width='60%' src="https://unitedthemes.com/wp-content/uploads/2018/05/clip.png" alt="" />
                        </Box>
                        <Box component='h2'sx={{fontFamily:"SF Pro Display Bold",fontWeight:"bolder",fontSize:"30px"}} >
                            Craft Stunning Websites with Pixel-Perfect WordPress Design
                        </Box>
                        <Box component='h3' sx={{fontWeight:"500"}}>
                            Explore 60+ Versatile Elements!
                        </Box>
                        <Box component='p'>
                            Unleash creativity with our easy-to-use WordPress page builder. Craft stunning websites effortlessly. Bring your dream site to life today!
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} lg={7} >
                    <img width="100%" src="https://unitedthemes.com/wp-content/uploads/2019/01/Drag-Drop-Page-Builder-700x460.jpg" alt="" />
                </Grid>

            </Grid>
           
            </Container>
        </div>
    )
}

export default Part3
