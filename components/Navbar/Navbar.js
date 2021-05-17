import React from "react";
import styled from "styled-components";
import { navLinks } from "../../lib/constants";

const Header = styled.header`
    background-color: var(--primary-color);
    color: #fff;
    display: flex;
    align-items center;
    justify-content: space-between;
    padding: 10px 16px;

    @media (min-width: 768px){
        padding: 8px 32px;
    }
`

const Logo = styled.a`
    width: 40px;
    position: relative;
    z-index: 101;
`

const Toggler = styled.button`
    border: none;
    background-color: transparent;
    padding: 5px;
    position: relative;
    z-index: 101;
    display: none;
    cursor: pointer;

    .bar{
        display: block;
        height: 2px;
        width: 25px;
        border-radius: 2px;
        background-color: #fff;
        margin-bottom: 4px;
        transition: transform 500ms ease, opacity 500ms ease;

        &:last-child{
            margin-bottom: 0;
        }
    }

    @media (max-width: 680px){
        display: block;
    }

    &.nav-opened .bar:nth-child(1){
        transform: translateY(6px) rotate(45deg);
    }

    &.nav-opened .bar:nth-child(2){
        opacity: 0;
    }

    &.nav-opened .bar:nth-child(3){
        transform: translateY(-6px) rotate(-45deg);
    }

`


const Nav = styled.nav`

    .nav-link{
        text-decoration: none;
        padding: 0;
        margin: 0;
        color: #fff;
        margin: 0 16px 0 0;

        @media (max-width: 680px){
            margin: 0 0 25px 0;
        }

        &:last-child{
            margin: 0;
        }
    }

    @media (max-width: 680px){
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-color);
        transform: translateX(-100%);
        transition: transform 500ms ease;
    }

    &.nav-opened{
        transform: translateX(0px);
    }
`

function Navbar(){
    const [isOpened, setIsOpened] = React.useState(false);

    const handleClick = () => {
        setIsOpened(!isOpened);
    }

    const className = isOpened ? "nav-opened" : "";

    return (
        <Header>
            <Logo href="/">
                <img src="/images/logo.png" alt="logo" />
            </Logo>

            <Toggler onClick={handleClick} className={className}>
                {[...new Array(3)].map((_, i) => <span key={i} className="bar"></span>)}
            </Toggler>

            <Nav className={className}>
                {
                    navLinks.map(({name, href}, i) => (
                        <a className="nav-link" href={href} key={i}>{name}</a>
                    ))
                }
            </Nav>
        </Header>
    )
}

export default Navbar;


