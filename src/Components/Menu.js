import React from 'react'
import styled from "styled-components"
import youtubeLogo from "../img/youtube_logo.png"
import {AiFillHome} from "react-icons/ai"
import {MdOutlineExplore} from "react-icons/md"
import {MdOutlineSubscriptions} from "react-icons/md"
import {MdOutlineVideoLibrary} from "react-icons/md"
import {MdHistory} from "react-icons/md"
import {MdOutlineLibraryMusic} from "react-icons/md"
import {MdOutlineSportsBasketball} from "react-icons/md"
import {MdOutlineGamepad} from "react-icons/md"
import {MdOutlineMovie} from "react-icons/md"
import {BiNews} from "react-icons/bi"
import {MdLiveTv} from "react-icons/md"
import {FiSettings} from "react-icons/fi"
import {GoReport} from "react-icons/go"
import {FiHelpCircle} from "react-icons/fi"
import {MdOutlineLightMode} from "react-icons/md"
import {MdOutlineAccountCircle} from "react-icons/md"
import {HiOutlineMoon} from "react-icons/hi"
import {Link} from "react-router-dom"


const Container = styled.div`
flex:1;
background-color:${({theme}) => theme.bgLighter};
height:100vh;
color:${({theme}) => theme.text};
font-size:14px;
position:sticky;
top:0;
`

const Wrapper = styled.div`
padding:18px 26px;

`

const Logo = styled.div`
display:flex;
align-items:center;
gap:5px;
font-weight:bold;
margin-bottom:25px;
`

const Img = styled.img`
  heigh:25px;
  width:30px;
`

const Items = styled.div`
  display:flex;
  align-items:center;
  gap:20px;
  cursor:pointer;
  height:30px;
  font-weight:500;
  margin-bottom:5px;
`

const Hr = styled.hr`
margin:15px 0px;
border:0.5px solid ${({theme}) => theme.soft};
`

const Login = styled.div`

`

const Title = styled.div`
   font-size: 14px;
   font-weight:500;
   color:#aaaaaa;
   margin-bottom:20px;

`

const Button = styled.button`
padding:5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:3px;
font-weight:500;
margin-top:10px;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`

const UploadButton = styled.button`
padding:5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:3px;
font-weight:500;
margin-top:10px;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`


const Menu = ({darkMode,setdarkMode,signIn,setsignIn,upload,setupload}) => {
 



    
     

    
  return (

    <Container>
        <Wrapper>

          <Link to="/" style={{color:"inherit"}}>
          <Logo>
            <Img src={youtubeLogo}/>
            Ptube
          </Logo>

          </Link>
         

          <Items>
            <AiFillHome style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>Home</p>
          </Items>

          <Items>
            <MdOutlineExplore style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>explore</p>
          </Items>

          <Items>
            <MdOutlineSubscriptions style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>Subscriptions</p>
          </Items>

          <Hr/>

          <Items>
            <MdOutlineVideoLibrary style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>Library</p>
          </Items>

          <Items>
            <MdHistory style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>History</p>
          </Items>

          <Hr/>

          <Login>
            Sign in to like the videos,comment and subscribe.
            <Button onClick={() => setsignIn(!signIn)}> <MdOutlineAccountCircle style={{height:"20px",width:"20px"}} />{!signIn ? "Sign In" : "Sign Out" } </Button>
          </Login>

          <Login>
            Sign in to like the videos,comment and subscribe.
            <UploadButton onClick={() => setupload(!upload)}> upload </UploadButton>
          </Login>

          <Hr/>

          <Title>
            Best Of Ptube
          </Title>

          <Items>
            <MdOutlineLibraryMusic style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>Music</p>
          </Items>

          <Items>
            <MdOutlineSportsBasketball style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>Sports</p>
          </Items>

          <Items>
            <MdOutlineGamepad style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>Gaming</p>
          </Items>

          <Items>
            <MdOutlineMovie style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>Movies</p>
          </Items>

          <Items>
            <BiNews style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>News</p>
          </Items>

          <Items>
            <MdLiveTv style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>Live</p>
          </Items>

          <Hr/>

          <Items>
            <FiSettings style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>Settings</p>
          </Items>

          <Items>
            <GoReport style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>Reports</p>
          </Items>

          <Items>
            <FiHelpCircle style={{height:"25px",width:"25px"}}/>
            <p style={{marginTop:"5px"}}>Help</p>
          </Items>

          <Items>
            {darkMode ? <HiOutlineMoon style={{height:"25px",width:"25px"}}/> : <MdOutlineLightMode style={{height:"25px",width:"25px"}}/>}
            <p style={{marginTop:"5px"}}  onClick={() => setdarkMode(!darkMode)}>{darkMode ? "Light Mode" : "Dark Mode"}</p>
          </Items>
       </Wrapper>
    </Container>
    
  )
}

export default Menu