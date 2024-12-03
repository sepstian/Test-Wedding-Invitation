import React, { useEffect } from "react";
import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { navbar_false } from "../../redux/slice/navbarSlice";
import { motion } from "framer-motion";

const Navbar = (props) => {
    const dispatch = useDispatch()
    const [isMobile, setIsMobile] = React.useState(window.matchMedia("(max-width: 650px)").matches);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.matchMedia("(max-width: 650px)").matches);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.5 } },
    };

    const boxVariants = {
        hidden: { x: "100%" },
        visible: { x: 0, transition: { duration: 0.4 } },
        exit: { x: "100%", transition: { duration: 0.4 } },
    };

  return (
    <motion.div
    initial="hidden"
    animate={props.isOpen ? "visible" : "exit"}
    exit="exit"
    variants={overlayVariants}
    style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        zIndex: "6",
        display: props.isOpen === false ? "none" : "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        overflow: "hidden",
    }}
    onClick={() => dispatch(navbar_false())}
    >
        <motion.div
            initial="hidden"
            animate={props.isOpen ? "visible" : "exit"}
            exit="exit"
            variants={boxVariants}
            style={{
                width: isMobile?"80%": "37.1%",
                height: "100vh",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "7",
                overflow: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
        >
        <div style={{ display:"flex", flexDirection:"column", width:"100%", height:"90%", alignItems:"flex-end", }}>
            <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", gap:"20px", alignItems:"flex-end", padding:"5px 35px"}}>
                <Text style={{ color:"black" }} className="caption_content" fontSize="36px">#TImetoshaRE</Text>

                <VStack spacing={4} w="100%">
                {["BRIDE & GROOM", "LIVE STREAMING", "WEDDING GIFT"].map((item, index) => (
                    <Flex
                    key={index}
                    w="100%"
                    justifyContent="center"
                    alignItems="flex-end"
                    flexDirection="column"
                    >
                    <Link
                        className="nav_link"
                        fontSize="14px"
                        letterSpacing="3px"
                        lineHeight="31px"
                        color="black"
                        textTransform="uppercase"
                        textAlign="center"
                        _hover={{ textDecoration: "none", color: "gray.500" }}
                    >
                        {item}
                    </Link>
                    <Box
                        mt={2}
                        w="100%"
                        h="1px"
                        bg="black"
                        _hover={{ bg: "gray.500" }}
                    ></Box>
                    </Flex>
                ))}
                </VStack>
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"100%", height:"50%", justifyContent:"flex-end", alignItems:"flex-end", padding:"5px 35px"}}>
                <Text className="nav_link" fontSize="12px" color="gray.500" mt={8} textAlign="center">
                Created with Love by Invitato <br />
                2024 Tiffany & Jared. All Rights Reserved
                </Text>
            </div>
        </div>
        </motion.div>
      </motion.div>
  );
};

export default Navbar;
