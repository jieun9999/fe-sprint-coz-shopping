import React from "react";
import logo from "../img/로고.png"
import icon from "../img/아이콘.png"
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { useState } from "react";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

  div#nav-body {
  width: 100%;
  }

   h1 {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 8rem;
  }

   .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 2rem;
  }

   span {
    margin-right: 55rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 88.02%;
    color: #000000;
  }

   button {
    border: none;
    background-color: white;
    cursor: pointer;
  }
`



function Header() {

   const [isOpen, setIsOpen] = useState(false);

   const openModalHandler = () => {
    isOpen === true ? setIsOpen(false): setIsOpen(true)
   };

    return(
        <HeaderContainer>
        <div id="nav-body">
        <h1 id="title">
        <img className ="logo" src={logo} alt='logo'/>
            <span id="name">COZ Shopping</span>
            <button onClick={openModalHandler}>
                <img src={icon} alt="icon"></img>
            </button>
        </h1>
        </div>
        {isOpen ? <Dropdown/> : null}
        </HeaderContainer>
    )

    
}

export default Header;