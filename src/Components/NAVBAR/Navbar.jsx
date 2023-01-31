import React from 'react'
import {Box, Flex,ListItem,Text, UnorderedList,useDisclosure,Drawer, DrawerBody, DrawerFooter, DrawerHeader,
 DrawerOverlay, DrawerContent,Button,Image, DrawerCloseButton,IconButton, VStack} from "@chakra-ui/react";
import Styles from "./navbar.module.css";

import logo from "./new.png"
import {Link} from "react-scroll"
import {ChevronDownIcon,CloseIcon,HamburgerIcon} from '@chakra-ui/icons';
import Swati_Mohanty_Resume from "./Swati_Mohanty_Resume.pdf"


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
    
  return (
    <div className={Styles.navbar}>
        <Box width="100%" h={{sm:"40px",md:"50px",lg:"70px"}} bgColor="#1a1a1a" p={3} >
            <Flex justifyContent="space-between">
                {/* logo */}
                <Box p={{sm:1,md:1,lg:2}} w={{sm:"25%",md:"25%",lg:"13%"}}>
                    <Flex justifyContent="space-around">
                    <Text textStyle="Firsthead">SWATI</Text> 
                    <Text textStyle="Secondhead">MOHANTY</Text> 
                    </Flex>
                </Box>
             
               {/* navbar menu */}
                <Box   display={{ base: "none", md: "flex",lg:"flex" }} justifyContent={{base:"none",sm:"none",md:"space-around",lg:"space-between"}} ml={{lg:"40%",sm:"none",md:"5%"}} h={{sm:"50%",md:"60%",lg:"70%"}}>
                    <UnorderedList listStyleType="none">
                        <Flex justifyContent="space-around" alignItems={"center"}>

                        <Link to="home" activeClass="active" spy={true} smooth={true} offset={-100} duration={200} >
                            <ListItem textStyle="Navbar" p={{sm:"8px",md:"8px",lg:"12px"}} _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}}>HOME</ListItem>
                        </Link>
                        
                        <Link to="about" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >
                            <ListItem textStyle="Navbar" p={{sm:"8px",md:"8px",lg:"12px"}} _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}}>ABOUT</ListItem>
                        </Link>

                        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} >
                            <ListItem textStyle="Navbar" p={{sm:"8px",md:"8px",lg:"12px"}} _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}}>PROJECTS</ListItem>
                        </Link>

                        <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} >
                            <ListItem textStyle="Navbar" p={{sm:"8px",md:"8px",lg:"12px"}} _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}}>SKILLS</ListItem>
                        </Link>

                        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} >
                            <ListItem textStyle="Navbar" p={{sm:"8px",md:"8px",lg:"12px"}} _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}}>CONTACTS</ListItem>
                        </Link>

                        <a href={Swati_Mohanty_Resume} download="Swati_Mohanty_Resume"><ListItem textStyle="Navbar" p={{sm:"8px",md:"8px",lg:"12px"}} _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}}><ChevronDownIcon/>RESUME</ListItem></a>
                        
                        </Flex>
                    </UnorderedList>

                </Box>
                <Box >
                
                {/* hamburger for small screen */}
                <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Navbar"} display={{ md: "none" }}
              backgroundColor="#1a1a1a" color="white" fontSize={{ base: "20px", sm: "30px" }} onClick={isOpen ? onClose : onOpen}
              mt="-4"/>
                <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
                    <DrawerOverlay />
                        <DrawerContent bgColor={"#1a1a1a"}>
                         <DrawerCloseButton />
         

                    <DrawerBody color={"white"} mt="50px">
                    <VStack spacing={10}>
             
                    <Link to='home' spy={true} smooth={true} offset={-120} duration={500}>
                    <Button bgColor={"#1a1a1a"} _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}} w={"100%"}>HOME</Button>
                    </Link>
             
                    <Link to='about' spy={true} smooth={true} offset={-120} duration={500}>
                    <Button bgColor={"#1a1a1a"} _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}} w={"100%"}>ABOUT</Button>
                    </Link>

                    <Link to='projects' spy={true} smooth={true} offset={-120} duration={500}>
                    <Button bgColor={"#1a1a1a"} _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}} w={"100%"}>PROJECTS</Button>
                    </Link>

                    <Link to="skills" spy={true} smooth={true} offset={-120} duration={500}>
                    <Button bgColor={"#1a1a1a"} _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}} w={"100%"}>SKILLS</Button>
                    </Link>

                    <Link to="contact" spy={true} smooth={true} offset={-120} duration={500}>
                    <Button bgColor={"#1a1a1a"} _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}} w={"100%"}>CONTACTS</Button>
                    </Link>
 
                    <a href={Swati_Mohanty_Resume} download="Swati_Mohanty_Resume">
                    <Button bgColor={"#1a1a1a"} _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}} w={"100%"}>RESUME</Button>
                    </a>

                </VStack>
            </DrawerBody>

            <DrawerFooter>
            <Button  bgColor={"#1a1a1a"} color="white" onClick={onClose} _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}}>CLOSE</Button>
            
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </Box>
        </Flex>
    </Box>
        
    </div>
  )
}

export default Navbar