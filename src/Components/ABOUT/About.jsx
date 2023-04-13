import React from 'react';
import Styles from "./About.module.css";
import {Box, Flex,ListItem,Text, UnorderedList} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className={Styles.About} id="about">
        <Box w={{base:"100%",sm:"80%",md:"80%",lg:"90%"}} margin={"auto"} h="auto" mt={{base:"-1px",sm:"0px",md:"-1px",lg:"0px"}} p="40px">
        <Fade direction='left' cascade>
            <Flex direction={{base:"column",sm:"column",md:"column",lg:"row"}} justifyContent="space-around" alignItems="center">
                <Box w={{base:"85%",sm:"80%",md:"75%",lg:"75%"}} ml={{base:0,sm:0,md:"130px",lg:0}}>
                <img height={{base:"400",sm:"600",md:"500",lg:"400"}}  width={{sm:"600",md:"500",lg:"400"}}src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif" alt="" />   
            
                </Box>

                <Box w={{base:"90%",sm:"90%",md:"90%",lg:"65%"}}>
                    <Text textStyle={"AboutHead"}>ABOUT ME</Text>
                    <UnorderedList>
                      <ListItem>
                      <Text textStyle="AboutPara">  Hi, I'm Swati Mohanty, a recent graduate with a degree in Geology and a passion for full-stack web development. I have experience in front-end technologies like HTML, CSS, and JavaScript, and have also worked with back-end technologies like Node JS, Express, and MongoDB. 1200+ hours of coding and hands-on experience in developing various Web-Apps and programs. My projects have involved building responsive and user-friendly websites using frameworks like React and Redux. </Text>
                      </ListItem>

                      <ListItem>
                      <Text textStyle="AboutPara"> I am a hardworking and self-motivated individual with a strong commitment to learning and improving my skills. I am constantly exploring new technologies and tools to expand my knowledge and stay up-to-date with the latest trends in the industry. My approach to web development is focused on creating solutions that are simple, elegant, and efficient, while also delivering a great user experience.</Text>
                      </ListItem>

                      <ListItem>
                      <Text textStyle="AboutPara">In my free time, I enjoy reading and painting, which helps me stay creative and inspired. If you're looking for a full-stack web developer who is passionate, enthusiastic, and always willing to learn, I would love to connect and discuss your projects. </Text>
                      </ListItem>
                    </UnorderedList>
          
                </Box>
            </Flex>
            </Fade>
        </Box>
    </div>
  )
}

export default About