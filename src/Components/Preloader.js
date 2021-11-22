import React from 'react'
import styled from 'styled-components'
import loader from '../Assets/pre.svg'
function Preloader(props) {
    console.log(props.load);
    return (
        <Container load = {props.load}>
            <img src = {loader} />
        </Container>
    )
}

export default Preloader

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display:flex;
    display: ${props=> props.load == false && `none`};
    align-items: center;
    justify-content: center;
    opacity: 0.8;
`

