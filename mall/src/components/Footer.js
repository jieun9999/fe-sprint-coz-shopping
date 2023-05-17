import React from "react";
import styled from "styled-components";


export const FooterBody = styled.div`
display: flex;
align-items: center;
color: #888888;
box-sizing: border-box;
width: 100%;
background: #FFFFFF;
border-top: 1px solid rgba(0, 0, 0, 0.1);


 .lineone {
position: absolute;
left: 44.14%;
right: 44.14%;
margin-top: 5rem;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 88.02%;

 }

 .linetwo {
position: absolute;
left: 42.66%;
right: 42.73%;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 88.02%;
margin-top: 7rem;

 }
`

function Footer(){
 return(
 <FooterBody>
 <div className="lineone">개인정보 처리방침 | 이용 약관</div>
 <div className="linetwo">All rigths reserved @ Codestates</div>
 </FooterBody>
 );
        
}

export default Footer;