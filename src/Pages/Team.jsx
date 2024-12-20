import React from 'react'
import TeamCard from '../Component/TeamCard'
import styled from 'styled-components'



const Team = () => {
  return (
    <Container>

        <div className="text">
            <h2>Our <span>Team</span></h2>
            <p>
                Our appgives you unparalleled visibility into your entire logistic network. Whether you are managing a
                <br />single delivery or overseeing thousands,you can track the exact location in real time
            </p>
        </div>


        <div className='cardFlex'>
        <TeamCard image='/public/headshotAvatar.jpeg' 
        name='Samuel Okolie' 
        jobDescription='FullStack Developer'
         about1='An objective driven passionate developer with' 
         about2='proficiency in the MERN stack' 
         about3='' 
         about4=''
         insta='https://google.com'
         x='https://google.com'
         www='https://google.com'
         git='https://google.com'/>



<TeamCard image='/public/headshotAvatar.jpeg' 
        name='Samuel Okolie' 
        jobDescription='FullStack Developer'
         about1='An objective driven passionate developer with' 
         about2='proficiency in the MERN stack' 
         about3='' 
         about4=''
         insta='https://google.com'
         x='https://google.com'
         www='https://google.com'
         git='https://google.com'/>



<TeamCard image='/public/headshotAvatar.jpeg' 
        name='Samuel Okolie' 
        jobDescription='FullStack Developer'
         about1='An objective driven passionate developer with' 
         about2='proficiency in the MERN stack' 
         about3='' 
         about4=''
         insta='https://google.com'
         x='https://google.com'
         www='https://google.com'
         git='https://google.com'/>
        



        <TeamCard image='/public/headshotAvatar.jpeg' 
        name='Samuel Okolie' 
        jobDescription='FullStack Developer'
         about1='An objective driven passionate developer with' 
         about2='proficiency in the MERN stack' 
         about3='' 
         about4=''
         insta='https://google.com'
         x='https://google.com'
         www='https://google.com'
         git='https://google.com'/>




<TeamCard image='/public/headshotAvatar.jpeg' 
        name='Samuel Okolie' 
        jobDescription='FullStack Developer'
         about1='An objective driven passionate developer with' 
         about2='proficiency in the MERN stack' 
         about3='' 
         about4=''
         insta='https://google.com'
         x='https://google.com'
         www='https://google.com'
         git='https://google.com'/>




<TeamCard image='/public/headshotAvatar.jpeg' 
        name='Samuel Okolie' 
        jobDescription='FullStack Developer'
         about1='An objective driven passionate developer with' 
         about2='proficiency in the MERN stack' 
         about3='' 
         about4=''
         insta='https://google.com'
         x='https://google.com'
         www='https://google.com'
         git='https://google.com'/>





<TeamCard image='/public/headshotAvatar.jpeg' 
        name='Samuel Okolie' 
        jobDescription='FullStack Developer'
         about1='An objective driven passionate developer with' 
         about2='proficiency in the MERN stack' 
         about3='' 
         about4=''
         insta='https://google.com'
         x='https://google.com'
         www='https://google.com'
         git='https://google.com'/>
        </div>
    </Container>
  )
}

export default Team
const Container = styled.div`
background-color: #fafafa;
    
    .text{
    text-align: center;
   padding-top: 100px;

    h2{
        font-size: 35px;
        margin-bottom: 30px;

        span{
            color: #126A10;
            font-weight: bold;
        }
    }
}

.cardFlex{
    padding: 60px 0px 60px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap:wrap;

}
`
