import React from 'react'
import styled from 'styled-components'

const ServicesCard = (props) => {
  return (
    <Container>
        {/* <img src="{props.image}" alt="" />
        <h2>{props.title}</h2>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
        <p>{props.text4}</p> */}
        <div className='Container'>
            <img src="public/time.png" alt="" />
            <h2>Track Every Van in Real Time</h2>
            <p>Stay updated on your Van exact</p>
            <p>location with instant tracking</p>
            <p>notification</p>
            <p>{props.text4}</p>
        </div>
    </Container>
  )
}

export default ServicesCard
const Container = styled.div`

.Container{
  border: 2px solid rgba(22, 226, 18);
  width:350px;
  height: 200px;
  border-radius: 10px;
}
  
`