import { Box ,Grid,Image,Text} from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Styles from "./Skills.module.css"
import img from "./express.png"

const Skills = () => {
  return (
    <div className={Styles.Skills} id="skills">
        <Box w="80%" margin={"auto"} p={7} h={{sm:"auto",md:"auto",lg:"auto"}} textAlign={{sm:"center",md:"center",lg:"initial"}}>

        <Text textStyle="AboutHead" mt={{sm:"40px",md:"40px",lg:"30px"}}>Skills & Tools</Text>
        <Text textAlign={{base:"center",sm:"center",md:"center",lg:"initial"}}>Let's showcase some skills.</Text>

        <Fade cascade direction='left'>

        <Box  w={{base:"100%",sm:"100%",md:"95%",lg:"95%"}} margin={"auto"} p={5} mt={{base:"50px",sm:"50px",md:"50px",lg:"40px"}}  h="auto" textAlign="center" display={"flex"} justifyContent={"center"} >

          <Box p={{base:"",sm:"",md:"",lg:"7"}}>
          <Grid templateColumns={{base:"repeat(2,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}} gap={{base:"20px",sm:"35px",md:"65px",lg:"65px"}}>

            {/* HTML 5 */}
          <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}} >
          <Image w={{base:"60px",sm:"70px",md:"80px",lg:"100px"}}   mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg' alt='html5' />
          <Text textStyle="AboutPara" textAlign={"center"}> HTML 5 </Text>
          </Box>

            {/* CSS */}
          <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}} >
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}}  mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/css3.svg' alt='' />
          <Text textStyle="AboutPara" textAlign={"center"}> CSS </Text>
          </Box>

            {/* JAVASCRIPT */}
          <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}}>
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}}  mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg' alt='' />
          <Text textStyle="AboutPara" textAlign={"center"}> JAVASCRIPT </Text>
          
          </Box>

            {/* REACT JS */}
          <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}} >
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}}  mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg' alt='' />
          <Text textStyle="AboutPara" textAlign={"center"}> REACT JS </Text>
          </Box>


            {/* REDUX */}
          <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}}>
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}}  mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/redux.svg' alt='' />
          <Text textStyle="AboutPara" textAlign={"center"}> REDUX </Text>
          
          </Box>

            {/* NODEJS */}
          <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}}>
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}}  mt="10px" src='https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-128.png' alt='' />
          <Text textStyle="AboutPara" textAlign={"center"}> NODE JS </Text>
          </Box>

             {/* EXPRESS JS */}
             <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}}>
            <Image w={{sm:"60px",md:"80px",lg:"100px"}}  mt="10px"  src={img} alt='' />
            <Text textStyle="AboutPara" textAlign={"center"}> EXPRESS JS </Text>
            </Box>

            {/* MONGODB */}
          <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}}>
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}}  mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg' alt='' />
          <Text textStyle="AboutPara" textAlign={"center"}> MONGO DB </Text>
          
          </Box>

            {/* TYPESCRIPT */}
          <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}}>
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}}  mt="10px" src='https://gayathry-portfolio.vercel.app/ts.png' alt=''/>
          <Text textStyle="AboutPara" textAlign={"center"}> TYPESCRIPT </Text>         
          </Box>

            {/* CHAKRA UI */}
            <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}}>
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}}  mt="10px"  src='https://img.icons8.com/color/70/null/chakra-ui.png' alt='' />
          <Text textStyle="AboutPara" textAlign={"center"}> CHAKRA UI </Text>
         
          </Box>

            {/* CYPRESS */}
            <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}}>
          <Image w={{sm:"60px",md:"80px",lg:"100px"}}  mt="10px" src='https://seekicon.com/free-icon-download/cypress_1.svg' alt='' />
          <Text textStyle="AboutPara" textAlign={"center"}> CYPRESS </Text>
          
          </Box>

            {/* GIT */}
          <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}}>
          <Image w={{base:"65px",sm:"60px",md:"80px",lg:"100px"}}  mt="10px" src='https://chiranjeev-thapliyal.vercel.app/svg/git.svg' alt='' />
          <Text textStyle="AboutPara" textAlign={"center"}> GIT </Text>
          
          </Box>

          

         


            {/* NPM */}
          <Box border={"1px solid white"} borderRadius="15px"  display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}}>
          <Image w={{sm:"60px",md:"80px",lg:"100px"}}  mt="10px" src='https://akhtarfaizan20.github.io/static/media/npm.87689eab730642c86d2b01f3ef4a19e3.svg' alt='npm' />
          <Text textStyle="AboutPara" textAlign={"center"}> NPM </Text>
          </Box>

            {/* DATA AND ALGO */}
          <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}}  display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}}>
          <Image w={{sm:"60px",md:"80px",lg:"100px"}}  mt="10px" src='https://akhtarfaizan20.github.io/static/media/database.24991eee32623f453b1c.png' alt='' />
          <Text textStyle="AboutPara" textAlign={"center"}> DS & ALGO </Text>
          </Box>

          

          {/* POSTMAN */}
          <Box border={"1px solid white"} borderRadius="15px" p={{base:"3",sm:"5",md:"7",lg:"5"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{bgColor:"#b107ff",border:"none"}}>
          <Image w={{sm:"60px",md:"80px",lg:"100px"}}  mt="10px" src='data:image/png;base64,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' alt='' />
          <Text textStyle="AboutPara" textAlign={"center"}> POSTMAN </Text>
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