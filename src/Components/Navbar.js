import React from 'react'
import styled from "styled-components"
import {AiOutlineSearch} from "react-icons/ai"
import {MdOutlineAccountCircle} from "react-icons/md"
import {AiOutlineMenu} from "react-icons/ai"


const Container = styled.div`
position:sticky;
top:0;
background-color:${({theme}) => theme.bg}
height:56px;

`

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
margin:10px;
height:100%;
padding:0px 20px;
position:relative;
`


const Search = styled.div`
position:absolute;
left:0;
right:0;
margin:auto;
width:40%;
display:flex;
align-items:center;
justify-content:space-between;
padding:5px;
border:1px solid #ccc;
border-radius:3px;

`

const Input = styled.input`
border:none;
background-color:transparent;
`





const Button = styled.button`
padding:5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:3px;
font-weight:500;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`

const Navbar = ({OpenMenu,setOpenMenu}) => {
  return (
    <>
      <Container>
        <Wrapper>

<AiOutlineMenu style={{color:"white",position:"absolute",left:"20px"}} onClick={()=> setOpenMenu(!OpenMenu)}/>
          <Search>
            <Input placeholder="search"/>
            <AiOutlineSearch/>
          </Search>

        
            <Button> 
              <MdOutlineAccountCircle style={{height:"20px",width:"20px"}} /> Sign In 
            </Button>
         

        </Wrapper>
      </Container>
    </>
  
  )
}

export default Navbar