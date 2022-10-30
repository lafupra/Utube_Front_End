import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from "axios"
import { Url } from '../utils/varData.js'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import  app from "../fireBase"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"



const SignInContainer = styled.div`
position:absolute;
left:0;
right:0;
top:0;
bottom:0;
margin:auto;
background-color:black;
width:400px;
height:600px;
border-radius:5px;
z-index:3;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:10px;
`


const Items = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

const Lable = styled.div`
color:white;
margin-bottom:5px;
`

const Input = styled.input`
color:black;
background-color:white;

`

const TextArea = styled.textarea`
color:black;
`

const Submit = styled.div`
`

const Close = styled.div`
position:absolute;
right:0;
top:0;
background-color:white;
height:30px;
width:40px;
color:black;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
`

const Upload = ({upload,setupload,signIn,setsignIn}) => {

    const[videoDetails,setvideoDetails] = useState({})
    const [video,setvideo]  = useState(undefined)
    const [image,setimage] = useState(undefined)
    const [imagePerc,setimagePerc] = useState(0)
    const [videoPerc,setvideoPerc] = useState(0)
    const [Tags,setTags] = useState([])
    const User = useSelector(state => state.user.user)
  
   
    const navigate = useNavigate()
  
const handleUpload = async (e) => {
    e.preventDefault()

    try{

      const uploadData = await axios.post(`${Url}/videos/${User._id}`,{...videoDetails,tags:Tags},{headers:{token : `Bearer ${User.access_token}`}})
      console.log(uploadData)
      setupload(!upload)
      alert("upload successfull")

      navigate(`/video/${uploadData.data._id}`)

       

    }catch(err){
      console.log(err)
    }
    

}
      
    // handle database data change
  
    const handleChange = (e) => {
    
        setvideoDetails((prev) => {
            return {...prev,[e.target.name] : e.target.value}
        })
      
      }

// handle Tags 

const handleTags = (e) => {
    setTags(e.target.value.split(","))
}

//   upload file

const uploadFile = (file,urlType) => {

    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name

    const storageRef = ref(storage,fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    urlType === "thumbnailImg" ? setimagePerc(progress) : setvideoPerc(progress)
    
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
        break;
    }
  }, 
  (error) => {

    // Handle unsuccessful uploads
    console.log(error)
  },

  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setvideoDetails((prev) => {
            return {...prev,[urlType] : downloadURL}
        })
      console.log('File available at', downloadURL);
    });
  }

  )
  

}

    // useEffect for video

useEffect(()=> {video && uploadFile(video,"videoUrl")},[video])


    // useEffect for image
        
useEffect(()=> {image && uploadFile(image,"thumbnailImg")},[image])






  
  
  
  
    
  
    return (
      <>
      <SignInContainer>
  
      <Close onClick = {() =>  setupload(!upload)}>X</Close>
  
  <Items>
  <Lable> upload New Video </Lable>
  
  </Items>
  
  <Items>
  <Lable>Title</Lable>
  <Input name="title" placehoder="Name" onChange={handleChange}/>
  </Items>
  
  <Items>
  <Lable>Desciption</Lable>
  <TextArea name="desc" type="text" rows={8} placehoder="Email" onChange={handleChange}/>
  </Items>
  <Items>
  {imagePerc > 0 ? <Lable> {"uploading:" +  imagePerc + "%"} </Lable> :
  <>
    <Lable>Thumbnail Image</Lable>
  <Input name="thumbnailImg" type="file" accept="image/*" placehoder="thumbnail-image" onChange={(e) => setimage(e.target.files[0])}/>
  </>
}
</Items>
  
  

  {videoPerc > 0 ?<Lable> {"uploading:" +  videoPerc + "%"} </Lable> : <Items> <Lable>Video</Lable>
  <Input name="videoUrl" type="file"  accept="video/*" placehoder="video"  onChange={(e) => setvideo(e.target.files[0])}/>
  </Items>}


  <Items>
  <Lable>Tags</Lable>
  <TextArea name="tags" type="text-area" placehoder="tags" onChange={handleTags}/>
  </Items>
  
  
  <Submit>
  <Input type="submit" name="submit" placehoder="submit" onClick={handleUpload}/>
  </Submit>

  

  
  
  </SignInContainer>
      </>
    )
}

export default Upload
