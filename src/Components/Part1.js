import { Padding } from '@mui/icons-material'
import { Box, Button, Typography, Container } from '@mui/material'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";



function Part1() {
    return (
        <>
            <Box sx={{
                backgroundImage: `url('https://unitedthemes.com/wp-content/uploads/2019/10/brooklyn-banner-5.jpg?id=12913')`,
                backgroundSize: 'contain',
                padding: '20px',
                backgroundBlendMode: 'multiply',
                marginTop:"50px"
            }}>

<div>nikunj</div>
                <Box
                    sx={{

                    }} >
                    <Box sx={{}}
                    >
                        <Typography variant='h4' sx={{ justifyContent: "center", display: "flex", marginLeft: "20px" }}>
                            50,000+ Trust Brooklyn
                        </Typography>
                        <Typography variant='h2' sx={{ justifyContent: "center", display: "flex", margin: "auto", width: "60%" }}>
                            Build Your Professional
                        </Typography>
                        <Typography variant='h2' sx={{ justifyContent: "center", display: "flex", margin: "auto", width: "60%", marginTop: "-10px" }}>
                            Website Easily Today
                        </Typography>
                        <Typography sx={{ justifyContent: "center", display: "flex", margin: "auto", width: "60%", textWrap: "pretty", marginTop: "15px" }}>
                            Discover Brooklyn, the ultimate WordPress theme for effortless website creation. Perfect for both beginners and professionals, Brooklyn offers a user-friendly experience with over 50 detailed prebuilt websites and 256 versatile templates. Whether you’re aiming for a modern, professional look or something more creative, Brooklyn’s highly customizable design makes it easy.
                        </Typography>
                        <Typography sx={{ justifyContent: "center", display: "flex", marginTop: "30px" }}>
                            <Button variant="contained" >
                                Get Started <FaLongArrowAltRight style={{ fontSize: '24px', marginLeft: '10px' }} /> </Button></Typography>
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default Part1
