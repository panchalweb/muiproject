import { Box, Container } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { LiaStumbleuponCircle } from "react-icons/lia";



function Part11() {
    return (
        <div>
            <Box sx={{
                backgroundImage: `url('https://unitedthemes.com/wp-content/uploads/2017/11/hero-subpages-alternative4.jpg?id=2967')`,
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'multiply',
                backgroundSize: 'cover',
                backgroundPosition:"center 80%",
                backgroundColor: "rgba(0,0,0,0.7)",
                paddingTop:"50px",
                paddingBottom:"100px"
            }}>
                <Container>
                    <Box sx={{textAlign:"center"}}>
                        <Box component='h2' sx={{ fontSize: "50px", color: "#fff" }}>Unlock 50+ Premium Demo <br /> Websites with One Incredible Offer!</Box>
                        <Box sx={{ backgroundColor: "#FFBF00", width: "10%", height: "2px", margin: "auto" }}></Box>
                        <Box sx={{ color: "#878B8E", marginTop:"30px" }}>Enjoy Free Add-ons, Ongoing Updates, and a Wealth of Templates – All Included!</Box>
                        <Box sx={{marginTop:"30px"}}><Button sx={{ padding: "5px 15px", borderRadius: "20px", backgroundColor: "#294DEA" }} variant="contained" disableElevation>Start Now</Button></Box>
                        <Box component='p' sx={{color:"#fff"}}>or Get Regular License</Box>
                        <Box sx={{color:"#878B8E", display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Box component='h5' sx={{color:"#878B8E"}}>SHARE:</Box>
                            <Box sx={{marginLeft:"13px"}}><FaFacebookF /></Box>
                            <Box sx={{marginLeft:"13px"}}><FaTwitter /></Box>
                            <Box sx={{marginLeft:"13px"}}><FaLinkedinIn /></Box>
                            <Box sx={{marginLeft:"13px"}}><RiMoneyPoundCircleFill /></Box>
                            <Box sx={{marginLeft:"13px"}}><LiaStumbleuponCircle /></Box>
                        </Box>
                    </Box>

                </Container>
            </Box>
        </div>
    )
}

export default Part11
