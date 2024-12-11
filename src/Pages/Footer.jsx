import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <div className='footer-text'>
            <div>
                <img src="/smallCar.png" alt="" />
                <h2>Vanish</h2>
                <p>We are here to support you every <br /> step of the way</p>
            </div>
            <div>
                <h4>Support</h4>
                <p>Getting Started</p>
                <p>FAQs</p>
                <p>Help Articles</p>
            </div>
            <div>
                <h4>Legal</h4>
                <p>Terms and Conditions</p>
            </div>
            <div>
                <h4>Services</h4>
                <p>Shipment Tracking</p>
                <p>Route Optimization</p>
                <p>Inventory Management</p>
                <p>Freight Management</p>
                <p>Real-Time Analytics</p>
            </div>
        </div>
        <hr />
        <div className='footer-socials'>
            <div>
                <img src="/facebook.png" alt="" />
                <img className='youtube' src="/youtube.png" alt="" />
            </div>
            <div><h3>INFINITY DEVS 2024 @ All RIghts Reserved</h3></div>
        </div>

    </Container>
  )
}

export default Footer

const Container = styled.div`
background-color: black;
color: white;
/* height: 250px; */

p{
    font-size: 13px;
    margin:10px 0px 10px 0px;
}

.footer-text{
    display: flex;
    justify-content: space-evenly;
    gap: 110px;
    padding: 60px 30px 0px 30px;
    margin-top: 80px;
    margin-bottom: 30px;
    flex-wrap: wrap;
     
}
hr{
        width:1200px;
        margin:auto;
    }

.footer-socials{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    /* padding: 20px 30px; */
    margin-top: 10px;
    width:1200px;
    margin: auto;

    .youtube{
        width: 40px;
    }
}

    
`