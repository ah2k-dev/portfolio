import React from 'react'
import styled from 'styled-components'
import capImg from '../Assets/cap.svg'
function Education() {
    return (
        <Container>
            <CapImg src ={capImg} />
            <Text>
                <h1><span>{"-->"}</span>    Bachelor's in Software Engineering <span>(BSSE)</span></h1>
                <ul>
                    <li>I've graduated from <span>Iqra University</span></li>
                    <li>In year from <span>2018</span> to <span>2022</span></li>
                    <li>With a CGPA of <span>3.0</span> on the scale of 4.0</li>
                </ul>
                <h1><span>{"-->"}</span>    Higher Secondary School <span>(HSSC)</span></h1>
                <ul>
                    <li>I've done my Higher Secondary School Certification from <span>NCR CET College</span></li>
                    <li>In year from <span>2015</span> to <span>2017</span></li>
                    <li>With a Grade <span>A</span></li>
                </ul>
                <h1><span>{"-->"}</span>    Secondary School <span>(SSC)</span></h1>
                <ul>
                    <li>I've done my Secondary School Certification from <span>CAA Model School and College</span></li>
                    <li>In year <span>2015</span></li>
                    <li>With a Grade <span>A</span></li>
                </ul>
                
            </Text>
        </Container>
    )
}

export default Education
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-bottom: 20vh;
    padding-top: 20vh;
    display: flex;
`
const Text = styled.div`
    width: 70vw;
    span{
        color: purple; 
        font-weight: bold;
    }
    h1{
        text-align: left;
        font-size: 30px;
        letter-spacing: 2px;
        
        @media (max-width: 760px){
            font-size: 30px;
        }
    }
    ul {
        font-size: 20px;
        line-height: 1.5;
        list-style: none; 
    }
    
    li {
        padding-left: 16px;
    }
    
    li::before {
        content: "-->"; 
        padding-right: 16px;
        color: purple; 
    }
`
const CapImg = styled.img`
    width: 30vw;
`