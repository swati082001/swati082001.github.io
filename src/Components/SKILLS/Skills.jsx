import { Box ,Grid,Image,Text} from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Styles from "./Skills.module.css"

const Skills = () => {
  return (
    <div className={Styles.Skills} id="skills">
        <Box w="80%" margin={"auto"} p={7} h={{sm:"auto",md:"auto",lg:"auto"}} textAlign={{sm:"center",md:"center",lg:"initial"}}>

        <Text textStyle="AboutHead" mt={{sm:"40px",md:"40px",lg:"30px"}}>Skills</Text>
        <Text textAlign={{base:"center"}}>Let's showcase some skills.</Text>

        <Fade cascade direction='left'>

        <Box w="90%" margin={"auto"} p={5} mt={{base:"50px",sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px" textAlign="center" >

          <Box p={7}>
          <Grid  templateColumns={{base:"repeat(2,1fr)",sm:"repeat(2,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}} gap={{sm:"15px",md:"15px",lg:"20px"}}>
          <Box >
          <Image w={{base:"60px",sm:"70px",md:"80px",lg:"100px"}} ml={{sm:"15px",md:"40px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg' alt='' />
          
          </Box>

          <Box >
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}} ml={{sm:"15px",md:"50px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/css3.svg' alt='' />
          
          </Box>

          <Box >
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}} ml={{sm:"15px",md:"50px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg' alt='' />
          
          </Box>

          <Box >
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}} ml={{sm:"15px",md:"50px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg' alt='' />
          
          </Box>

          <Box >
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}} ml={{sm:"15px",md:"50px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/redux.svg' alt='' />
          
          </Box>

          <Box >
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}} ml={{sm:"15px",md:"50px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg' alt='' />
          
          </Box>

          <Box >
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}} ml={{sm:"15px",md:"50px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg' alt='' />
          
          </Box>

          <Box >
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}} ml={{sm:"15px",md:"50px",lg:"70px"}} mt="10px" src='https://gayathry-portfolio.vercel.app/ts.png' alt='' />
          
          </Box>

          <Box >
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}} ml={{sm:"15px",md:"50px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/git.svg' alt='' />
          
          </Box>

          <Box >
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}} ml={{sm:"15px",md:"50px",lg:"70px"}} mt="10px"  src='https://img.icons8.com/color/70/null/chakra-ui.png' alt='' />
         
          </Box>

          <Box >
          <Image w={{sm:"60px",md:"80px",lg:"100px"}} ml={{sm:"15px",md:"50px",lg:"70px"}} mt="10px"  src='https://chiranjeev-thapliyal.vercel.app/svg/material-ui.svg' alt='' />
          
          </Box>

          <Box >
          <Image w={{sm:"60px",md:"80px",lg:"100px"}} ml={{sm:"15px",md:"50px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/mysql-logo.svg' alt='' />
          
          </Box>


          </Grid>
          </Box>

        </Box>
        </Fade>
       </Box>
    </div>
  )
}

export default Skills