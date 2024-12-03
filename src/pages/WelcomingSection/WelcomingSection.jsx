import { Box,  IconButton, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import Foto1 from "../../assets/img/welcoming/Img1.png"
import Foto2 from "../../assets/img/welcoming/Img5.png"
import Foto3 from "../../assets/img/welcoming/Img4.png"
import Foto4 from "../../assets/img/welcoming/Img3.png"
import Foto5 from "../../assets/img/welcoming/Img2.png"
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Footer from '../../components/Footer/Footer';

const WelcomingSection = (props) => {
  const images = [Foto1, Foto2, Foto3, Foto4, Foto5]; 
  const imagesCarrousel = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto1, Foto2, Foto3, Foto4, Foto5, Foto1, Foto2, Foto3, Foto4, Foto5, Foto1, Foto2, Foto3, Foto4, Foto5, Foto1, Foto2, Foto3, Foto4, Foto5, Foto1, Foto2, Foto3, Foto4, Foto5, Foto3,]; 
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [bgImage, setBgImage] = useState(images[0]); 
  const [zoom, setZoom] = useState(1);
  const [animation, setAnimation] = useState(props.animation || '');
  const [imageIndex, setImageIndex] = useState(1);

  const [currentIndex, setCurrentIndex] = useState(1); 
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 650px)").matches);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.matchMedia("(max-width: 650px)").matches);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedImages = [
    imagesCarrousel[imagesCarrousel.length - 1],
    ...imagesCarrousel,                      
    imagesCarrousel[0],                       
  ];

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setCurrentIndex((prevIndex) => {
      const maxIndex = imagesCarrousel.length - 1;
      if (prevIndex % 2 === 1) {
        return prevIndex + 2 > maxIndex ? 1 : prevIndex + 2; 
      } else {
        return prevIndex + 1 > maxIndex ? 1 : prevIndex + 1;
      }
    });
  };
  
  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      if (prevIndex % 2 === 1) {
        return Math.max(0, prevIndex - 2);
      }else{
        return Math.max(0, prevIndex - 1);
      }
    });
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(imagesCarrousel.length); 
      }, 800);
    } else if (currentIndex === imagesCarrousel.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); 
      }, 800); 
    } else {
      setTimeout(() => setIsTransitioning(false), 800); 
    }
  }, [currentIndex, imagesCarrousel.length]);
  
  const scrollToContent = () => {
    document.getElementById("contentSection").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => { 
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setBgImage(images[imageIndex]);
        setZoom(1.01);
        setAnimation('fadeIn 3s ease-out');  
      }, 2000);  
    }, 3000); 

    return () => clearInterval(interval);
  }, [imageIndex, images]);

  return (
    <>
      <Box
        animation={animation}
        height="full"
        width="100%"
        flex={1}
        bgImage={bgImage}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        p={8}
        style={{
          transition: 'all 2s ease-out',
          transform: `scale(${zoom})`,
        }}
      >
        <Box
          width="full"
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
          width="full"
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
          <div style={{ display:"flex", height:"70%", justifyContent:"space-between", flexDirection:"column", alignItems:"center"}}>
            <div className='information_content' style={{ lineHeight:"24px", letterSpacing:"2px" }}>
              WEDDING ANNOUNCEMENT
            </div>
            <div style={{ display:"flex", height:"70%", flexDirection:"column", justifyContent:"flex-start", alignItems:"center" }}>
              <div className='name_content' style={{ fontSize:"36px", lineHeight:"43px", marginTop:"24px" }}>
                <Text>
                  TIFFANY & JARED
                </Text>
              </div>
              <Text className="caption_content" fontSize="36px">#TImetoshaRE</Text>
            </div>
          </div>
          <div style={{ display:"flex", width:"85%", justifyContent:"flex-end", alignItems:"flex-end", position:"relative", top:"40px"}}>
            <div
                style={{ display:"flex", color:"white", fontSize:"14px", fontWeight:"700", alignItems:"center", gap:"5px", cursor:"pointer"}}
                onClick={scrollToContent}
                mt={6}
                borderColor="white"
            >
                <Text className='txt_scroll'>SCROLL TO BEGIN</Text>
                <FaChevronDown />
            </div>
          </div>
        </Box>
      </Box>
      <div style={{ height:"50vh", width:"auto", display:"flex", justifyContent:"center", padding:"50px"}} id="contentSection" bg="white">
        <VStack height="100%" spacing={4} textAlign="center">
          <Text className='information_welcoming' fontSize="12px" textTransform="uppercase" letterSpacing="2px" lineHeight="18px">
            Dear Mr-Mrs-Ms, <br /> Family & Friends
          </Text>
          <Text className='name_welcoming' lineHeight="38px" fontSize="3xl" fontWeight="bold">
            Welcome to <br />
            Tiffany & Jared’s <br />
            Wedding Website
          </Text>
          <Text style={{ width:"90%" }} letterSpacing="0" className='caption_welcoming' fontSize="18px" fontStyle="italic" color="black">
            Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
          </Text>
        </VStack>
      </div>
      <div style={{ height:isMobile?"70vh":"90vh", display:"flex", justifyContent:"center", flexDirection:"column", alignItems: "center", gap:"20px"}} id="contentSection" bg="white">
        <div className="carrousel-container">
          <div className="carrousel">
            <div
              className="carrousel-images"
              style={{
                transform:`translateX(-${currentIndex * 25 }%)`,
                transition: isTransitioning ? "transform 1s ease-in-out" : "none",
              }}
            >
              {extendedImages.map((image, idx) => {
                const middleIndex = Math.ceil(currentIndex / 2);
                const isActive = idx === middleIndex;
                return(
                  <div key={idx} className={`carrousel-image ${isActive ? 'active' : ''}`}>
                    <img src={image} alt={`Slide ${idx}`} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
          <Box gap="5px" display="flex" justifyContent="center" mt={4}>
            <IconButton
              icon={<ArrowBackIcon />}
              onClick={handlePrev}
              aria-label="Previous"
              outlineColor="black"
              mx={2}
              zIndex={2}
              backgroundColor="white"
              color="black"
              _hover={{ backgroundColor: "gray.200" }}
            />
            <IconButton
              icon={<ArrowForwardIcon />}
              onClick={handleNext}
              aria-label="Next"
              outlineColor="black"
              mx={2}
              zIndex={2}
              backgroundColor="white"
              color="black"
              _hover={{ backgroundColor: "gray.200" }}
            />
          </Box>
      </div>
      <div style={{ height:"25vh" }}>
        <Footer/>
      </div>
    </>
  );
};

export default WelcomingSection;
