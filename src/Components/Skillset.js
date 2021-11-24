import React from 'react'
import styled from 'styled-components'
import { FaReact, FaNodeJs, FaHtml5, FaGit } from 'react-icons/fa'
import { SiCodesandbox,SiPostman,SiExpress, SiMongodb, SiCss3, SiPython, SiCsharp, SiDotnet, SiFirebase, SiMysql, SiMaterialui } from 'react-icons/si'
import { DiJavascript1, DiLinux, DiVisualstudio, DiGithub, DiEclipse  } from 'react-icons/di'
import { CgCPlusPlus } from "react-icons/cg";

function Skillset() {
    return (
        <Container>
            <Section1>
                <h1>Professional <span>Skillset</span></h1>
                <Skills>
                    <Wrap>
                        <FaHtml5/>
                    </Wrap>
                    <Wrap>
                        <SiCss3/>
                    </Wrap>
                    <Wrap>
                        <DiJavascript1/>
                    </Wrap>
                    <Wrap>
                        <FaReact/>
                    </Wrap>
                    <Wrap>
                        <SiMaterialui/>
                    </Wrap>
                    <Wrap>
                        <FaNodeJs/>
                    </Wrap>
                    <Wrap>
                        <SiExpress/>
                    </Wrap>
                    <Wrap>
                        <SiMongodb/>
                    </Wrap>
                    <Wrap>
                        <SiMysql/>
                    </Wrap>
                    <Wrap>
                        <SiFirebase/>
                    </Wrap>
                    <Wrap>
                        <FaGit/>
                    </Wrap>
                    <Wrap>
                        <SiPython/>
                    </Wrap>
                    <Wrap>
                        <SiCsharp/>
                    </Wrap>
                    <Wrap>
                        <SiDotnet/>
                    </Wrap>
                    <Wrap>
                        <CgCPlusPlus/>
                    </Wrap>
                </Skills>
            </Section1>
            <Section2>
                <h1><span>Tools</span> I Use</h1>

                <Tools>
                    <Wrap>
                        <DiLinux/>
                    </Wrap>
                    <Wrap>
                        <DiVisualstudio/>
                    </Wrap>
                    <Wrap>
                        <DiEclipse/>
                    </Wrap>
                    <Wrap>
                        <SiPostman/>
                    </Wrap>
                    <Wrap>
                        <SiCodesandbox/>
                    </Wrap>
                </Tools>

            </Section2>
        </Container>
    )
}

export default Skillset

const Container = styled.div`
    width: 100vw;
    height: 160vh;
    padding: 20vh;
    display: flex;
    flex-direction: column;
    span {
        color: purple;
        font-weight: bold;
    }
`
const Section1 = styled.div`
    h1{
        text-align: center;
        font-size: 42px;
        letter-spacing: 2px;
        
        @media (max-width: 760px){
            font-size: 30px;
        }
    }
`
const Skills = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    padding: 30px 0 26px;
`
const Wrap = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgba(0 0 0 / 60%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    text-align: center;
    font-size: 80px;
    padding-top: 10px;
    &:hover{
        box-shadow: rgba(0 0 0 / 60%) 0px 26px 30px -10px,
        rgba(0 0 0 / 73%) 0px 16px 10px -10px;
        transform: scale(1.3);
        border-color: purple;
        color: purple;
        
    }
`
const Section2 = styled(Section1)`
    margin-top: 50px;
`
const Tools = styled(Skills)`
    
`