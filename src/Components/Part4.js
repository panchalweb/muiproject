import { Box, Container, Grid } from '@mui/material'
import React from 'react'

function Part4() {
    return (
        <div>
         
                <Grid container sx={{ padding:{xs:"20px",md:"0px", lg:"60px"}, paddingTop:"0"  }}>
                    <Grid item xs={12} md={6} lg={7} sx={{ padding: { xs: "0px 15px",sm:"0px 30px" ,md: "0px 40px", lg: "0px 100px"},display:"flex", justifyContent:"space-evenly", alignItems:"center" }}  >
                        <Box >
                        <video className='sha' width="100%"  controls autoPlay loop >
                            <source  src="https://unitedthemes.com/wp-content/uploads/2020/03/footer-builder-brooklyn.mp4" type="video/mp4" />
                        </video>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5} sx={{paddingRight: { xs:"15px",md:"0px", lg:"50px"}, marginTop:"80px"}}  >
                        <Box>
                            <img width="75.9" height="132" src="https://unitedthemes.com/wp-content/uploads/2020/03/ballon.jpg" alt="" />
                        </Box>
                        <Box component='h1' sx={{fontFamily:"SF Pro Display Bold",fontWeight:"bolder",fontSize:"30px"}}>Advanced Footer Builder:</Box>
                        <Box component='h2' sx={{fontWeight:"500"}} >A Proven Feature of Our Brooklyn WordPress Theme</Box>
                        <Box component='p' sx={{fontSize:"20px"}}>Brooklyn offers flexible footer customization from day one. Choose from a simple WordPress default layout or design your own with up to four columns and unique Content Blocks. Tailor each page’s footer to suit your style effortlessly.</Box>
                    </Grid>
                </Grid>
      
        </div>
    )
}

export default Part4
