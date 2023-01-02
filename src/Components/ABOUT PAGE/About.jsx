import React from 'react';
import Styles from "./About.module.css";
import {Box, Flex,Image,Text} from "@chakra-ui/react";
import logo from "./profile.png";
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className={Styles.About}>
        <Box w="100%" mt="70px" p={7} h="600px">
          <br/>
          <Flex justifyContent="space-evenly">
          <Box  w="50%" >
            <Text color="#00E0C6">Hii,I Am Swati Sucharita Mohanty.</Text>

          </Box>
          
          <Box width="25%" bgColor="#00a896" borderRadius="700px" h="300px" mt="30px" >
            <Box width="100%" bgColor="#15616d" borderRadius="700px" h="300px" mt="60px" ml="20px">
              
            </Box>
            <div >
           <motion.div
          className="box"
          animate={ 160 }
          transition={{ type: "spring" }}
             />
             <Image ml="23px" p={1} borderRadius="122px"  w="90%" src={logo} alt=""/>
          </div>

          </Box>

          </Flex>

        </Box>
    </div>
  )
}

export default About