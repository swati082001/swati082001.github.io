import React from 'react'
import {Box, Flex,ListItem,Text, UnorderedList} from "@chakra-ui/react";
import Styles from "./navbar.module.css";
//import About from '../ABOUT/About';
import {Link} from "react-scroll"
import {ChevronDownIcon} from '@chakra-ui/icons';
import Swati_Mohanty_Resume from "./Swati_Mohanty_Resume.pdf"


const Navbar = () => {
    
  return (
    <div className={Styles.navbar}>
        <Box width="100%" h={{sm:"40px",md:"50px",lg:"70px"}} bgColor="#1a1a1a" p={3} >
            <Flex justifyContent="space-between">
                <Box p={{sm:1,md:1,lg:2}} w={{sm:"25%",md:"25%",lg:"13%"}}>
                    <Flex justifyContent="space-around">
                    <Text textStyle="Firsthead">SWATI</Text> 
                    <Text textStyle="Secondhead">MOHANTY</Text> 
                    </Flex>
                </Box>
                <Box  w={{sm:"70%",md:"70%",lg:"50%"}} h={{sm:"50%",md:"60%",lg:"70%"}}>
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
            </Flex>
        </Box>
    </div>
  )
}

export default Navbar