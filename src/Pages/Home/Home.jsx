import Location from "../../Component/Locaton"
// import Map from "../../Component/Map/Map.jsx"
// import Service from "../../Component/Service.jsx"
import styled from 'styled-components';
import Button from '/src/Component/Button.jsx'
import ServiceCard from '/src/Component/ServicesCard.jsx'
import { IoTimeSharp } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";
import { PiFolderOpen } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";


function Home() {
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const output = document.getElementById('output')



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
                            <div className='input1 dropdown-container'>
                              <div>
                              <FaLocationDot size={25} /> 
                              </div>
                              <input id='input1'className='input' type='text' placeholder='pick up location'/>
                              
                            </div>
                            <br/>
                            <br/>


                            <label>Drop Off Location</label> <br/>
                            <div className='input1 input2'>
                              <div>
                              <FaLocationDot size={25} /> 
                              </div>
                              <input id='input2' className='input' type='text' placeholder='drop off location'/>
                                   
                            </div>
                          
                            <div className='form-cards'>
                                <div>
                                <IoIosSpeedometer size={25} color='#126A10 '/>
                                    <p color='black'>Schedule</p>
                                </div>
                                <div>
                                <FaShippingFast size={25} color='#126A10 '/>
                                    <p>Instant</p>
                                </div>
                                
                            </div>

                            <label for='services'>Services</label> <br/>
                            <div className='input1'>
                            <select name="services" id="services">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            </div>
                           <div id='output'></div>

                            <div className='form-button'><Button name='Get A Quote' width= {160} height={48} bgcolor='rgb(18, 106, 16)' color='white'/></div>
                    </form>

                    <img className='heroImage' src="/hero-image.png" alt="" />
            
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
                    <ServiceCard img ={<IoTimeSharp  size={30}/>} title='Track Every Van In Real Time' text1='Stay updated on your van exact' text2='location with instant tracking' text3='notification'/>
                    <ServiceCard img ={<GiPadlock   size={30}/>} title='Items Security' text1='item security is our top priority' text2='' text3=''/>
                    <ServiceCard img ={<PiFolderOpen  size={30}/>} title='Clear & No Hidden Fees' text1='Pay exactly what is stated' text2='without unexpected or additional' text3='charges.'/>
                </div>

                <div className='fleet-safety-outer-box'>
                <div className='fleet-safety-text-box fleet-safety-inner-box'>
                    <img className='fleetCar' src="/fleet-car.png" alt="" />
                    <h3>Your Fleet's Safety, Our Top Priority</h3>
                    <p>Regular safety checks and maintenance are <br />part of our commitment to keeping your fleet <br /> in top condition. Our app schedule and <br />track inspections, ensuring that every <br /> vehicle meets stringent safety standards</p>

                    
                    <img className='doubleQuote' src="/double-quote.png" alt="" />
                
                    
                    <div className='service-button'>
                    <Button className='sbutton'name='Learn More' bgcolor='rgb(18, 106, 16)' color='white' width= {160} height={48}/>
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
                        <Button name='Sign Up' bgcolor='rgb(18, 106, 16)' color='white' width= {160} height={48}/>
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