import React from 'react'
import {logInSuccess,logInFailer} from "../Redux/userRedux"
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import axios from "axios"
import { Url } from '../utils/varData.js'



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
align-items:center;
justify-content:center;
flex-direction:column;
gap:10px;


`


const Items = styled.div`
`

const Lable = styled.div`
color:white;
margin-bottom:5px;
`

const Input = styled.input`
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

const SignIn = ({signIn,setsignIn,userDetails,setuserDetails,Reg,setReg}) => {

    const dispatch = useDispatch()


      
  // handle signin data change

  const handleChange = (e) => {
  
    setuserDetails({
      ...userDetails,[e.target.name] : e.target.value
    })
  
  }



// handle form submission

const handleSubmit = async (e) => {
  e.preventDefault()

  

  try{

    const user = await axios.post(`${Url}/users/login`,userDetails)

    console.log(user.data)

    dispatch(logInSuccess(user.data))

   setsignIn(!signIn)

    alert(`login succesfull`)

  }catch(err){
    console.log(err)
    dispatch(logInFailer(err))
  }


}

  return (
<>


  <SignInContainer>

    <Close onClick = {() =>  setsignIn(!signIn)}>X</Close>

<Items>
<Lable>SIGN IN</Lable>

</Items>

<Items>
<Lable>Name</Lable>
<Input name="name" placehoder="Name" onChange={handleChange}/>
</Items>

<Items>
<Lable>Email</Lable>
<Input name="email" placehoder="Email" onChange={handleChange}/>
</Items>

<Items>
<Lable>Password</Lable>
<Input name="password" placehoder="Password" onChange={handleChange}/>
</Items>


<Submit>
<Input type="submit" name="submit" placehoder="Password" onClick={handleSubmit}/>
</Submit>

<Lable  onClick={() => setReg(!Reg)}> {Reg ? "Login Here" : "Register Here" }</Lable>

</SignInContainer>


</>
  )
}

export default SignIn