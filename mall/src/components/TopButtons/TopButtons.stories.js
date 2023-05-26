import TopButtons from "./TopButtons";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

   const TopButtonsContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   margin-top: 10px;

    button{
    display:flex;
    flex-direction:column;
    border:none;
    background: rgba(0, 0, 0, 0);
    justify-content: center; /* 수직 중앙 정렬 */
    align-items: center; /* 수평 중앙 정렬 */
    margin: 10px;

    img {
        padding-bottom: 10px; /* 이미지 아래쪽에 8px 패딩 설정 */
    }
    }
`;

export default {
    title:"Myself/TopButtons",
    component: TopButtons, 
    parameters:{
    backgrounds:{default:'light'},
    controls: { hideNoControlsWarning: true },
    },
   };

   const Template = (args) =>{
    return(
        <BrowserRouter>
        <TopButtonsContainer>
        <TopButtons label={args.label}/>
        </TopButtonsContainer>
        </BrowserRouter>
    )
        
   };

  export const DefaultTopButtons =(args) => <Template {...args}></Template>

   export const ChangesTopButtons = (args) => <Template {...args}></Template>
   ChangesTopButtons.args ={
    label : ['Text1','Text2','Text3','Text4','Text5'], 
   }