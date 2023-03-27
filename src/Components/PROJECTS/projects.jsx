import { Box ,Image,Text,Flex,Button} from '@chakra-ui/react';
import React from 'react'
import Styles from "./projects.module.css";
import logo from "./Nordstrom.png";
import image from "./reliance.png";
import logo2 from "./TRADEMART.png";
import image2 from "./bBlooms.png";
import image3 from "./TravelSphere.png"
import games from "./games.png"
import {Link} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";


const Projects = () => {
  return (
    <div className={Styles.Projects} id="projects">
        <Box w="80%" margin={"auto"} p={7} h={{base:"auto",sm:"auto",md:"auto",lg:"auto"}} textAlign={{base:"center",sm:"center",md:"center",lg:"initial"}}>

            <Text textStyle="AboutHead" mt={{base:"40px",sm:"40px",md:"40px",lg:"30px"}}>Build By Me !</Text>
            <Text>Each Project is Unique. Here are some of my works.</Text>

             {/* WILD TIMES */}
           <Fade direction='right' cascade>
            <Box w={{base:"95%",sm:"90%",md:"90%",lg:"90%"}} margin={"auto"} p={5} mt={{base:"50px",sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px">
                <Flex direction={{base:"column",sm:"column",md:"column",lg:"row"}} justifyContent="space-between" gap={{base:"10px"}}>

                 <Image w={{base:"100%",sm:"100%",md:"100%",lg:"50%"}} src={games} alt="" />
                 <Box w={{sm:"90%",md:'90%',lg:'45%'}}>
                    <Text textStyle="AboutSubHead" mt={{sm:"10px",md:'10px',lg:'10px'}}>Wild Times</Text>
                    <Text textStyle="AboutPara">Wild Times is a real time full stack single player game. This game is build with the help of MERN Stack, also incorporating dynamic animation to create an immersive gaming experience. Among the top 10 projects in Masai Hackathon.</Text>
                    <Text textStyle="AboutPara">A Collaborative Project build in 48 hours.</Text>

                    <Text textStyle="AboutPara">TECH STACKS- React | Typescript | Css Animations | Framer Motion | Chakra-UI | NodeJS | Mongo Atlas </Text>
                    <Flex justifyContent="space-around" direction={{base:"column",sm:"row",md:"row",lg:"row"}} gap={{base:"10px"}} mt="30px">
                    <Link href='https://wildtimes-swati082001.vercel.app/' target="_blank"><Button bgColor="#2a2b2b" _hover={{color:"#2a2b2b", backgroundColor:"white"}} textDecoration={"none"}>Live Demo</Button></Link>
                    <Link href='https://github.com/ninja-mono1696/wild-times' target="_blank"><Button bgColor="#2a2b2b" _hover={{color:"#2a2b2b", backgroundColor:"white"}} textDecoration={"none"}>Source Code</Button></Link>
                    </Flex>
                 </Box>

                </Flex>
            </Box>
            </Fade>

            {/* bBlooms */}
            <Fade direction='left' cascade>
            <Box w={{base:"95%",sm:"90%",md:"90%",lg:"90%"}} margin={"auto"} p={5} mt={{base:"50px",sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px">
                <Flex direction={{base:"column",sm:"column",md:"column",lg:"row"}} justifyContent="space-between" gap={{base:"10px"}}>

                 <Image w={{sm:"100%",md:"100%",lg:"50%"}} src={image2} alt="" />
                 <Box w={{sm:"90%",md:'90%',lg:'45%'}}>
                    <Text textStyle="AboutSubHead" mt={{sm:"10px",md:'10px',lg:'10px'}}>bBlooms</Text>
                    <Text textStyle="AboutPara">bBlooms is an e-com website which is a floral and foods gift retailer and distribution company in the United States.bBlooms is a clone of 1800-flowers.com</Text>
                    <Text textStyle="AboutPara">A Collaborative Project built by a team of 5 members executed in 5 days.</Text>

                    <Text textStyle="AboutPara">TECH STACKS- React | Redux | Redux-Thunk | Chakra-UI | Node.js | Express | Mongoose | MongoAtlas </Text>

                    <Text textStyle="AboutPara">Area Of Responsibility- Cart Section , Checkout section , Payment portal and Otp page. </Text>
                    <Flex justifyContent="space-around" direction={{base:"column",sm:"row",md:"row",lg:"row"}} gap={{base:"10px"}} mt="30px">
                    <Link href='https://bblooms.vercel.app/' target="_blank"><Button bgColor="#2a2b2b" _hover={{color:"#2a2b2b", backgroundColor:"white"}} textDecoration={"none"} >Live Demo</Button></Link>
                    <Link href='https://github.com/swati082001/bBlooms-1800Flowers-clone' target="_blank"><Button bgColor="#2a2b2b" _hover={{color:"#2a2b2b", backgroundColor:"white"}} textDecoration={"none"}>Source Code</Button></Link>
                    </Flex>
                 </Box>

                </Flex>
            </Box>
            </Fade>

           {/* NORDSTORM */}
           <Fade direction='right' cascade>
            <Box w={{base:"95%",sm:"90%",md:"90%",lg:"90%"}} margin={"auto"} p={5} mt={{base:"50px",sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px">
                <Flex direction={{base:"column",sm:"column",md:"column",lg:"row"}} justifyContent="space-between" gap={{base:"10px"}}>

                 <Image w={{base:"100%",sm:"100%",md:"100%",lg:"50%"}} src={logo} alt="" />
                 <Box w={{sm:"90%",md:'90%',lg:'45%'}}>
                    <Text textStyle="AboutSubHead" mt={{sm:"10px",md:'10px',lg:'10px'}}>Nordstorm Clone</Text>
                    <Text textStyle="AboutPara">Nordstrom is an American luxury department store chain that operates a website focusing on the marketing of clothing, accessories, shoes in a variety of price range. </Text>
                    <Text textStyle="AboutPara">An Individual Project executed in 5 days.</Text>

                    <Text textStyle="AboutPara">TECH STACKS- HTML | CSS | Javascript </Text>
                    <Flex justifyContent="space-around" direction={{base:"column",sm:"row",md:"row",lg:"row"}} gap={{base:"10px"}} mt="30px">
                    <Link href='https://gorgeous-tapioca-a97f5c.netlify.app/#' target="_blank"><Button bgColor="#2a2b2b" _hover={{color:"#2a2b2b", backgroundColor:"white"}} textDecoration={"none"}>Live Demo</Button></Link>
                    <Link href='https://github.com/swati082001/agreeable-farm-465' target="_blank"><Button bgColor="#2a2b2b" _hover={{color:"#2a2b2b", backgroundColor:"white"}} textDecoration={"none"}>Source Code</Button></Link>
                    </Flex>
                 </Box>

                </Flex>
            </Box>
            </Fade>
            
            {/* DIGIPLUS */}
            <Fade direction="left" cascade>
            <Box w={{base:"95%",sm:"90%",md:"90%",lg:"90%"}} margin={"auto"} p={5} mt={{base:"50px",sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px">
                <Flex direction={{base:"column",sm:"column",md:"column",lg:"row"}} justifyContent="space-between" gap={{base:"10px"}}>

                 <Image w={{sm:"100%",md:"100%",lg:"50%"}} src={image} alt="" />
                 <Box w={{sm:"90%",md:'90%',lg:'45%'}}>
                    <Text textStyle="AboutSubHead"mt={{sm:"10px",md:'10px',lg:'10px'}}>Digiplus</Text>
                    <Text textStyle="AboutPara">Digiplus is an e-commerce website selling a range of digital products and latest appliances. It is a clone of the famous retail webiste Reliance Digital.</Text>
                    <Text textStyle="AboutPara">An Individual Project executed in 5 days.</Text>

                    <Text textStyle="AboutPara">TECH STACKS-  CSS | Javascript | React | Chakra-UI </Text>
                    <Flex justifyContent="space-around" direction={{base:"column",sm:"row",md:"row",lg:"row"}} gap={{base:"10px"}} mt="30px">
                    <Link href='https://super-chebakia-102170.netlify.app/' target="_blank"><Button bgColor="#2a2b2b" _hover={{color:"#2a2b2b", backgroundColor:"white"}} textDecoration={"none"}>Live Demo</Button></Link>
                    <Link href='https://github.com/swati082001/famous-jelly-9084' target="_blank"><Button bgColor="#2a2b2b" _hover={{color:"#2a2b2b", backgroundColor:"white"}} textDecoration={"none"}>Source Code</Button></Link>
                    </Flex>
                 </Box>

                </Flex>
            </Box>
            </Fade>

            {/* TRADEMART */}
            <Fade direction='right' cascade>
            <Box w={{base:"95%",sm:"90%",md:"90%",lg:"90%"}} margin={"auto"} p={5} mt={{base:"50px",sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px">
                <Flex direction={{base:"column",sm:"column",md:"column",lg:"row"}} justifyContent="space-between" gap={{base:"10px"}}>

                 <Image w={{sm:"100%",md:"100%",lg:"50%"}} src={logo2} alt="" />
                 <Box w={{sm:"90%",md:'90%',lg:'45%'}}>
                    <Text textStyle="AboutSubHead" mt={{sm:"10px",md:'10px',lg:'10px'}}>Trademart</Text>
                    <Text textStyle="AboutPara">Trademart is an e-com website that provides B2B sales services.It is a clone of the famous retail website Indiamart. </Text>
                    <Text textStyle="AboutPara">A Collaborative Project built by a team of 4 members executed in 5 days.</Text>

                    <Text textStyle="AboutPara">TECH STACKS- React | Redux | Redux-Thunk | Chakra-UI | Firebase | </Text>

                    <Text textStyle="AboutPara">Area Of Responsibility- Admin Section including stats, admin registration, user dashboard, product dashboard. </Text>
                    <Flex justifyContent="space-around" direction={{base:"column",sm:"row",md:"row",lg:"row"}} gap={{base:"10px"}} mt="30px">
                    <Link href='https://trademart.netlify.app/' target="_blank"><Button bgColor="#2a2b2b" _hover={{color:"#2a2b2b", backgroundColor:"white"}} textDecoration={"none"} >Live Demo</Button></Link>
                    <Link href='https://github.com/jithstephen13/TradeMart' target="_blank"><Button bgColor="#2a2b2b" _hover={{color:"#2a2b2b", backgroundColor:"white"}} textDecoration={"none"}>Source Code</Button></Link>
                    </Flex>
                 </Box>

                </Flex>
            </Box>
            </Fade>

            {/* TravelSphere */}
            <Fade direction='left' cascade>
            <Box w={{base:"95%",sm:"90%",md:"90%",lg:"90%"}} margin={"auto"} p={5} mt={{base:"50px",sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px">
                <Flex direction={{base:"column",sm:"column",md:"column",lg:"row"}} justifyContent="space-between" gap={{base:"10px"}}>

                 <Image w={{sm:"100%",md:"100%",lg:"50%"}} src={image3} alt="" />
                 <Box w={{sm:"90%",md:'90%',lg:'45%'}}>
                    <Text textStyle="AboutSubHead" mt={{sm:"10px",md:'10px',lg:'10px'}}>TravelSphere</Text>
                    <Text textStyle="AboutPara">TravelSphere is a travel fare aggregator website and travel metasearch engine. It is a clone of Orbitz.com.</Text>
                    <Text textStyle="AboutPara">A Collaborative Project built by a team of 5 members executed in 5 days.</Text>

                    <Text textStyle="AboutPara">TECH STACKS- HTML | CSS | Javascript</Text>

                    <Text textStyle="AboutPara">Area Of Responsibility- Cart Section , Checkout section , Payment portal and Otp page. </Text>
                    <Flex justifyContent="space-around" direction={{base:"column",sm:"row",md:"row",lg:"row"}} gap={{base:"10px"}} mt="30px">
                    <Link href='https://graceful-paprenjak-0954c1.netlify.app/' target="_blank"><Button bgColor="#2a2b2b" _hover={{color:"#2a2b2b", backgroundColor:"white"}} textDecoration={"none"} >Live Demo</Button></Link>
                    <Link href='https://github.com/swati082001/Travelsphere-Orbitz-Clone' target="_blank"><Button bgColor="#2a2b2b" _hover={{color:"#2a2b2b", backgroundColor:"white"}} textDecoration={"none"}>Source Code</Button></Link>
                    </Flex>
                 </Box>

                </Flex>
            </Box>
            </Fade>

            

        </Box>
    </div>
  )
}

export default Projects