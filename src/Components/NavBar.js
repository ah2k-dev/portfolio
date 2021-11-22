import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/logo.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
function NavBar() {
    return (
        <Container>
            <PortfolioLogo>
                <a href="">
                    <img src={logo} />
                </a>
            </PortfolioLogo>

            <Menu>

                <a>
                    <HomeOutlinedIcon />
                    <span>HOME</span>
                </a>
                <a>
                    <PersonOutlineOutlinedIcon />
                    <span>ABOUT</span>
                </a>
                <a>
                    <ArticleOutlinedIcon />
                    <span>EDUCATION</span>
                </a>
                <a>
                    <DvrOutlinedIcon />
                    <span>SKILLSET</span>
                </a>
                <a>
                    <AccountTreeOutlinedIcon />
                    <span>PROJECTS</span>
                </a>
                <a>
                    <AssignmentIndOutlinedIcon />
                    <span>RESUME</span>
                </a>
                <a>
                    <ContactMailOutlinedIcon />

                    <span>CONTACT</span>
                </a>


            </Menu>
            <MenuIconWrapper>

            </MenuIconWrapper>
        </Container>
    )
}

export default NavBar
const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    overflow-x: hidden;
    overflow-y:hidden;
    display: flex;
    align-items: center;
    padding: 0 10px;
    z-index: 1;
    @media (max-width: 760px){
        justify-content: space-between;
    }
`
const PortfolioLogo = styled.div`
    width: 150px;
    height: 70px;
    cursor: pointer;
`
const Menu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 40px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        margin-right: 20px;
        flex-wrap: nowrap;
        cursor: pointer;
        span{
            padding: 5px;
            font-size: 15px;
            font-weight: 600;
            letter-spacing: 1.5px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after {
                transform: scaleX(1);
            }
    }
    @media (max-width: 760px){
        display: none;
    }
`

const MenuIconWrapper = styled.div`

`