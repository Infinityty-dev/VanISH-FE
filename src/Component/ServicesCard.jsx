import React from 'react'
import styled from 'styled-components'


const ServicesCard = (props) => {
  return (
    <Container>

      <div className='Container'>
      <div> {props.img}</div>
        <h2>{props.title}</h2>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
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
  height: 250px;
  border-radius: 25px;
  padding: 30px;

  h2{
    margin-bottom: 15px;
    color:#126A10;
  }

  div{
    background-color: #8080803b;
    border-radius: 10px;
    color:#126A10;
    display: inline-block;
    width:30px;
    height: 30px;
    text-align: center;
    align-content: center;
    margin-bottom: 15px;

    img{
      width: 30px;
    }
  }
}
  
`