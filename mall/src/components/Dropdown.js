import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Bigbox = styled.div`
max-height: 19.5vh;
display: flex;
flex-direction: column;
position: absolute;
top: 5.5rem;
bottom: 0%;
background: #FFFFFF;
border-radius: 12px;
padding-right: 4rem;
z-index: 9999;

#box1 {
display:flex;
align-items:center;
justify-content: center;
width: 12rem;
height: 3rem;
flex: none;
order: 0;
flex-grow: 0;
box-sizing: border-box;
border: 1px solid rgba(0, 0, 0, 0.1);
border-bottom: 0px;

}

#box2{
display:flex;
align-items:center;
justify-content: center;
width: 12rem;
height: 3rem;
flex: none;
order: 1;
flex-grow: 0;
box-sizing: border-box;
border: 1px solid rgba(0, 0, 0, 0.1);
border-bottom: 0px;

}

#box3{
display:flex;
align-items:center;
justify-content: center;
width: 12rem;
height: 3rem;
flex: none;
order: 1;
flex-grow: 0;
box-sizing: border-box;
border: 1px solid rgba(0, 0, 0, 0.1);

}
`

function Dropdown(){
    return(
    <Bigbox>
    <div id ="box1">OOO님, 안녕하세요!</div>
    <Link to ="/products/list" style={{ textDecoration:"none", color: "black"}}><div id ="box2">🎁 상품리스트 페이지</div></Link>
    <Link to ="/bookmark" style={{ textDecoration:"none", color: "black"}}><div id ="box3">⭐️ 북마크 페이지</div></Link>
    </Bigbox>
    )
}

export default Dropdown;