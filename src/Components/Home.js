import React from 'react'
import styled from 'styled-components'
import homeMain from '../Assets/home-main.svg'
import Typewriter from 'typewriter-effect'
function Home() {
    return (
       
            <Section>
                <Text>
                    <h1>Hello There!<Wave>👋🏻</Wave></h1>
                    <h2>I am <span>Ahmed Hassan</span></h2>
                    <TypewriterWrapper>
                        <Typewriter
                            options={{
                                strings: ['Web App Developer', 'Open Source Contributor', 'PWA Developer', 'MERN Stack Developer'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 10,

                            }}
                        />
                    </TypewriterWrapper>
                </Text>
                <Image src={homeMain} />


            </Section>
        
    )
}

export default Home


const Section = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20vh;
    @media (max-width: 760px){
        flex-direction: column;
        padding: 10vh;
        justify-content: center;
    }
`
const Text = styled.div`
    
    h1{
        font-size: 42px;
        letter-spacing: 2px;
        @media (max-width: 760px){
            font-size: 30px;
        }
    }
    h2{
        font-size: 36px;
        letter-spacing: 1.8px;
        margin-bottom: 80px;
        @media (max-width: 760px){
            margin-bottom: 50px;
            font-size: 24px;
        }
        span{
            color: purple;
            font-weight: bold;
        }
    }
    
`
const Image = styled.img`
    height: 400px;
    width: 400px;
    opacity: 0.8;
    @media (max-width: 760px){
        height: 300px;
    }
`
const Wave = styled.text`
    padding-left: 10px;
    animation-name: wave-animation;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
`
const TypewriterWrapper = styled.text`
    color: purple;
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 760px){
        font-size: 20px;
    }    
`
