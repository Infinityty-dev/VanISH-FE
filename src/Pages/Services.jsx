import React from 'react'
import ServiceCard from '../Component/ServicesCard.jsx'
import styled from 'styled-components'
import Button from '/src/Component/Button.jsx'
import { IoTimeSharp } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";
import { PiFolderOpen } from "react-icons/pi";

const Services = () => {
  return (
    <Container>
       <div className='text-div'>
       <h1>
            Three main <span>services</span>
        </h1>
        <p>
            Our app gives you unparralled visibiility into your entire logistic network. Whether you're <br />managing a single delivery or overseeing thousands, you can track the exact location of every <br /> shipment in real time.
        </p>
       </div>
        <div className='serviceCards'>
            <ServiceCard img ={<IoTimeSharp />} title='Track Every Van In Real Time' text1='Stay updated on your van exact' text2='location with instant tracking' text3='notification'/>
            <ServiceCard img ={<GiPadlock />} title='Items Security' text1='item security is our top priority' text2='' text3=''/>
            <ServiceCard img ={<PiFolderOpen />} title='Clear & No Hidden Fees' text1='Pay exactly what is stated' text2='without unexpected or additional' text3='charges.'/>
        </div>

        <div className='fleet-safety-outer-box'>
          <div className='fleet-safety-text-box'>
            <img className='fleetCar' src="/fleet-car.png" alt="" />
            <h3>Your Fleet's Safety, Our Top Priority</h3>
            <p>Regular safety checks and maintenance are <br />part of our commitment to keeping your fleet <br /> in top condition. Our app schedule and <br />track inspections, ensuring that every <br /> vehicle meets stringent safety standards</p>

            
            <img className='doubleQuote' src="/double-quote.png" alt="" />
          
            
            <div className='service-button'>
              <Button name='Learn More' bgcolor='rgb(18, 106, 16)' color='white'/>
              </div>
          </div>
          
        </div>

        <div className='ratings'>
          <div><h1>10,000+</h1><p>Deliveries Managed</p></div>
          <div><h1>2,500+</h1><p>Active Clients</p></div>
          <div><h1>98%</h1><p>On-time Delivery Rate</p></div>
          <div><h1>200+</h1><p>Industry Awards</p></div>
        </div>

        <div className='revolutionise'>
          <div className='text'>
            <h2>Ready to Revolutionize Your <br /> Logistic Operations ?</h2>
            <p>Join other countless other businesses that have streamlined their <br /> logistics with our cutting-edge solutions</p>
            <div className='revolutionise-button'>
              <Button name='Sign Up' bgcolor='rgb(18, 106, 16)' color='white'/>
              </div>
          </div>
          <div className='image'>
            <img src="/vanAndBoxes.png" alt="" />
          
          </div>

        </div>
    </Container>
  )
}

export default Services
const Container = styled.div`
    background-image:url('/vector.png');
    background-repeat:  repeat;
    background-size: 30px 30px;

  .text-div{
    margin-top: 70px;
    text-align: center;
    h1{
      font-size: 3em;
      color: black;
      margin-bottom: 30px;
    }
    span{
      color: #126A10;
      font-weight: bold;
    }
    p{
      font-size: 18px;
    }
  }
  .serviceCards{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-bottom: 200px;
    gap: 30px;
  }
  .fleet-safety-outer-box{
    width: 1100px;
    height: 500px;
    margin-bottom: 150px;
    margin:auto;
    border-radius: 20px;
    box-shadow:1px 1px 10px ;
    padding: 100px 0px 100px 100px;
    position: relative;
    background-color: #80808014;
  }

  .fleet-safety-text-box{
    width: 800px;
    height: 350px;
    border-radius: 20px;
    box-shadow:1px 1px 2px ;
    padding-left: 40px;
    border: none;
    background-color: #fff;

    .fleetCar{
      position: absolute;
      top: -100px;
      right: -110px;
    }

    h3{
      padding-top: 140px;
      margin-bottom: 10px;
    }
    h1{
      display: inline;
      font-size: 80px;
    }
  }
  .service-button{
    display: inline-block;
    position: absolute;
    bottom: 80px;
    right: 230px;
  }
  .ratings{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 150px;
    margin-bottom: 150px;
    gap: 90px;

    h1{
      font-size: 40px;
      background-image: linear-gradient(90deg, #126A10,#a3a516);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p{
      font-size: 10px;
    }
  }
  .revolutionise{
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-bottom: 100px;
    background-color: #ffb6c161;
    padding: 20px;
    width: 1100px;
    margin: auto;

    .text{
      align-content: center;
      

      h2{
        font-size: 35px;
        color: #126A10;
        margin-bottom: 40px;
      }
      p{
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
        line-height: 1.5;
      }
    }
  }

`