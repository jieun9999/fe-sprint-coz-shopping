import React from "react";
import styled from "styled-components";

export const BrandContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-bottom:-1.7rem;

`;
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
          <BrandContainer>
          <h3>{products[i].brand_name}</h3>
          <p>관심고객수</p>
          </BrandContainer>
          <p style={{textAlign:"right"}}className="product_follower">{products[i].follower}</p>
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

  export default Itemrender;