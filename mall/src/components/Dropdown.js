import React from "react";
import styled from "styled-components";

export const Bigbox = styled.div`
display: flex;
flex-direction: column;
align-items: end;
margin-right: 5vw;
padding: 0px;
position: absolute;
left: 0%;
right: 0%;
top: 5.5rem;
bottom: 0%;
background: #FFFFFF;
border-radius: 12px;

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
    <div id ="box2">🎁 상품리스트 페이지</div>
    <div id ="box3">⭐️ 북마크 페이지</div>
    </Bigbox>

    )
}

export default Dropdown;