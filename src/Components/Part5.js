import React from 'react'
import { Box, Container, Grid } from '@mui/material'

function Part5() {
    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={5} lg={4} sx={{ marginTop:{xs:"0px",md:"0px", lg:"110px"}}}>
                        <Box>
                            <Box>
                                <img width='100%' src="https://unitedthemes.com/wp-content/uploads/2018/05/brushes.png" alt="" />
                            </Box>
                            <Box component='h2'>Design Your Dream Website:</Box>
                            <Box component='h3'>Fully Customizable Homepage with Our Flexible Builder</Box>
                            <Box component='p'>Easily create beautiful websites with Brooklyn’s powerful Theme Option Panel. Tailor every detail of your homepage with our extensive and user-friendly settings. Perfect your site’s look effortlessly!</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} lg={8} >
                        <Box>
                            <img width='100%' src="https://unitedthemes.com/wp-content/uploads/2018/05/Drag-Drop-Page-Builder..png" alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Part5
