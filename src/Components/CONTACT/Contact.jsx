import React from 'react'
import Styles from "./Contact.module.css"
import {Box,Text,Image,Flex} from "@chakra-ui/react"

const Contact = () => {
  return (
    <div className={Styles.Contact} id="contact">
        <Box w="80%" margin={"auto"} p={7} h={{sm:"auto",md:"auto",lg:"auto"}} textAlign={{sm:"center",md:"center",lg:"initial"}}>
            <Text textStyle="AboutHead" mt={{sm:"40px",md:"40px",lg:"30px"}}>Contact Me</Text>
            <Text>Intrested To Work Together?</Text>

           
            <Flex>

            <Box w="80%" margin={"auto"} p={5} mt={{sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px" >
            <Text textStyle="AboutSubHead" mt={{sm:"40px",md:"40px",lg:"30px"}}>Contact Me</Text>
             <Text>Contact Number - +91 8018531080</Text>
             <Text>Email Id- swatisucharitamohanty1@gmail.com</Text>

             <Flex mt={6} justifyContent={{sm:"space-around",md:"space-around",lg:"initial"}}>

             <a href='https://www.linkedin.com/in/swati-mohanty08/'><Image  w="50px" borderRadius="10px" bg="#b107ff" src='https://iconsplace.com/wp-content/uploads/_icons/000000/256/png/linkedin-icon-256.png' alt='linked in logo' /></a>
            
            <a href='https://github.com/swati082001'><Image w="50px" ml="35px" borderRadius="10px" bg="#b107ff" src='https://iconsplace.com/wp-content/uploads/_icons/000000/256/png/github-icon-256.png' alt='linked in logo' /></a>
             </Flex>
            
            </Box>
            

            
            </Flex>

        
        </Box>

    </div>
  )
}

export default Contact