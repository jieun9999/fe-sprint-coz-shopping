import React from "react";
import styled from "styled-components";

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
  border-radius: 10%;
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

function Modal({products, setSelectedProductId, selectedProductId}){

  const closeModal = () =>{
    setSelectedProductId(null);
  };
  
  const selectedProduct = products.find((product)=> product.id === selectedProductId)

 return(
 <>
 <ModalContainer>
 {selectedProduct &&(
 <ModalBackdrop onClick={closeModal}>
 <ModalView onClick={(event) => {closeModal(); event.stopPropagation();}}>
    <img src={selectedProduct.image_url || selectedProduct.brand_image_url} alt={`Selected Product ${selectedProduct.id}`} />
 </ModalView>
 </ModalBackdrop>
 ) }
 </ModalContainer>
 </>
)
}

export default Modal;