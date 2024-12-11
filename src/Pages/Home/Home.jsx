import styled from 'styled-components';
import Button from '/src/Component/Button.jsx'
import { MdSpeed } from "react-icons/md";
function Home() {
    return(
       <Container>
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
           
          
            
       

       </Container>

    )
}

export default Home
const Container = styled.div`
/* border: 1px solid red; */
display: flex;
justify-content: space-around;
align-items:center;
height:90vh;
color:green;
background:linear-gradient(to left,rgba(255,255,255,0)0%,rgba(255,255,255,50)100%),
            url('/hero-image.png') center/cover no-repeat;

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

`