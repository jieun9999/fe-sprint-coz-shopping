import React from "react";
import styled from "styled-components";
import XIcon from "../img/x.png";
import imgOff from "../img/북마크 아이콘 - off.png";
import imgOn from "../img/북마크 아이콘 - on.png";
import { useEffect, useState } from "react";

export const StarIcon = styled.img`
 position: absolute;
 z-index:12000;
 margin-top: 20px;
`;

export const IconContainer = styled.div`
position: absolute;
cursor: pointer;
display:flex;
flex-direction: row;
top:85%;
left:2%;

p {
z-index: 12000;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
color: white;
margin-left:30px;
}
`;

export const CloseIcon = styled.img`
z-index: 12000;
position: absolute;
top: 17px;
right: 20px;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalView = styled.div`
  border-radius: 10%;
  width: 35%;
  height: 50%;
  z-index: 10000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

 > img{
  border-radius: 3%;
  width: 35vw;
  height: 50vh;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
 }

`;

function Modal({products, setSelectedProductId, selectedProductId, setIsOnToast, isOnToast}){
  const [isOnList, setIsOnList] = useState([]);

  const selectedProduct = products.find((product)=> product.id === selectedProductId)
  const clickedIndex = products.findIndex((product)=> product.id === selectedProductId)


  const itemTitle = () =>{
  if(selectedProduct.type === 'Brand'){
    return selectedProduct.brand_name;
  }else if(selectedProduct.type === "Exhibition"){
    return selectedProduct.title;
  }else if(selectedProduct.type === "Product"){
    return selectedProduct.title;
  }else if(selectedProduct.type === "Category"){
   return selectedProduct.title
  }
  return null;
  };

  const handleIconClick = (event, productId) =>{
    event.stopPropagation();
    const clickedIndex = products.findIndex((product)=>product.id === productId)
    if(clickedIndex !== -1){
    const updatedList = [...isOnList]
    updatedList[clickedIndex] = !updatedList[clickedIndex]
    setIsOnList(updatedList)
    setIsOnToast(!isOnToast)
    }
    };

  const closeModal = () =>{
    setSelectedProductId(null);
  };

  useEffect(()=>{
    setIsOnList(new Array(products.length).fill(false));
   }, [products]);
  
  
 return(
 <>
 <ModalContainer>
 {selectedProduct &&(
 <ModalBackdrop onClick={closeModal}>
 <ModalView onClick={(event) => {closeModal(); event.stopPropagation();}}>
  <img src={selectedProduct.image_url || selectedProduct.brand_image_url} alt={`Selected Product ${selectedProduct.id}`} />
  <div className="modalCloseIcon">
  <CloseIcon src={XIcon} alt="closeIcon" width="20rem" height="20rem"/>
  </div>
  <IconContainer>
  <StarIcon onClick={(event)=> handleIconClick(event, selectedProduct.id)} key={selectedProduct.id} src ={isOnList[clickedIndex] ? imgOn :imgOff} alt="img" width="23rem" height="23rem"/>
  <p className="itemTitle">{itemTitle()}</p>
  </IconContainer>
 </ModalView>
 </ModalBackdrop>
 ) }
 </ModalContainer>
 </>
)
}

export default Modal;