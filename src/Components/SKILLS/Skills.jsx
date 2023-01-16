import { Box ,Grid,Image,Text} from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Styles from "./Skills.module.css"

const Skills = () => {
  return (
    <div className={Styles.Skills} id="skills">
        <Box w="80%" margin={"auto"} p={7} h={{sm:"auto",md:"auto",lg:"auto"}} textAlign={{sm:"center",md:"center",lg:"initial"}}>

        <Text textStyle="AboutHead" mt={{sm:"40px",md:"40px",lg:"30px"}}>Skills</Text>
        <Text>Let's showcase some skills.</Text>

        <Fade cascade direction='left'>

        <Box w="90%" margin={"auto"} p={5} mt={{sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px" textAlign="center" >

          <Box p={7}>
          <Grid  templateColumns={{sm:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}}>
          <Box >
          <Image w="100px" ml={{sm:"30px",md:"40px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg' alt='' />
          <Text textStyle="Skills">HTML 5</Text>
          </Box>

          <Box >
          <Image w="100px" ml={{sm:"30px",md:"40px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/css3.svg' alt='' />
          <Text textStyle="Skills">CSS 3</Text>
          </Box>

          <Box >
          <Image w="100px" ml={{sm:"30px",md:"40px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg' alt='' />
          <Text textStyle="Skills">JAVASCRIPT</Text>
          </Box>

          <Box >
          <Image w="100px" ml={{sm:"30px",md:"40px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg' alt='' />
          <Text textStyle="Skills">REACT</Text>
          </Box>

          <Box >
          <Image w="100px" ml={{sm:"30px",md:"40px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/redux.svg' alt='' />
          <Text textStyle="Skills">REDUX</Text>
          </Box>

          <Box >
          <Image w="100px" ml={{sm:"30px",md:"40px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg' alt='' />
          <Text textStyle="Skills">NODE JS</Text>
          </Box>

          <Box >
          <Image w="100px" ml={{sm:"30px",md:"40px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg' alt='' />
          <Text textStyle="Skills">MONGO DB</Text>
          </Box>

          <Box >
          <Image w="100px" ml={{sm:"30px",md:"40px",lg:"70px"}} mt="10px" src='https://gayathry-portfolio.vercel.app/ts.png' alt='' />
          <Text textStyle="Skills">TYPESCRIPT</Text>
          </Box>

          <Box >
          <Image w="100px" ml={{sm:"30px",md:"40px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/git.svg' alt='' />
          <Text textStyle="Skills">GIT</Text>
          </Box>

          <Box >
          <Image w="100px" ml={{sm:"30px",md:"40px",lg:"70px"}} mt="10px"  src='https://img.icons8.com/color/70/null/chakra-ui.png' alt='' />
          <Text textStyle="Skills">CHAKRA UI</Text>
          </Box>

          <Box >
          <Image w="100px" ml={{sm:"30px",md:"40px",lg:"70px"}} mt="10px"  src='https://chiranjeev-thapliyal.vercel.app/svg/material-ui.svg' alt='' />
          <Text textStyle="Skills">MATERIAL UI</Text>
          </Box>

          <Box >
          <Image w="100px" ml={{sm:"30px",md:"40px",lg:"70px"}} mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/mysql-logo.svg' alt='' />
          <Text textStyle="Skills">MYSQL</Text>
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