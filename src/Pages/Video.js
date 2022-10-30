import React, { useState } from 'react'
import styled from "styled-components"
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineDislike} from "react-icons/ai"
import {BsSave} from "react-icons/bs"
import {BsShare} from "react-icons/bs"
import Comments from "../Components/Comments"
import RecommendCard from "../Components/RecommendCard"
import { useLocation} from "react-router-dom"
import axios from 'axios'
import {Url} from "../utils/varData"
import {useEffect} from "react"
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import {useSelector} from "react-redux"
import {AiFillLike}  from "react-icons/ai"
import {AiFillDislike} from "react-icons/ai"



const Container = styled.div`
display:flex;
gap:24px;

`
const Content = styled.div`
flex:6;

`

const VideoWrapper = styled.div`
`
const Titles = styled.h1`
font-size:22px;
font-weight:400;
margin-top:20px;
margin-bottom:10px;
color:${({theme}) => theme.text}
`
const Details = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`
const Info = styled.span`
color:${({theme}) =>  theme.textSoft}
`
const Buttons = styled.div`
display:flex;
align-items:center;
color:${({theme}) => theme.text};
gap:15px;
`

const Button = styled.div`
display:flex;
align-items:center;
gap:5px;
cursor:pointer;
`
const Hr = styled.hr`
margin:15px 0px;
border:0.5px solid ${({theme}) => theme.soft};
`
const Channel = styled.div`
display:flex;
justify-content:space-between;`

const ChannelInfo = styled.div`
display:flex;
gap:20px;
`

const ChannelImage = styled.img`
width:36px;
object-fit:cover;
height:36px;
border-radius:50%;
background-color:#999;
cursor:pointer;
`

const Channeld = styled.div`
display:flex;
flex-direction:column;
width:80%;
`

const ChannelDesc = styled.div`
font-size:14px;
color:${({theme}) => theme.text};

`

const ChannelName = styled.h2`
font-size:16px;
color:${({theme}) => theme.text};
margin-bottom:2px;
cursor:pointer
`
const SubscribersCount = styled.span`
color:${({theme}) => theme.textSoft};
font-size:12px;
margin-bottom:10px;

`

const SubscribeButton = styled.button`
padding:5px 15px;
height:40px;
background-color:${props => props.subscribed === true ? "gray" : "#cc1a00"};
color:white;
font-size:14px;
font-weight:500;
border-radius:1px;
cursor:pointer;
border:none;
`

const Recommendation = styled.div`
flex:4;
width:100%;

