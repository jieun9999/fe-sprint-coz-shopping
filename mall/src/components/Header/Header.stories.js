import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

export default {
 title:"Myself/Header",
 component: Header, 
 parameters:{
 backgrounds:{default:'light'},
 controls: { hideNoControlsWarning: true },
 },
};

// 스토리 구현
export const Default = (args) =>{

    return(
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
    );
};
