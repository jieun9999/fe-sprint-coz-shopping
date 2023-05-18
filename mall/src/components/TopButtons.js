import button_전체 from "../img/전체.png";
import button_상품 from "../img/상품.png";
import button_카테고리 from "../img/카테고리.png";
import button_기획전 from "../img/기획전.png";
import button_브랜드 from "../img/브랜드.png"
import { useState } from "react";
import "../App.css";

function TopButtons({ buttonType, setButtonType}){

    const [isActive, setIsActive] = useState([true, false, false, false, false]);

    const handleButtonClick = (index, type) =>{
            let newIsActive = [...isActive];
            newIsActive.fill(false);
            newIsActive[index] = true;
            setIsActive(newIsActive); 
            setButtonType(type);
    }

return(
    <>
    {/* 새로운 함수를 생성하여 setButtonType 함수를 호출하므로 문제가 발생하지 않습니다 - 화살표함수 or 새로운 함수 */}
    <button onClick={()=>{handleButtonClick(0,'All')}} className={isActive[0] ? "button_active": "button_normal"}>
    <img src={button_전체} alt="icon"></img>
    <span>전체</span>
    </button> 
    <button onClick={()=>{handleButtonClick(1,'Product')}} className={isActive[1] ? "button_active": "button_normal"}>
    <img src={button_상품} alt="icon"></img>
    <span>상품</span>
    </button>
    <button onClick={()=>{handleButtonClick(2,'Category')}} className={isActive[2] ? "button_active": "button_normal"}>
    <img src={button_카테고리} alt="icon"></img>
    <span>카테고리</span>
    </button>
    <button onClick={()=>{handleButtonClick(3,'Exhibition')}} className={isActive[3] ? "button_active": "button_normal"}>
    <img src={button_기획전} alt="icon"></img>
    <span>기획전</span>
    </button>
    <button onClick={()=>{handleButtonClick(4,'Brand')}} className={isActive[4] ? "button_active": "button_normal"}>
    <img src={button_브랜드} alt="icon"></img>
    <span>브랜드</span>
    </button>
    </>
)
}

export default TopButtons;