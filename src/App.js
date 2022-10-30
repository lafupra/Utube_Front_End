import { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import Menu from "./Components/Menu"
import Navbar from "./Components/Navbar"
import { darkTheme,lightTheme } from "./utils/Theme"
import Home from "./Pages/Home"
import Video from "./Pages/Video"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignIn from "./Components/SignIn"
import Register from "./Components/Register"
import Upload from "./Components/Upload"




const Container = styled.div`
z-index:1;
display:flex;
position:relative;

`


const Main = styled.div`
flex:7;
background-color:${({theme}) => theme.bg};
`

const Wrapper = styled.div`
padding:22px 20px;
`


function App() {
  const [darkMode,setdarkMode] = useState(true)
  const [signIn,setsignIn] = useState(false)
const [userDetails,setuserDetails]  = useState({})
  const [Reg,setReg] = useState(false)
  const [upload,setupload] = useState(false)
 




 

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>


    <Container className="Container" id="ContainerId">
    <BrowserRouter>

      <Menu  setdarkMode={setdarkMode} darkMode={darkMode} signIn={signIn} setsignIn={setsignIn} upload = {upload} setupload = {setupload} />

{signIn && <SignIn signIn = {signIn} setsignIn= {setsignIn}  userDetails={userDetails} setuserDetails={setuserDetails} Reg={Reg} setReg={setReg}/>}

{Reg && <Register signIn = {signIn} setsignIn= {setsignIn}  userDetails={userDetails} setuserDetails={setuserDetails} Reg={Reg} setReg={setReg}/>}
{upload && <Upload upload={upload} setupload={setupload} signIn={signIn} setsignIn={setsignIn}/>}



      <Main className="Main" id="MainId">

      <Navbar/>

      <Wrapper>
   
      <Routes>
        <Route path="/"   element={<Home/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/video/:vid" element={<Video/>}/>
      
        
      </Routes>

     </Wrapper>
  
    </Main>

  </BrowserRouter>
  
  </Container>

    </ThemeProvider>

  );
}

export default App;
