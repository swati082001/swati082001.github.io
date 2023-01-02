import React from 'react'
import {Box, Flex,ListItem,Text, UnorderedList} from "@chakra-ui/react";
import Styles from "./navbar.module.css";

const Navbar = () => {
    
  return (
    <div className={Styles.navbar}>
        <Box width="100%" h={{sm:"40px",md:"50px",lg:"70px"}} bgColor="#00D6BC"  >
            <Flex justifyContent="space-between">
                <Box p={{sm:2,md:2,lg:2}} w={{sm:"40%",md:"30%",lg:"20%"}}>
                    <Flex justifyContent="space-around">
                    <Text textStyle="Firsthead">Swati</Text> 
                    <Text textStyle="Secondhead">Mohanty</Text> 
                    </Flex>
                </Box>
                <Box p={5} w={{sm:"80%",md:"70%",lg:"60%"}} h={{sm:"60%",md:"70%",lg:"80%"}}>
                    <UnorderedList listStyleType="none">
                        <Flex justifyContent="space-around">
                        <ListItem textStyle="Navbar" _hover={{textDecoration:"underline"}}>ABOUT</ListItem>
                        <ListItem textStyle="Navbar" _hover={{textDecoration:"underline"}}>SKILLS</ListItem>
                        <ListItem textStyle="Navbar" _hover={{textDecoration:"underline"}}>PROJECTS</ListItem>
                        <ListItem textStyle="Navbar" _hover={{textDecoration:"underline"}}>CONTACT</ListItem>
                        <ListItem textStyle="Navbar" >RESUME</ListItem>
                        </Flex>
                    </UnorderedList>

                </Box>
            </Flex>
        </Box>
    </div>
  )
}

export default Navbar