import React from 'react';
import Styles from "./About.module.css";
import {Box, Flex,Text} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className={Styles.About} id="about">
        <Box w={{base:"100%",sm:"80%",md:"80%",lg:"90%"}} margin={"auto"} h="auto" mt={{base:"-1px",sm:"0px",md:"-1px",lg:"0px"}} p="40px">
        <Fade direction='left' cascade>
            <Flex direction={{base:"column",sm:"column",md:"column",lg:"row"}} justifyContent="space-around" alignItems="center">
                <Box w={{base:"85%",sm:"80%",md:"75%",lg:"75%"}} ml={{base:0,sm:0,md:"250px",lg:0}}>
                <img height={{base:"400",sm:"600",md:"500",lg:"400"}}  width={{sm:"600",md:"500",lg:"400"}}src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif" alt="" />   
            
                </Box>

                <Box w={{base:"70%",sm:"80%",md:"80%",lg:"50%"}}>
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