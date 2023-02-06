import React from 'react'
import Styles from "./Gitstats.module.css"
import {Box,Image,Text,Flex} from "@chakra-ui/react"
import GitHubCalendar from 'react-github-calendar';


const Gitstats = () => {
  return (
    <div className={Styles.Stats}>
        <Box w="80%" margin={"auto"} p={7} h={{sm:"auto",md:"auto",lg:"auto"}} textAlign={{base:"center",sm:"center",md:"center",lg:"initial"}}>
            <Text textStyle="AboutHead" mt={{base:"40px",sm:"40px",md:"40px",lg:"30px"}}>Git Stats</Text>
            <Text>Lets get into some statistics. Shall we?</Text>

            <Box w={{base:"100%",sm:"80%",md:"80%",lg:"80%"}} margin={"auto"} p={5} mt={{base:"40px",sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px">
            <Text textStyle="AboutSubHead" mt={{base:"30px",sm:"40px",md:"40px",lg:"30px"}}>Git Calendar</Text>
            <GitHubCalendar username="swati082001" />
            </Box>

            <Box w={{base:"100%",sm:"80%",md:"80%",lg:"80%"}} margin={"auto"} p={5} mt={{base:"40px",sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid white" borderRadius="15px">
            <Text textStyle="AboutSubHead" mt={{sm:"40px",md:"40px",lg:"30px"}}>Git Stats</Text>
            <Flex direction={{base:"column",sm:"column",md:"column",lg:"row"}} gap={{base:"10px",sm:"10px"}} justifyContent="space-around">
            <Image src='https://github-readme-stats.vercel.app/api?username=swati082001&show_icons=true&theme=radical' alt='' />
            <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=swati082001&langs_count=8" alt=''/>
            </Flex>
            </Box>

            

        </Box>
    </div>
  )
}

export default Gitstats