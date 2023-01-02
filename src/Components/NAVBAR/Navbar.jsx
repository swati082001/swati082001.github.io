import React from 'react'
import {Box, Button, Flex,ListItem,Text, UnorderedList} from "@chakra-ui/react";
import Styles from "./navbar.module.css";

const Navbar = () => {
    
  return (
    <div className={Styles.navbar}>
        <Box width="100%" h={{sm:"40px",md:"50px",lg:"70px"}} bgColor="#1a1a1a"  >
            <Flex justifyContent="space-between">
                <Box p={{sm:2,md:2,lg:5}} w={{sm:"40%",md:"30%",lg:"13%"}}>
                    <Flex justifyContent="space-around">
                    <Text textStyle="Firsthead">SWATI</Text> 
                    <Text textStyle="Secondhead">MOHANTY</Text> 
                    </Flex>
                </Box>
                <Box  w={{sm:"70%",md:"60%",lg:"50%"}} h={{sm:"50%",md:"60%",lg:"70%"}}>
                    <UnorderedList listStyleType="none">
                        <Flex justifyContent="space-around" alignItems={"center"}>
                        <ListItem textStyle="Navbar" p="21px" _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}}>ABOUT</ListItem>
                        <ListItem textStyle="Navbar" p="21px" _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}}>SKILLS</ListItem>
                        <ListItem textStyle="Navbar" p="21px" _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}}>PROJECTS</ListItem>
                        <ListItem textStyle="Navbar" p="21px" _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}}>CONTACT</ListItem>
                        <ListItem textStyle="Navbar" p="21px" _hover={{backgroundColor: "#b107ff",borderRadius:"10px",color:"white"}}>RESUME</ListItem>
                        </Flex>
                    </UnorderedList>

                </Box>
            </Flex>
        </Box>
    </div>
  )
}

export default Navbar