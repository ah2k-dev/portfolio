import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import logo from '../Assets/logo.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
function NavBar() {
    let [sidebarStatus, setSidebarStatus] = useState(false)
    const handleOpen = () => {
        setSidebarStatus(true)
    }
    const handleClose = () => {
        setSidebarStatus(false)
    }
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
            <MenuIconWrapper onClick={handleOpen}>
                <MenuOutlinedIcon />
            </MenuIconWrapper>
            <Sidebar status={sidebarStatus}>
               <CloseWrapper>
                   <CustomClose onClick={handleClose} />
               </CloseWrapper>
               <li> <a>
                    <HomeOutlinedIcon />
                    <span>HOME</span>
                </a></li>
               <li> <a>
                    <PersonOutlineOutlinedIcon />
                    <span>ABOUT</span>
                </a></li>
               <li> <a>
                    <ArticleOutlinedIcon />
                    <span>EDUCATION</span>
                </a></li>
               <li> <a>
                    <DvrOutlinedIcon />
                    <span>SKILLSET</span>
                </a></li>
               <li> <a>
                    <AccountTreeOutlinedIcon />
                    <span>PROJECTS</span>
                </a></li>
               <li> <a>
                    <AssignmentIndOutlinedIcon />
                    <span>RESUME</span>
                </a></li>
               <li> <a>
                    <ContactMailOutlinedIcon />

                    <span>CONTACT</span>
                </a></li>
            </Sidebar>
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
    @media (max-width: 1200px){
        justify-content: space-between;
        padding: 0 30px;
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
    @media (max-width: 1200px){
        display: none;
    }
`

const MenuIconWrapper = styled.div`
    cursor: pointer;
    @media (min-width: 1200px){
        display: none;
    }
`
const Sidebar = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 280px;
    z-index: 10;
    color: black;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
        cursor: pointer;
        padding: 15px 0;
        border-bottom: 2px solid rgba(0, 0, 0, 0.4);
        a {
            display: flex;
            align-items: center;
            span {
                margin-left: 10px;
            }
        }
    }

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`