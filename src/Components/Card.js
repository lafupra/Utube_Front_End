import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import { Url } from '../utils/varData'
import axios from "axios"
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'


const Container = styled.div`
width:360px;
margin-bottom:45px;
cursor:pointer;
`

const Image = styled.img`
width:100%;
height:202px;
background-color:#999;
object-fit:cover;
`

const Details = styled.div`
display:flex;
align-items:center;
margin-top:16px;
gap:12px;

`

const ChannelImage = styled.img`
width:36px;
object-fit:cover;
height:36px;
border-radius:50%;
background-color:#999;
`

const Texts = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`

const Title = styled.h1`
font-size:16px;
font-weight:500;
color:${({theme}) => theme.text};
`

const ChannelName = styled.h2`
font-size:14px;
color:${({theme}) => theme.textSoft};
margin:9px 0px;

`

const Info = styled.div`
font-size:14px;
color:${({theme}) => theme.textSoft};
`


const Card = ({videodata}) => {

  TimeAgo.addLocale(en)

  const [tvideosudata,settvideosudata] = useState({})

  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get(`${Url}/users/${videodata.userId}`)
    
      
      settvideosudata(user.data)

    }
    getUser()
  },[videodata.userId])




  return (
    <Container>
        <Link to={`/video/${videodata._id}`} >
        <Image src={videodata.thumbnailImg}/>
        </Link>
    <Details>
        <ChannelImage src={tvideosudata.img}/>
        <Texts>
           <Link to={`/video/${videodata._id}`}    style={{textDecoration:"none"}}  > <Title>{videodata.title}</Title>  </Link> 
            <ChannelName>{tvideosudata.name}</ChannelName>
            <Info>{videodata.views} views. uploaded : <ReactTimeAgo date={new Date(videodata.createdAt)} locale="en-US"/></Info>
        </Texts>
    </Details>
    </Container>
    
  )
}

export default Card