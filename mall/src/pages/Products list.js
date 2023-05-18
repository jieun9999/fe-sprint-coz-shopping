import React from "react";
import styled from "styled-components";
import ItemByButtons from "../components/ItemByButtons";
import TopButtons from "../components/TopButtons";
import { useEffect,useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";

export const ItemContainer =styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;

img{
  border-radius: 12px;
  width: 20vw;
}

h3 {
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 19px;
display: flex;
align-items: center;

color: #000000;
}

.sub_title{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
margin-top: -1vh;
}

.price {
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: right;
color: #000000;
margin-top: -1vh;
}

.title_discount{
  display:flex;
  justify-content:space-between;
  > p {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  color: #452CDD;
  }
}

`
export const TopButtonsContainer = styled.div`
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
  const [buttonType, setButtonType] = useState('All')
  
  
  useEffect(() => {
        axios
          .get('http://cozshopping.codestates-seb.link/api/v1/products')
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
    <TopButtonsContainer>
    <TopButtons buttonType={buttonType} products={products} setButtonType={setButtonType}/>
    </TopButtonsContainer>
    <ItemContainer>
    <ItemByButtons buttonType={buttonType} products={products} setSelectedProductId={setSelectedProductId}/>
    </ItemContainer>
    <Modal products={products} selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId}/>
    </>
)
}

export default Productslist;