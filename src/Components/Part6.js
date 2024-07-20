import { Box,Container,Grid } from '@mui/material'
import React from 'react'

function Part6() {
  return (
    <div>
         
    <Grid container sx={{ padding:{xs:"10px",md:"0px", lg:"60px"}, paddingTop:"0"  }}>
        <Grid item xs={12} md={6} lg={7} sx={{ padding: { xs: "0px 15px",sm:"0px 30px" ,md: "0px 40px", lg: "0px 100px"},display:"flex", justifyContent:"space-evenly", alignItems:"center" }}  >
            <Box >
            <video className='sha' width="100%"  controls autoPlay loop >
                <source  src="https://unitedthemes.com/wp-content/uploads/2020/10/promo-video-small.mp4" type="video/mp4" />
            </video>
            </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={5} sx={{padding: { xs:"15px",md:"60px", lg:"20px"}, marginTop:"60px"}}  >
            <Box>
                <img width="125" height="75" src="https://unitedthemes.com/wp-content/uploads/2018/05/vc.jpg" alt="" />
            </Box>
            <Box component='h1' sx={{fontFamily:"SF Pro Display Bold",fontWeight:"bolder",fontSize:"30px"}}>Instant Website Setup:</Box>
            <Box component='h2' sx={{fontWeight:"500"}} >Launch Your Site with One Click in Minutes!</Box>
            <Box component='p' sx={{fontSize:"20px"}}>Developed by WordPress experts, Brooklyn offers easy, one-click setup. Select your ideal homepage and launch your website in minutes!</Box>
        </Grid>
    </Grid>

</div>
  )
}

export default Part6
