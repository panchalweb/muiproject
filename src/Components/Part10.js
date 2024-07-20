import { Box, Container } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
</style>

function Part10() {
  return (
    <div>
      <Box sx={{
        marginTop: "70px",
        backgroundImage: `url('https://unitedthemes.com/wp-content/uploads/2019/01/woo-bg.jpg?id=11426')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "100%",
        paddingTop: "100px ",
        backgroundPosition: " center center"

        //  marginLeft:"-120px",
        //  marginRight:"-150px"

      }}>
        <Container>
          <Box>
            <Box sx={{ margin: "auto", textAlign: "center" }}>
              <Box> <img src="https://unitedthemes.com/wp-content/uploads/2019/01/woo-100.png" alt="" /> </Box>
              <Box component='h1' sx={{ fontSize: "50px", fontFamily: "Raleway" }} > Start Selling Today <br /> With Brooklyn</Box>
              <Box sx={{ backgroundColor: "#9B5C8F", width: "10%", height: "2px", margin: "auto" }}></Box>
              <Box component='p' sx={{ fontSize: "22px", color: "#5C5C5C" }} >Sell anything from monthly grocery boxes, <br /> specialty tea, and software – online.</Box>
              <Box   > <Button sx={{ padding: "10px", borderRadius: "22px", backgroundColor: "#9B5C8F" }} variant="contained" disableElevation>Get Started Now</Button></Box>
              <Box sx={{ marginTop: "50px" }}> <img width="100%" src="https://unitedthemes.com/wp-content/uploads/2019/01/woo-promo-flower-shop-2.png" alt="" /> </Box>
            </Box>
          </Box>
        </Container>

      </Box>
    </div>
  )
}

export default Part10