`

const Video = () => {
  const vid = useLocation().pathname.split("/")[2]

  const[vidVideo,setvidVideo] = useState({
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
})
  const[vidVideou,setvidVideou] = useState({})
  const[liked,setliked] = useState(false)
  const[disliked,setdisliked] = useState(false)
  const User = useSelector(state => state.user.user)
  const [subscribed , setsubscribed] = useState(false)
  const [Ouser,setOuser] = useState( {"_id":"635a8b1c87eacb76c7eaedb4","name":"dune","email":"dune@gmail.com","password":"praful26297","img":"https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png","subscribers":["1"],"subscribedUsers":["hello"]})
  

  TimeAgo.addLocale(en)


  useEffect(() => {

// gets video by id

    const getVidVideo = async () => {
      try{

        const video = await axios.get(`${Url}/videos/${vid}`)
        setvidVideo(video.data)

      }catch(err){
        console.log(err)

      }

    }

    getVidVideo()

    // get's user of the video id that is on params
    
const getVidUser = async () => {

      const id = vidVideo.userId
try{

  const user = await axios.get(`${Url}/users/${id}`)
      setvidVideou(user.data)

}catch(err){
  console.log(err)
}
    
    }

   getVidUser()
// get operating user


const getOuser = async () => {
  const user = await axios.get(`${Url}/users/${User._id}`)
  setOuser(user.data)
}

getOuser()



//  this is for liked and disliked functionality

const userliked = vidVideo.likes.find((element) => element === User._id)

userliked === User._id ? setliked(true) : setliked(false)


const userdisliked = vidVideo.dislikes.find((element) => element === User._id)

userdisliked === User._id ? setdisliked(true) : setdisliked(false)

const usersubscribed = Ouser.subscribedUsers.find((element) => element === vidVideou._id)



usersubscribed === vidVideou._id ? setsubscribed(true) : setsubscribed(false)

  

  },[vid,vidVideo.userId,User._id,User,Ouser.subscribedUsers])

// handle like icon

  const handleLike= (e) => {

    e.preventDefault()


    const likeVideo = async () => {

      try{

        const like = await axios.put(`${Url}/users/like/${vid}`,{},{headers:{token: `Bearer ${User.access_token}`}})
        console.log(like)
        like.data === "LPulledOut" ? setliked(false) : setliked(true)
    
        const getVidVideo = async () => {

          try{
    
            const video = await axios.get(`${Url}/videos/${vid}`)
            setvidVideo(video.data)
    
          }catch(err){
    
            console.log(err)
    
          }
    
        }
    
        getVidVideo()

      }catch(err){
        console.log(err)

      }
   
    }

    likeVideo()
 

  }

  // handle dislike icon

  const handleDisLike = (e) => {

    e.preventDefault()


    const dislikeVideo = async () => {

      try{

        const dislike = await axios.put(`${Url}/users/dislike/${vid}`,{},{headers:{token: `Bearer ${User.access_token}`}})

        dislike.data === "DlPulledOut" ? setdisliked(false) : setdisliked(true)

        const getVidVideo = async () => {

          try{
    
            const video = await axios.get(`${Url}/videos/${vid}`)
            setvidVideo(video.data)
    
          }catch(err){
    
            console.log(err)
    
          }
    
        }
    
        getVidVideo()

      }catch(err){
        console.log(err)
      }
    
    }

    dislikeVideo()
  }

  // for subscribe and unsubscribe


 const handleSubscribe = async (e) => {
     const subscribe = await axios.put(`${Url}/users/sub/${vidVideo.userId}`,{},{headers:{token:`Bearer ${User.access_token}`}})
     subscribe.data === "Subscribed" ? setsubscribed(true) :  setsubscribed(false)

   

    const getOuser = async () => {
      const user = await axios.get(`${Url}/users/${User._id}`)
      setOuser(user.data)
    
    }
    getOuser()
 }    
  return (
    <Container>

    <Content>
      <VideoWrapper>
      <iframe width="1280" height="720" src={vidVideo.videoUrl} title="Drishyam 2 - OFFICIAL TRAILER | Ajay Devgn, Akshaye Khanna, Tabu, Shriya Saran | Abhishek Pathak" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    
      </VideoWrapper>
      <Titles className="Title" id="TitleId">
        {vidVideo.title}
      </Titles>

      <Details className="Details" id="DetailsId">
      <Info>{vidVideo.views} views. uploaded : <ReactTimeAgo date={new Date(vidVideo.createdAt)} locale="en-US"/></Info>
      <Buttons>
        <Button>
          {liked ? <AiFillLike onClick={handleLike}/>  : <AiOutlineLike onClick={handleLike}/> } {vidVideo.likes.length}
        </Button>
        <Button>
           {disliked ? <AiFillDislike  onClick={handleDisLike} /> : <AiOutlineDislike onClick={handleDisLike} /> }{vidVideo.dislikes.length}
        </Button>
        <Button>
           <BsSave/> Save
        </Button>
        <Button>
           <BsShare/> Share
        </Button>
      </Buttons>
      </Details>

      <Hr/>
      <Channel>
        <ChannelInfo>
           <ChannelImage src={vidVideou.img}/>
           <Channeld>
            <ChannelName>
              {vidVideou.name}
            </ChannelName>
            <SubscribersCount>

              <span style={{fontSize:"12px",fontWeight:"350"}}>13M</span> Subscribers

            </SubscribersCount>

            <ChannelDesc>
           {vidVideo.desc}

            </ChannelDesc>

           </Channeld>

        </ChannelInfo>
         <SubscribeButton onClick={handleSubscribe} subscribed = {subscribed} >
         {subscribed ? "SUBSCRIBED" : "SUBSCRIBE" } 
        </SubscribeButton>
       
      </Channel>

      <Hr/>
      <Comments vidVideo = {vidVideo} />


    </Content>

    <Recommendation>
     <RecommendCard/>
     <RecommendCard/>
     <RecommendCard/>
     <RecommendCard/>
     <RecommendCard/>
     <RecommendCard/>
     <RecommendCard/>
     <RecommendCard/>
     <RecommendCard/>
     <RecommendCard/>
     <RecommendCard/>
    </Recommendation>


    </Container>
    
    
   
  )
}

export default Video