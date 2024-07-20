import { Padding } from '@mui/icons-material'
import { Box, Button, Typography, Container } from '@mui/material'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";



function Part1() {
    return (
        <>
            <Box sx={{
                padding: '20px',
                backgroundSize: 'contain',
                backgroundImage: `url('https://unitedthemes.com/wp-content/uploads/2019/10/brooklyn-banner-5.jpg?id=12913')`,
                backgroundRepeat:'no-repeat',
                backgroundBlendMode: 'multiply',
                // backgroundColor:"rgba(0,0,0,0.5)",
                marginTop:"50px",
             
            }}>


                <Box>
                    <Box sx={{}}
                    >
                        <Box component='h2' sx={{   justifyContent: "center", display: "flex", margin: "auto",marginBottom:"5px" ,width:'50%' }}>
                            50,000+ Trust Brooklyn
                        </Box>
                        <Box component='h1' sx={{  fontSize:{ xs:"30px" , sm:"40px", md:"52px" , lg:"72px"} , justifyContent: "center", display: "flex", margin: "auto", width: "60%" }}>
                            Build Your Professional
                        </Box>
                        <Box component='h1' sx={{ fontSize:{ xs:"29px" , sm:"40px" , md:"50px" , lg:"66px"} , justifyContent: "center", display: "flex", margin: "auto", width: "60%", marginTop: "0px" }}>
                            Website Easily Today
                        </Box>
                        <Box sx={{ justifyContent: "center", display: "flex", margin: "auto", width: "60%", textWrap: "pretty", marginTop: "15px" }}>
                            Discover Brooklyn, the ultimate WordPress theme for effortless website creation. Perfect for both beginners and professionals, Brooklyn offers a user-friendly experience with over 50 detailed prebuilt websites and 256 versatile templates. Whether you’re aiming for a modern, professional look or something more creative, Brooklyn’s highly customizable design makes it easy.
                        </Box>
                        <Box sx={{ justifyContent: "center", display: "flex", marginTop: "30px" }}>
                            <Button variant="contained" >
                                Get Started <FaLongArrowAltRight style={{ fontSize: '24px', marginLeft: '10px' }} /> </Button></Box>
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default Part1
