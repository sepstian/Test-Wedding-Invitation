import React, { useEffect } from 'react'
import { Box, Heading, Text, VStack, Button, Image } from "@chakra-ui/react";
import Foto from "../../assets/img/LandingPage.png"
import "./Sidebar.css"

const Sidebar = (props) => {
  const [isMobile, setIsMobile] = React.useState(window.matchMedia("(max-width: 650px)").matches);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.matchMedia("(max-width: 650px)").matches);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box style={{ width:"100vw", display:"flex" }} height="100vh" position="relative">
      <Box
        display={isMobile? 'none':''}
        bgImage={Foto} 
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        position="relative"
        color="white"
        width="63.5%"
        height="100%"
      >
        <Box
        height="100%"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        color="white"
        display="flex"
        flexDirection="column"
        justifyContent="start"
        backgroundColor="rgba(0, 0, 0, 0.5)" 
        zIndex="1"
      />
        <Box
        width="99%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        color="white"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="left"
        p={10}
        backgroundColor="rgba(255, 255, 255, 0.1)" 
        zIndex="2"
      >
        <div>
          <div className='information' style={{ lineHeight:"24px", letterSpacing:"2px"}}>
            WEDDING ANNOUNCEMENT
          </div>
          <div className='name' style={{ fontSize:"72px", lineHeight:"72px", marginTop:"24px", letterSpacing:"4px"}}>
            <Text width="70%">
              TIFFANY & JARED
            </Text>
          </div>
          <Text className="caption" marginTop="20px">
            "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat
            diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
            mencintaimu dengan sederhana; dengan isyarat yang tak sempat
            disampaikan awan kepada hujan yang menjadikannya tiada."
          </Text>
          <Text className="caption" textAlign="left" >
            — Sapardi Djoko Damono
          </Text>  
        </div>
      </Box>
      </Box>
      <div style={{ width:isMobile?"100%":"37.5%", overflow:"scroll", overflowX:"hidden", zIndex:"5"}}>
        {props.children}
      </div>
    </Box>
  );
};


export default Sidebar
