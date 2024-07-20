import { Box,Container,Grid } from '@mui/material'
import React from 'react'


function Part8() {
    return (
        <div>
            <Grid>
                <Container>
                    <Box>
                        <Box component='h1' sx={{ marginTop: "80px", textAlign: "center", alignItems: "center", display: "flex", justifyContent: "center", fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "50px" } }} >Diverse Header and Menu Styles: <br /> Customize Your Site's Look</Box>
                        <Box sx={{ width: "10%", backgroundColor: "#294DEA", height: "2px", margin: "auto" }} > </Box>
                        <Box component='p' sx={{ marginTop:"35px", color: "black", fontSize: "larger", textAlign: "center", alignItems: "center", display: "flex", justifyContent: "center" }}>Effortlessly enhance your website with Brooklyn’s 12 effective header layouts. Customize your top <br /> header, choose from various modules, and explore unlimited colors to establish your brand <br /> and ensure a seamless user experience.</Box>
                        {/* <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", borderRadius: "100px" }}>  <Button variant="contained" disableElevation>
                            Disable elevation
                        </Button></Box> */}
                    </Box>
                </Container>
            </Grid>
        </div >
    )
}

export default Part8
