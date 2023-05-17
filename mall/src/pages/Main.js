import { useState,useEffect } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import '../App.css';
import Modal from "../components/Modal";


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

function Itemrender({products, setSelectedProductId}){
  let renderedItems = [];

  const openModal =(productId)=>{
    setSelectedProductId(productId)
  };

  if(products.length > 0){
  for(let i = 0; i < products.length; i++){
  if(products[i].type ==='Brand'){
    renderedItems.push(
       <div key={products[i].id}>
        <img onClick={()=> openModal(products[i].id)} src={products[i].brand_image_url} alt="img" width ="260rem" height="200rem"></img>
        <h3>{products[i].brand_name}</h3>
        <p>{products[i].follwer}</p>
      </div>)}
  else if(products[i].type ==="Exhibition"){
    renderedItems.push(
    <div key={products[i].id}>
      <img onClick={()=> openModal(products[i].id)} src={products[i].image_url} alt="img" width ="260rem" height="200rem"></img>
      <h3>{products[i].title}</h3>
      <p className="sub_title">{products[i].sub_title}</p>
    </div>)}
    else if(products[i].type ==="Product"){
      renderedItems.push(
      <div key={products[i].id}>
      <img onClick={()=> openModal(products[i].id)} src={products[i].image_url} alt="img" width ="260rem" height="200rem"></img>
      <div className="title_discount">
      <h3>{products[i].title}</h3>
      <p>{products[i].discountPercentage}%</p>
      </div>
      <p className="price">{products[i].price}원</p>
      </div>)}
      else if(products[i].type ==="Category"){
        renderedItems.push(
          <div key={products[i].id}>
          <img onClick={()=> openModal(products[i].id)} src={products[i].image_url} alt="img" width ="260rem" height="200rem"></img>
          <h3># {products[i].title}</h3>
          </div>)
      }
  }
  return renderedItems;
}
}

function Main() {
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

  return (
    <>
    <div className="alignbox2">
    <h2>상품 리스트</h2>
    </div>
    <Itemlistalignment>
    <Itemrender products={products} setSelectedProductId={setSelectedProductId}/>
    </Itemlistalignment>
    <Modal products={products} setSelectedProductId={setSelectedProductId} selectedProductId={selectedProductId}/>
    <div className="alignbox2">
     <h2>북마크 리스트</h2>
    </div>
    </>
  );
}




export default Main;
