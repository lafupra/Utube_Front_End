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
  const [Videos,setVideos] = useState([{
    "_id": "635e756641ccf0dbb0c9c06e",
    "userId": "635a8b1c87eacb76c7eaedb4",
    "title": "this is the first site video",
    "desc": "sdfasf",
    "thumbnailImg": "https://firebasestorage.googleapis.com/v0/b/yotubeapp-d2b9c.appspot.com/o/1667134757423Artboard%201%20copy-100.jpg?alt=media&token=a1a4cbdf-4bab-4b09-af67-1bd670286b1f",
    "videoUrl": "https://firebasestorage.googleapis.com/v0/b/yotubeapp-d2b9c.appspot.com/o/1667134794077VID_20171014_151653.mp4?alt=media&token=148ad97a-9028-4abf-992e-5504a57abc34",
    "views": 0,
    "tags": [
        "first",
        "video"
    ],
    "likes": [],
    "dislikes": [],
    "createdAt": "2022-10-30T13:00:22.564Z",
    "updatedAt": "2022-10-30T13:00:22.564Z",
    "__v": 0
}])

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