import React from 'react';
import Styles from "./About.module.css";
import {Box, Flex,Image,Text,Circle} from "@chakra-ui/react";
import logo from "./profile.png";
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div className={Styles.About}>
        <Box w="100%" mt="70px" p={7} h="600px">
          <br/>
          <Flex justifyContent="space-evenly">
          <Box  w="50%" >
            <Text textStyle="AboutHead">Hii, I am Swati Mohanty,</Text>
            <TypeAnimation
                // Same String at the start will only be typed once, initially
              sequence={[
              'Full Stack Web Developer.',
              1000,
              'MERN Stack Web Developer.',
              1000,
              
              
              ]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "40px", textAlign:"initial" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />

            <Text textStyle="AboutPara">A self-motivated, hard-working, and ambitious Web Developer with proficiency in MERN Stack. Developing websites using Javascript, React, Redux, and Chakra UI. Looking forward to working as an accountable and competent employee in an exciting Tech company.</Text>
            <br/>
            <Flex justifyContent="initial">
            <a href='https://www.linkedin.com/in/swati-mohanty08/'><Image w="50px" borderRadius="10px" bg="#b107ff" src='https://iconsplace.com/wp-content/uploads/_icons/000000/256/png/linkedin-icon-256.png' alt='linked in logo' /></a>
            
            <a href='https://github.com/swati082001'><Image w="50px" ml="35px" borderRadius="10px" bg="#b107ff" src='https://iconsplace.com/wp-content/uploads/_icons/000000/256/png/github-icon-256.png' alt='linked in logo' /></a>

            </Flex>

          </Box>

          
          
          <Box width="30%" bgColor="white"  borderRadius="1000px 30px;" h="400px" mt="30px" >
            <Box width="70%" bgColor="#b107ff"  borderRadius="30px 1000px" h="400px" mt="30px">
              <br/>
              <br/>
              <br/>
            <Circle size='70%' bg="#0f0f0f" h="50%"  ml="100px" >
               <Image ml="10px" borderRadius="1100px 1000px"   w="100%" src={logo} alt=""/>
            </Circle>
            </Box>
          </Box>

          </Flex>

        </Box>
    </div>
  )
}

export default About