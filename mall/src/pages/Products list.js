import React from "react";
import styled from "styled-components";
import button_전체 from "../img/전체.png";
import button_상품 from "../img/상품.png";
import button_카테고리 from "../img/카테고리.png";
import button_기획전 from "../img/기획전.png";
import button_브랜드 from "../img/브랜드.png";
import Itemrender from "../components/Itemrender";
import { useEffect,useState } from "react";
import axios from "axios";



export const TopButtons = styled.div`
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

function Productslist(){

  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

    useEffect(() => {
        axios
          .get('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
          .then(response => {
            console.log(response.data); // 받은 데이터 확인
            setProducts(response.data); // 받은 데이터로 products 상태 업데이트
          })
          .catch(error => {
            console.log("에러:", error);
          });
      }, []);

return(
    <>
    <TopButtons>
    <button className="전체">
    <img src={button_전체} alt="icon"></img>
    <span>전체</span>
    </button>
    <button className="상품">
    <img src={button_상품} alt="icon"></img>
    <span>상품</span>
    </button>
    <button className="카테고리">
    <img src={button_카테고리} alt="icon"></img>
    <span>카테고리</span>
    </button>
    <button className="기획전">
    <img src={button_기획전} alt="icon"></img>
    <span>기획전</span>
    </button>
    <button className="브랜드">
    <img src={button_브랜드} alt="icon"></img>
    <span>브랜드</span>
    </button>
    </TopButtons>
    <Itemrender products={products} setSelectedProductId={setSelectedProductId}/>
    </>
)
}

export default Productslist;