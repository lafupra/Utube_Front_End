import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineDislike} from "react-icons/ai"
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import axios from 'axios'
import { Url } from '../utils/varData'




const Container = styled.div`
display:flex;
width:100%;
gap:20px;
margin-top:20px;

`
const ChannelImage = styled.img`
width:36px;
object-fit:cover;
height:36px;
border-radius:50%;
background-color:#999;
cursor:pointer
`
const CommentSec = styled.div`
display:flex;
flex-direction:column;
width:100%;
`
const ChannelNameT = styled.div`
display:flex;
gap:5px;
margin-bottom:10px;
`
const ChannelName = styled.h2`
font-size:14px;
color:${({theme}) => theme.text};
cursor:pointer
`

const CommentTime = styled.span`
color:${({theme}) => theme.textSoft};
font-size:12px;
`
const CommentDesc = styled.p`
color:${({theme}) => theme.text};
font-size:14px;
`

const LDReply = styled.div`
display:flex;
gap:5px;
color:${({theme}) => theme.textSoft};
margin-top:13px;
font-size:14px;
align-items:center;
`
const Comment = ({comments}) => {
const [user,setuser] = useState({"userId":"default","img":"default","name":"default"})
  

  TimeAgo.addLocale(en)


  useEffect(() => {
    const getCUser = async () => {
      try{

        const cUser = await axios.get(`${Url}/users/${comments.userId}`)
        setuser(cUser.data)
        
      }catch(err){
        console.log(err)
      }
    }

    getCUser()
  },[comments.userId])

  
  return (
    <Container>

    <ChannelImage src={user.img}/>

    <CommentSec>

        <ChannelNameT>

            <ChannelName>
           {user.name}
            </ChannelName>

            <CommentTime>
                <span style={{fontSize:"12px"}}> <ReactTimeAgo date={new Date(comments.createdAt)} locale="en-US"/></span> 
            </CommentTime>

        </ChannelNameT>


    <CommentDesc>
       {comments.desc}
    </CommentDesc>


    <LDReply>

    <AiOutlineLike style={{width:"20px",height:"20px"}}/> <p>3.2k</p>
    <AiOutlineDislike style={{width:"20px",height:"20px",marginLeft:"10px"}}/>  <p style={{fontWeight:"500",marginLeft:"20px",fontSize:"14px"}}>REPLY</p>

    </LDReply>


    </CommentSec>
    
    </Container>
  )
}

export default Comment