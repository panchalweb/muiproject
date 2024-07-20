import React from 'react'
import Card from './Card'
import { BsMouse2 } from "react-icons/bs";
import { Grid, Container, Box } from '@mui/material';
import { BsBoxArrowInDown } from "react-icons/bs";
import { GrCheckboxSelected } from "react-icons/gr";
import { BsBox2 } from "react-icons/bs";
import { RxLightningBolt } from "react-icons/rx";
import { PiCodesandboxLogoLight } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { SlEarphonesAlt } from "react-icons/sl";

function Part9() {
  return (
    <div>
      <Container>
        <Grid container sx={{ marginTop: "100px", display: "flex", flexWrap: "wrap" }}>
          <Grid xs={12} md={6} lg={4}>
            <Card name='Drag & Drop Page Builder' desc='With the Drag & Drop Page Builder you can easily place Sections, Rows and Columns. 65 design elements make your work easier by allowing you to drag and drop them into the desired area.' icon={<BsMouse2 />} />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card name='One Click Website Installer' desc='With our in-house coded website installer you are able to install any Brooklyn website with just one mouse click.' icon={<BsBoxArrowInDown />} />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card name='Hero Builder' desc='The landing of every website. No matter if you need a predefined hero or you like to build one by your own (Content Block). There is the right style for every purpose.' icon={<GrCheckboxSelected  />} />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card name='Footer Builder' desc='Create as many individual footers as you like with our Footer Builder (Content Block) and place your beautiful footer on any page.' icon={<BsBox2  />} />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card name='Fast Website Performance' desc='Brooklyn is designed for speed. Only what is really needed is loaded. With our predefined cache settings you will easily hit 90% page score and above.' icon={<RxLightningBolt  fontWeight={100}/>} />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card name='No Coding Knowledge Required' desc='You don’t need to know a single line of code when creating websites with Brooklyn. Every aspect can be customized through the given options.' icon={<PiCodesandboxLogoLight  />} />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card name='One Page & Multi Page Support' desc='No matter if you like to run your website as a one page or a multisite, there are no limitations for your desired website concept.' icon={<TfiWorld   />} />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card name='Build by Experts' desc='Brooklyn was created by WordPress heroes. We have been in business for 10 years, constantly setting new design trends in WordPress industry.' icon={<HiOutlineLightBulb   />} />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card name='Fast & Friendly Support' desc='With the Drag & Drop Page Builder you can easily place Sections, Rows and Columns. 65 design elements make your work easier by allowing you to drag and drop them into the desired area.' icon={<SlEarphonesAlt   />} />
          </Grid>
        </Grid>
      </Container>

    </div>

  )
}

export default Part9
