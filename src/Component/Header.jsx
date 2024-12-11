import styled from 'styled-components';
import Button from '/src/Component/Button.jsx'
import React from 'react'

const Header = () => {
  return (
    <Container>
        <div class='logo'>
            <img src="/logo.png" alt="vanish logo" />
        </div>
        <div class='nav'>
            <ul>
                <a href="/"><li>Home</li></a>
                <a href="/services"><li>Services</li></a>
                <a href="/about-us"><li>About Us</li></a>
            </ul>
        </div>
        <div class='btn'>
        <Button name='Sign Up' bgcolor='#126A10' color='white'/>
        <Button name='Log In' bgcolor='white' color='#126A10'/>
            
            
        </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow:.5px 0.1px 8px;
  position: sticky;
  top: 0px;
  z-index: 3;
  background-color: white;


  .logo{
    img{
      width:150px;
    }
  }

  .nav{
    a{
      text-decoration: none;
    }
    ul{
        list-style: none;
        display: flex;
        gap: 40px;
        
        li{
        cursor: pointer;
       
        }
        li:hover{
          color: #126A10;
          text-decoration: underline;
          font-size: 18px;
          transition: font-size 0ms.7 ease;
        }
    }
  }
  .btn{
    display:flex;
    gap: 10px;
    .btn1{
    width: 140px;
    height: 40px;
    border-radius: 15px;
    background-color: #126A10;
    color: white;
    border: none;
    cursor: pointer;
    margin-right: 20px;
  }
  .btn2{
    width: 140px;
    height: 40px;
    border-radius: 15px;
    background-color: white;
    color: #126A10;
    border: 1px solid #126A10;
    cursor: pointer;
  }

  }
  `