import { Grid, Box, Container } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'

function Part7() {
    return (
        <div>

            <Grid sx={{
                backgroundImage: `url('https://unitedthemes.com/wp-content/uploads/2020/01/buy-one-get-all-bg-1.jpg?id=13251')`,
                width: "100%",
                // height: "500px",
                backgroundSize: "contain",
                paddingTop: "50px",
                paddingBottom: "30px"
            }}>
                <Grid>
                    <Container>
                        <Box>
                            <Box component='h1' sx={{ marginTop: "20px", color: "white", textAlign: "center", alignItems: "center", display: "flex", justifyContent: "center",  fontSize: {xs:"30px", sm:"40px", md:"50px", lg:"50px"} }} >Brooklyn Theme Showcase: <br /> Explore Stunning Website <br /> Creations</Box>
                            <Box sx={{ width: "10%", backgroundColor: "#294DEA", height: "2px", margin: "auto" }} > </Box>
                            <Box component='p' sx={{ color: "#9C9B9E", fontSize: "larger", textAlign: "center", alignItems: "center", display: "flex", justifyContent: "center" }}>Explore a selection of outstanding websites crafted exclusively with Brooklyn and WordPress. <br /> These examples showcase the powerful capabilities and creative possibilities awaiting you. <br /> Get inspired and see what you can create!</Box>
                            <Box sx={{alignItems: "center", display: "flex", justifyContent: "center",borderRadius:"100px"}}>  <Button variant="contained" disableElevation>
                                Disable elevation
                            </Button></Box>
                        </Box>
                    </Container>
                </Grid>
            </Grid>

        </div>
    )
}

export default Part7
