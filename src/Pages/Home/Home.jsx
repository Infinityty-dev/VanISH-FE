import styled from 'styled-components';
import Button from '/src/Component/Button.jsx'
// import { MdSpeed } from "react-icons/md";


import ServiceCard from '/src/Component/ServicesCard.jsx'
// import styled from 'styled-components'
// import Button from '/src/Component/Button.jsx'
import { IoTimeSharp } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";
import { PiFolderOpen } from "react-icons/pi";
function Home() {
    return(
       <Container>
        <div class='hero'>
                <div className='hero-text'>
                    <h1>
                        Effortless <br/>Logistic, Every<br/> Step of the Way
                    </h1>
                    <p>
                        Manage your shipments, track in real time, and <br />
                        get the best rates-all from one platform.
                    </p>
                </div>
                <div className = 'hero-form'>
            <h2>Move from A to Z</h2>
            <p>Track your van every step of the way</p>
            <hr/>
            <form >
                    <label>Pick Up Location</label> <br/>
                    <input className='input1' type='text' placeholder='pick up location'/>
                    <img className='img1' src="/location.png" alt="vanish logo"  /><br/>
                    <br/>

                    <label>Drop Off Location</label> <br/>
                    <img className='img2' src="/location.png" alt="vanish logo" /><input className='input2'  type='text' placeholder='drop off location'/><br/>
                    <div className='form-cards'>
                        <div>
                        <img src="/location.png" alt="vanish logo" />
                            <p>Schedule</p>
                        </div>
                        <div>
                        <img src="/speedTruck.png" alt="vanish logo" />
                            <p>Instant</p>
                        </div>
                        
                    </div>

                    <label for='services'>Services</label> <br/>
                    <select name="services" id="services">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                    <div className='form-button'><Button name='Book Now' bgcolor='rgb(18, 106, 16)' color='white'/></div>
            </form>

            
                </div>
        </div>

        <section id='services'>

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
        </section>
           
          
            
       

       </Container>

    )
}

export default Home
const Container = styled.div`
html{
    scroll-behavior: smooth;
}

.hero{
    /* border: 1px solid red; */
display: flex;
justify-content: space-around;
align-items:center;
height:85vh;
color:green;
background:linear-gradient(to left,rgba(255,255,255,0)0%,rgba(255,255,255,50)100%),
            url('/hero-image.png') center/cover no-repeat;
}

.hero-text{
    /* border: 1px solid red; */
    h1{
        font-size:70px;
        margin-bottom:30px;
        
    }
    p{
    font-size:25px;
    color:black;
    }
}
    
.hero-form{
    /* border:solid 1px black; */
    background-color:white;
    background-image:url('/Vector.png');
    background-repeat:  repeat;
    background-size: 30px 30px;
    max-width:550px;
    height:75vh;
    padding:50px;
    border-bottom-right-radius:30px;
    border-top-right-radius:30px;

    h2,p,hr,label{
        margin-bottom:10px;
    }
    select{
        width:100%;
        margin-bottom: 20px;
    }
    input{
        text-align: right;
        height:26px;
        width: 100%;
        margin-bottom: 10px;
        /* border:none; */
    }
    .form-input{
        border:1px solid black;
        /* height:30px; */
        background-color:white;
        align-content:center;
    }
    label{
        margin-bottom:10px;
    }
    form{
        position: relative;
    }
    .img1,.img2{
        position: absolute;
        left: 10px;

    }
   

    .form-cards{
        display:flex;
        justify-content:space-between;
        align-items:center;
        
        div{
            background-color: #8080808b;
            text-align:center;
            width:70px;
            margin-bottom:10px;
            padding:10px 0px 10px 0px;
            border-radius:10px;
        }
    }
    .form-button{
        /* margin-top:20px; */
        text-align:center;
    }
}
section{
    background-image:url('/Vector.png');
    background-repeat:  repeat;
    background-size: 30px 30px;

  .text-div{
    padding-top: 70px;
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
    
    background-color: #ffb6c161;
    padding: 20px;
    width: 1100px;
    margin: auto;
    margin-bottom: 100px;

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
}

`