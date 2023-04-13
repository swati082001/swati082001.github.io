import React from 'react'
import Styles from "./Contact.module.css"
import {Box,Text,Image,Flex} from "@chakra-ui/react"

const Contact = () => {
  return (
    <div className={Styles.Contact} id="contact">
        <Box w="80%" margin={"auto"} p={7} h={{sm:"auto",md:"auto",lg:"auto"}} textAlign={{sm:"center",md:"center",lg:"initial"}}>
            <Text textStyle="AboutHead" mt={{base:"40px",sm:"40px",md:"40px",lg:"30px"}}>Contact Me</Text>
            <Text textAlign={{base:"center",sm:"center",md:"center",lg:"initial"}}>Intrested To Work Together?</Text>

           
            <Flex>

            <Box w="80%" margin={"auto"} p={5} mt={{base:"50px",sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px" display={"flex"} flexDirection={{base:"column",sm:"column", md:"column",lg:"row"}} justifyContent={"center"} alignItems={"center"}>

            <Box  w={{base:"100%",sm:"100%",md:"100%",lg:"100%"}} >
              <Image  borderRadius={"15px"} w={{base:"100%",sm:"100%",md:"100%",lg:"80%"}} src='https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif' alt=''/>
            </Box>

            <Box  w={{base:"100%",sm:"100%",md:"100%",lg:"60%"}}>

            <Text textStyle="AboutSubHead" mt={{sm:"40px",md:"40px",lg:"30px"}}>Contact Me</Text>
             <Text textAlign={{base:"center",sm:"center",md:"center",lg:"initial"}}>Contact Number - +91 8018531080</Text>
             <Text textAlign={{base:"center",sm:"center",md:"center",lg:"initial"}}>Email Id- swatisucharitamohanty1@gmail.com</Text>

             <Flex mt={6} justifyContent={{base:"space-around",sm:"space-around",md:"space-around",lg:"initial"}}>

             <a href='https://www.linkedin.com/in/swati-mohanty08/'><Image w={{base:"30px",sm:"50px",md:"50px",lg:"50px"}} borderRadius="10px" bg="#b107ff" src='https://iconsplace.com/wp-content/uploads/_icons/000000/256/png/linkedin-icon-256.png' alt='linked in logo' /></a>
            
            <a href='https://github.com/swati082001'><Image w={{base:"30px",sm:"50px",md:"50px",lg:"50px"}} ml="35px" borderRadius="10px" bg="#b107ff" src='https://iconsplace.com/wp-content/uploads/_icons/000000/256/png/github-icon-256.png' alt='linked in logo' /></a>
             </Flex>
            </Box>
            
            </Box>

           
            </Flex>

        
        </Box>

    </div>
  )
}

export default Contact