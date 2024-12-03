import { Box, Button, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FotoCover from "../../assets/img/Cover.png"

const Cover = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 650px)").matches);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.matchMedia("(max-width: 650px)").matches);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickPlay = () => {
    setIsLoading(true); 
    setTimeout(() => {
      setIsLoading(false); 
      props.onClick(); 
    }, 2000); 
  };

  return (
    <>
    <Box
        animation={props.animation}
        height="100%"
        width="100%"
        flex={1}
        bgImage={FotoCover}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={8}
      >
        <Box
        width={isMobile?"100%":"37.1%"}
        height="100%"
        position="absolute"
        color="white"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="right"
        backgroundColor="rgba(0, 0, 0, 0.5)" 
        zIndex="1"
      />
        <Box
        width={isMobile?"100%":"37.1%"}
        height="100%"
        position="absolute"
        color="white"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(255, 255, 255, 0.1)" 
        zIndex="2"
      >
        <div style={{ display:"flex", height:"70%", justifyContent:"space-between", flexDirection:"column", alignItems:"center" }}>
          <div className='information_content' style={{ lineHeight:"24px", letterSpacing:"2px"}}>
            WEDDING ANNOUNCEMENT
          </div>
          <div style={{ display:"flex", height:"70%", flexDirection:"column", justifyContent:"flex-start", alignItems:"center" }}>
            <div className='name_content' style={{ fontSize:"36px", lineHeight:"43px", marginTop:"24px"}}>
              <Text>
                TIFFANY & JARED
              </Text>
            </div>
            <Text className="caption_content" fontSize="36px">#TImetoshaRE</Text>
            <Button
              isLoading={isLoading}
              className='btn_open'
              colorScheme="whiteAlpha"
              variant="outline"
              mt={4}
              style={{ backgroundColor:"white", color:"gray",  borderColor: "black", width:"40%", height:"35px", cursor:isLoading === false?"pointer":"not-allowed"}}
              onClick={handleClickPlay}
            >
              Open
            </Button>
          </div>
        </div>
      </Box>
      </Box>
    </>
  )
}

export default Cover
