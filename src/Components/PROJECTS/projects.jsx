import { Box ,Image,Text,Flex,Button} from '@chakra-ui/react';
import React from 'react'
import Styles from "./projects.module.css";
import logo from "./Nordstrom.png";
import image from "./reliance.png";
import {Link} from "@chakra-ui/react"


const Projects = () => {
  return (
    <div className={Styles.Projects} id="projects">
        <Box w="80%" margin={"auto"} p={7} h={{sm:"auto",md:"auto",lg:"auto"}} textAlign={{sm:"center",md:"center",lg:"initial"}}>

            <Text textStyle="AboutHead" mt={{sm:"40px",md:"40px",lg:"30px"}}>Build By Me !</Text>
            <Text>Each Project is Unique. Here are some of my works.</Text>

            <Box w="90%" margin={"auto"} p={5} mt={{sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px">
                <Flex direction={{sm:"column",md:"column",lg:"row"}} justifyContent="space-between">

                 <Image w={{sm:"100%",md:"100%",lg:"50%"}} src={logo} alt="" />
                 <Box w={{sm:"90%",md:'90%',lg:'45%'}}>
                    <Text textStyle="AboutSubHead" mt={{sm:"10px",md:'10px',lg:'10px'}}>Nordstorm Clone</Text>
                    <Text textStyle="AboutPara">Nordstrom is an American luxury department store chain that operates a website focusing on the marketing of clothing, accessories, shoes in a variety of price range. </Text>
                    <Text textStyle="AboutPara">An Individual Project executed in 5 days.</Text>

                    <Text textStyle="AboutPara">TECH STACKS- HTML | CSS | Javascript </Text>
                    <Flex justifyContent="space-around" mt="30px">
                    <Link href='https://gorgeous-tapioca-a97f5c.netlify.app/#'><Button bgColor="#2a2b2b">Live Demo</Button></Link>
                    <Link href='https://github.com/swati082001/agreeable-farm-465'><Button bgColor="#2a2b2b">Source Code</Button></Link>
                    </Flex>
                 </Box>

                </Flex>
            </Box>

            <Box w="90%" margin={"auto"} p={5} mt={{sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px">
                <Flex direction={{sm:"column",md:"column",lg:"row"}} justifyContent="space-between">

                 <Image w={{sm:"100%",md:"100%",lg:"50%"}} src={image} alt="" />
                 <Box w={{sm:"90%",md:'90%',lg:'45%'}}>
                    <Text textStyle="AboutSubHead"mt={{sm:"10px",md:'10px',lg:'10px'}}>Digiplus</Text>
                    <Text textStyle="AboutPara">Digiplus is an e-commerce website selling a range of digital products and latest appliances. It is a clone of the famous retail webiste Reliance Digital.</Text>
                    <Text textStyle="AboutPara">An Individual Project executed in 5 days.</Text>

                    <Text textStyle="AboutPara">TECH STACKS-  CSS | Javascript | React | Chakra-UI </Text>
                    <Flex justifyContent="space-around" mt="30px">
                    <Link href='https://super-chebakia-102170.netlify.app/'><Button bgColor="#2a2b2b">Live Demo</Button></Link>
                    <Link href='https://github.com/swati082001/famous-jelly-9084'><Button bgColor="#2a2b2b">Source Code</Button></Link>
                    </Flex>
                 </Box>

                </Flex>
            </Box>

            

        </Box>
    </div>
  )
}

export default Projects