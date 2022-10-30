import React, { useEffect, useState } from 'react'
import Card from "../Components/Card"
import styled from "styled-components"
import axios from "axios"
import {Url} from "../utils/varData"

const Container = styled.div`
display:flex;
justify-content:space-between;
gap:10px;
flex-wrap:wrap;
`



const Home = () => {
  const [Videos,setVideos] = useState([{createdAt: "2022-10-19T08:04:41.657Z"}])

  useEffect(() => {
         
    const getVideo = async () => {
      const videos = await axios.get(`${Url}/videos`)
      setVideos(videos.data)
    }
    getVideo()
  }, [])
 
  return (
    <Container>
     {Videos.map((videodata) => (  
      <Card key={videodata._id} videodata = {videodata} /> 

    ))} 
    </Container>
  )
}

export default Home