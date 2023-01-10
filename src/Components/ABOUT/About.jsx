import React from 'react';
import Styles from "./About.module.css";
import {Box, Flex, Heading, Image,Text} from "@chakra-ui/react";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className={Styles.About} id="about">
        <Box w="90%" margin={"auto"} h="auto" mt="60px" p="40px">
        <Fade left cascade>
            <Flex justifyContent="space-around" alignItems="center">
                <Box w="40%">
                <img height="400" width="400"  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif" alt="" />   
            
                </Box>

                <Box w="50%">
                    <Text textStyle={"AboutHead"}>ABOUT ME</Text>
                    <Text textStyle="AboutPara">A self-motivated, hard-working, and ambitious Web Developer with proficiency in MERN Stack. Developing websites using Javascript, React, Redux, and Chakra UI. Looking forward to working as an accountable and competent employee in an exciting Tech company.</Text>
            
                </Box>
            </Flex>
            </Fade>
        </Box>
    </div>
  )
}

export default About