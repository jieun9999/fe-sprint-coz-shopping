import { useState,useEffect } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import '../App.css';
import Modal from "../components/Modal";
import Itemrender from "../components/Itemrender";
import BookmarkToast from "../components/BookmarkToast";

export const Itemlistalignment =styled.div`
display:flex;
justify-content: space-evenly;
flex-direction:row;
padding-right:10vw;
padding-left: 10vw;

img{
  border-radius: 12px;
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

function Main() {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isOnToast, setIsOnToast] = useState(null);

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

  return (
    <>
    <div className="alignbox2">
    <h2>상품 리스트</h2>
    </div>
    <Itemlistalignment>
    <Itemrender products={products} setSelectedProductId={setSelectedProductId} isOnToast={isOnToast} setIsOnToast={setIsOnToast}/>
    </Itemlistalignment>
    <Modal products={products} selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId} isOnToast={isOnToast} setIsOnToast={setIsOnToast}/>
    <div className="alignbox2">
     <h2>북마크 리스트</h2>
    </div>
    <div className="BookmarkContainer">
    {isOnToast === null ? null : <BookmarkToast isOnToast={isOnToast}/>}
    </div>
    </>
  );
}




export default Main;
