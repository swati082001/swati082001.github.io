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

            <Text textStyle="AboutPara">A self-motivated, hard-working, and ambitious Web Developer with proficiency in MERN Stack. Developing websites using Javascript, React, Redux, and Chakra UI. Looking forward to working as an accountable and competent employee in an exciting Tech company.</Text>
            <br/>
            <Flex justifyContent={{base:"center",sm:"center",md:"center",lg:"initial"}}>
            <a href='https://www.linkedin.com/in/swati-mohanty08/'><Image w={{base:"30px",sm:"50px",md:"50px",lg:"50px"}} borderRadius="10px" bg="#b107ff" src='https://iconsplace.com/wp-content/uploads/_icons/000000/256/png/linkedin-icon-256.png' alt='linked in logo' /></a>
            
            <a href='https://github.com/swati082001'><Image w={{base:"30px",sm:"50px",md:"50px",lg:"50px"}} ml="35px" borderRadius="10px" bg="#b107ff" src='https://iconsplace.com/wp-content/uploads/_icons/000000/256/png/github-icon-256.png' alt='linked in logo' /></a>

           <a href='https://drive.google.com/u/0/uc?id=1a-VF7VZId3xmzhow9Pi6LH4Fnz2tmzlL&export=download'  onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1a-VF7VZId3xmzhow9Pi6LH4Fnz2tmzlL/view?usp=sharing",
              "_blank"
            );
          }}> <Button ml={{base:"40px",sm:"30px",md:"30px",lg:"30px"}} w={{base:"70px",sm:"70px",md:"85px",lg:"120px"}} mt={{base:"-1"}} size="lg" borderRadius={10}  bgColor="#0f0f0f" color={"#b107ff"} >RESUME</Button></a>

            </Flex>

          </Box>

          
          
          {/* <Box width={{sm:"60%",md:"60%",lg:"28%"}}  margin="auto" bgColor="white"  borderRadius={{sm:"1100px 20px",md:"1100px 20px",lg:"1000px 15px"}} h={{sm:"400px",md:"400px",lg:"400px"}} mt="30px" >
            <Box width={{sm:"80%",md:"80%",lg:"80%"}} bgColor="#b107ff"  borderRadius={{sm:"20px 1100px",md:"20px 1100px ",lg:"30px 1000px"}} h="400px" mt="30px">
              <br/>
              <br/>
              <br/>
            <Circle size='70%' bg="#0f0f0f" h="50%"  ml={{sm:"80px",md:"90px",lg:"100px"}} >
               <Image ml="10px" borderRadius="1100px 1000px"   w="100%" src={logo} alt=""/>
            </Circle>
            </Box>
          </Box> */}

          <Box width={{base:"40%",sm:"40%",md:"40%",lg:"28%"}}  margin="auto" bgColor="#b107ff" borderRadius={{base:"1050px 1050px",sm:"1000px 1000px",md:"1000px 1000px",lg:"1000px 1000px"}} mt="30px">
           <Image ml={{sm:"10px",md:"10px",lg:"10px",base:"6px"}} borderRadius={{base:"1110px 800px",sm:"1210px 1000px",md:"1160px 1000px",lg:"1160px 1000px"}}   w="100%" src={logo} alt=""/>

          </Box>

          </Flex>

        </Box>
    </div>
  )
}

export default Home