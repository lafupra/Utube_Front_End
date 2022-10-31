import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Comment from "./Comment"
import axios from "axios"
import { Url } from '../utils/varData'
import {useSelector} from "react-redux"

const Container = styled.div`
`
const NewComment = styled.div`
display:flex;
align-items:center;
width:100%;
gap:20px;
`
const ChannelImage = styled.img`
width:36px;
object-fit:cover;
height:36px;
border-radius:50%;
background-color:#999;
`

const Input = styled.input`
border:none;
border-bottom:1px solid ${({theme}) => theme.Soft};
background-color:transparent;
outline:none;
padding:5px;
width:100%;
color:${({theme}) => theme.text}
`
const Submit = styled.button`
`

const Comments = ({vidVideo}) => {
const[tvidComments,setTvidComments] = useState([
  {"_id":"635a8b1c87eacb76c7eaedb4","name":"dune","email":"dune@gmail.com","password":"praful26297","img":"https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png","subscribers":["1"],"subscribedUsers":["hello"],"createdAt":new Date()}
])

const User = useSelector(state=> state.user.user)

const [newComment,setnewComment] = useState("")


 

useEffect(() => {

  const getTVidComments = async () => {

    try{
      const comments = await axios.get(`${Url}/comments/${vidVideo._id}`)
    setTvidComments(comments.data)

    }catch(err){
      console.log(err)
    }

    
   

  }

  getTVidComments()



},[vidVideo._id])


const handleSubmit = async (e) => {
  e.preventDefault()

  try{

    const comment = await axios.post(`${Url}/comments/${User._id}`,{videoId:vidVideo._id,desc:newComment},{headers:{
      token : `Bearer ${User.access_token}`
     }})
     console.log(comment)
     
  }catch(err){
    console.log(err)

  }
    
    

     try{
      const comments = await axios.get(`${Url}/comments/${vidVideo._id}`)
    setTvidComments(comments.data)

    }catch(err){
      console.log(err)
    }



setnewComment("")
    

 

}






  return (
    <Container>
        <NewComment>
            <ChannelImage src={User.img}/>
            <Input placeholder="add a comment" onChange={(e) => setnewComment(e.target.value)} value={newComment}/>
            <Submit onClick={handleSubmit}>Add Comment</Submit>
        </NewComment>
  
  {tvidComments.map((comments) => (
    <Comment key={comments._id} comments={comments}/>
  ))}
  
      
    </Container>
  )
}

export default Comments