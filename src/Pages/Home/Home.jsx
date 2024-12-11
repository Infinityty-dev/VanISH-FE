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
                <div className='form-input'><img src="/location.png" alt="vanish logo" /><input type='text' placeholder='pick up location'/></div><br/>
                <br/>

                <label>Drop Off Location</label> <br/>
                <div className='form-input'><img src="/location.png" alt="vanish logo" /><input type='text' placeholder='drop off location'/></div><br/>
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

                <label>Services</label> <br/>
                <input type='text'/>

                <div className='form-button'><Button name='Book Now' bgcolor='rgb(18, 106, 16)' color='white'/></div>
            </form>

            
        </div>
           
          
            
       

       </Container>

    )
}

export default Home
const Container = styled.div`

display: flex;
justify-content: space-around;
align-items:center;
height:85vh;
color:green;
background:linear-gradient(to left,rgba(255,255,255,0)0%,rgba(255,255,255,50)100%),
            url('/hero-image.png') center/cover no-repeat;

.hero-text{
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
    border:solid 1px black;
    background-color:white;
    background-image:url('/vector.png');
    background-repeat:  repeat;
    background-size: 30px 30px;
    max-width:550px;
    height:75vh;
    padding:60px;
    border-bottom-right-radius:30px;
    border-top-right-radius:30px;

    h2,p,hr,label{
        margin-bottom:10px;
    }
    input{
        /* width:100%; */
        margin-top:10px;
        height:30px;
        border:none;
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
        margin-top:20px;
        text-align:center;
    }
}

`