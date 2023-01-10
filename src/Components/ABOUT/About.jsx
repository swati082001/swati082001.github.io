import React from 'react';
import Styles from "./About.module.css";
import {Box, Flex,Text} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className={Styles.About} id="about">
        <Box w="90%" margin={"auto"} h="auto" mt="60px" p="40px">
        <Fade direction='left' cascade>
            <Flex direction={{sm:"column",md:"column",lg:"row"}} justifyContent="space-around" alignItems="center">
                <Box w={{sm:"80%",md:"80%",lg:"40%"}}>
                <img height={{sm:"600",md:"500",lg:"400"}} width={{sm:"600",md:"500",lg:"400"}}src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif" alt="" />   
            
                </Box>

                <Box w={{sm:"80%",md:"80%",lg:"50%"}}>
                    <Text textStyle={"AboutHead"}>ABOUT ME</Text>
                    <Text textStyle="AboutPara">A self-motivated, hard-working, and ambitious Web Developer with proficiency in MERN Stack. Developing websites using Javascript, React, Redux, and Chakra UI. 1200+ hours of coding and hands-on experience in developing various Web-Apps and programs. Looking forward to working as an accountable and competent employee in an exciting tech company.
                    </Text>
            
                </Box>
            </Flex>
            </Fade>
        </Box>
    </div>
  )
}

export default About