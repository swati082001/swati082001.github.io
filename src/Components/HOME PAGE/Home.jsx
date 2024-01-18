import React from 'react';
import Styles from "./Home.module.css";
import {Box, Button, Flex,Image,Text} from "@chakra-ui/react";
import logo from "./profile.png";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

  
  return (
    <div className={Styles.About} id="home">
        <Box w={{base:"100%",sm:"100%",md:"100%",lg:"100%"}} mt={{base:"20px",sm:"30px",md:"50px",lg:"70px"}} p={7} h={{sm:"850px",md:"900px",lg:"650px"}}>
          <br/>
          <Flex direction={{base:"column-reverse",sm:"column-reverse",md:"column-reverse",lg:"row"}} justifyContent={{lg:"space-evenly",md:"center",sm:"center",base:"center"}}>
          <Box w={{base:"100%",sm:"95%",md:"95%",lg:"50%"}} textAlign={{base:"center",sm:"center",md:"center",lg:"initial"}} margin="auto" mt={"60px"} >
            <Text textStyle="AboutHead">Hii, I am Swati Mohanty,</Text>
            <Box display={{base:"none",sm:"none",md:"block",lg:"block"}}>
            <TypeAnimation 
                // Same String at the start will only be typed once, initially
              sequence={[
              'Full Stack Web Developer.',
              1000,
              'MERN Stack Web Developer.',
              1000,
              'A Tech Enthusiast.',
              1000,
              
              ]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
               style={{ fontSize: ["30px"], textAlign:"initial"}}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
            </Box>

            <Text textStyle="AboutPara">A self-motivated, hard-working, and ambitious Web Developer with proficiency in MERN Stack. Developing websites using Javascript, React, Redux, and Chakra UI. Looking forward to working as an accountable and competent employee in an exciting Tech company.</Text>
            <br/>
            <Flex justifyContent={{base:"center",sm:"center",md:"center",lg:"initial"}}>
            <a href='https://www.linkedin.com/in/swati-mohanty08/'><Image w={{base:"30px",sm:"50px",md:"50px",lg:"50px"}} borderRadius="0" bg="#b107ff" src='https://cdn.iconscout.com/icon/free/png-512/free-linkedin-192-739517.png?f=webp&w=256' alt='linked in logo' /></a>
            
            <a href='https://github.com/swati082001'><Image w={{base:"30px",sm:"50px",md:"50px",lg:"50px"}} ml="35px" borderRadius="50%" bg="#b107ff" src='https://cdn.iconscout.com/icon/free/png-512/free-github-163-761603.png?f=webp&w=256' alt='github logo' /></a>

           <a href='https://drive.google.com/uc?export=download&id=1qA1tFgMmggIQ_9vWHNLkdrOZH0wg36WM'  onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1qA1tFgMmggIQ_9vWHNLkdrOZH0wg36WM/view?usp=sharing",
              "_blank"
            );
          }}> 
          <Button ml={{base:"40px",sm:"30px",md:"30px",lg:"30px"}} w={{base:"70px",sm:"70px",md:"85px",lg:"120px"}} mt={{base:"-1"}} size="lg" borderRadius={10}  bgColor="#0f0f0f" color={"#b107ff"} >RESUME</Button>
          </a>

            </Flex>

          </Box>

          <Box width={{base:"40%",sm:"40%",md:"40%",lg:"28%"}}  margin="auto" bgColor="#b107ff" borderRadius={{base:"1050px 1050px",sm:"1000px 1000px",md:"1000px 1000px",lg:"1000px 1000px"}} mt="30px">
           <Image ml={{sm:"10px",md:"10px",lg:"10px",base:"6px"}} borderRadius={{base:"1110px 800px",sm:"1210px 1000px",md:"1160px 1000px",lg:"1160px 1000px"}}   w="100%" src={logo} alt=""/>

          </Box>

          </Flex>

        </Box>
    </div>
  )
}

export default Home