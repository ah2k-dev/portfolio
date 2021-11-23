import React from 'react'
import styled from 'styled-components'
import avatar from '../Assets/avatar.svg'
import avatar2 from '../Assets/about.png'
function About() {
    return (
        <Section>
            <About1>
                <Avatar src={avatar} />
                <Text>
                    <h1>About<span> Me</span></h1>
                    <p>Hello, I am <span>Ahmed Hassan</span> from <span>Karachi, Pakistan.</span></p>
                    <p>I am an allround web developer with good knowledge of front-end techniques. I love Data Structures and Algorithms and I also stand for Quality. I love spending time on fixing little details and optimizing web applications.</p>
                    <p>Also I am looking forward to wrok with a team, as the saying goes <span>Two heads are better than one.</span></p>
                    <p>Apart from programming, some other activities that I love to do!
                        <ul>
                            <li>Gaming</li>
                            <li>Tech Blogs</li>
                            <li>Indoor games like Chess and Table Tennis</li>
                            <li>Science Fiction Movies/Series</li>
                        </ul>
                    </p>
                </Text>
            </About1>
            <About2>
                <Text>
                    <h1>Know Who <span>I'M</span></h1>
                    <p>I fell in love with programming a few years ago and I have at least learnt something, I think… 🤷‍♂️</p>
                    <p>I am fluent in classics like <span>JavaScript, Node.js, Asp.net</span>.</p>
                    <p>My field of Interest's are building new <span>Web Applications.</span> and also in areas related to <span>Docker and Kubernetes</span></p>
                    <p>Whenever possible, I also apply my passion for developing products with <span>Express.js</span> and <span>Modern Javascript Library and Frameworks </span> like <span>React.js</span></p>
                </Text>
                <Avatar2 src={avatar2} />
            </About2>
        </Section>
    )
}

export default About

const Section = styled.div`
    width: 100vw;
    padding: 20vh;
    display: flex;
    flex-direction: column;
    
`
const About1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Text = styled.div`
    width: 45vw;
    span{
        color: purple; 
        font-weight: bold;
    }
    h1{
        text-align: center;
        font-size: 42px;
        letter-spacing: 2px;
        
        @media (max-width: 760px){
            font-size: 30px;
        }
    }
    p {
        font-size: 20px;
        line-height: 1.5;
        ul {
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
    }

`
const Avatar = styled.img`
    height: 250px;
`
const Avatar2 = styled.img`
    height: 350px;
`

const About2 = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
`