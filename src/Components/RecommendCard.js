import React from 'react'
import styled from "styled-components"


const Container = styled.div`
display:flex;
gap:5px;
padding:5px;
width:100%;
margin-bottom:5px;

`

const Img = styled.img`
flex:1;
width:50%;
object-fit:cover;
height:90px;
`

const ChannelInfo = styled.div`
display:flex;
flex-direction:column;
gap:3px;

`

const Title = styled.div`
font-size:15px;
color:${({theme}) => theme.text};
margin-bottom:5px;
max-height:40px;
overflow:hidden;

`


const ChannelName = styled.div`
fon-size:12px;
color:${({theme}) =>  theme.textSoft}

`
const ChannelDetails = styled.div`
font-size:12px;
color:${({theme}) =>  theme.textSoft}
`



const RecommendCard = () => {
  return (
<Container>
<Img src="https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg?cs=srgb&dl=pexels-craig-adderley-3359734.jpg&fm=jpg"/>
<ChannelInfo>
    <Title>
 Hollywood Sign Turn into Hollyweed.
    </Title>
    <ChannelName>
     test name
    </ChannelName>
    <ChannelDetails>
     35k views . 5 years ago
    </ChannelDetails>
</ChannelInfo>
</Container>
  )
}

export default RecommendCard