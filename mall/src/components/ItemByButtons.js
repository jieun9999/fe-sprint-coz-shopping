import React from "react";
import styled from "styled-components";
import Itemrender from "../components/Itemrender";

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

function ItemByButtons({buttonType, products, setSelectedProductId}){
  
    const openModal =(productId)=>{
      setSelectedProductId(productId)
    };

    const filteredProducts = products.filter((product)=> product.type === buttonType) 
    /* buttton의 type이 state와 같은 객체만을 저장 */

    if(buttonType === "All"){
        return (
            <Itemrender products={products} setSelectedProductId={setSelectedProductId}/>
        )
    }

    const renderedProducts = filteredProducts.map((product) => {
        if(product.type === 'Brand'){
        return(
            <div key={product.id}>
            <img onClick={()=> openModal(product.id)} src={product.brand_image_url} alt="img" width ="260rem" height="200rem"></img>
            <BrandContainer>
            <h3>{product.brand_name}</h3>
            <p>관심고객수</p>
            </BrandContainer>
            <p style={{textAlign:"right"}} className="product_follower">{product.follower}</p>
          </div>
        );
        }else if(product.type === "Exhibition"){
        return(
            <div key={product.id}>
            <img onClick={()=> openModal(product.id)} src={product.image_url} alt="img" width ="260rem" height="200rem"></img>
            <h3>{product.title}</h3>
            <p className="sub_title">{product.sub_title}</p>
          </div>
        )
        }else if(product.type === "Product"){
            return(
             <div key={product.id}>
             <img onClick={()=> openModal(product.id)} src={product.image_url} alt="img" width ="260rem" height="200rem"></img>
             <div className="title_discount">
             <h3>{product.title}</h3>
             <p>{product.discountPercentage}%</p>
             </div>
             <p className="price">{product.price}원</p>
             </div>)
        }else if(product.type === "Category"){
            return(
            <div key={product.id}>
            <img onClick={()=> openModal(product.id)} src={product.image_url} alt="img" width ="260rem" height="200rem"></img>
            <h3># {product.title}</h3>
            </div>)
        }else{
            return null;
        }})
    return renderedProducts;
}

export default ItemByButtons;