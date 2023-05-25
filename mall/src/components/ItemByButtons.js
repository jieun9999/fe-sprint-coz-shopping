import React from "react";
import styled from "styled-components";
import '../App.css';
import imgOff from "../img/북마크 아이콘 - off.png";
import imgOn from "../img/북마크 아이콘 - on.png";
import ModalBookmark from './ModalBookmark';

export const IconContainer = styled.div`
position: absolute;
bottom: 0.5rem;
right: 0.7rem;
cursor: pointer;
`;

export const ImgContainer = styled.div`
position: relative;
background-image: url(${props => props.imageurl});
background-size:cover;
width: 260px;
height: 200px;
border-radius: 10%;
`;

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

function ItemByButtons({buttonType, products, setSelectedProductId, isOnToast, setIsOnToast, filteredProducts, handleIconClick, bookmarks, handleIconClickAllType, removeBookmark, addBookmark, 
    starList, setStarList, setBookmarks, selectedProductId}){

    const openModal =(productId)=>{
      setSelectedProductId(productId)
    };
 
    console.log(buttonType)
    
    if(buttonType === "All"){
        
        const allProducts = products.map((product,index) => {
            const BookmarkStorage= (product)=> {
                starList[index] ? removeBookmark(product.id) : addBookmark(product)};
            
            if(product.type === 'Brand'){
                return(
                    <div key={product.id}>
                    <ImgContainer imageurl ={product.brand_image_url} onClick={()=> openModal(product.id)}>
                    <IconContainer>
                    <img onClick={(event) => {handleIconClickAllType(event, product.id);
                       BookmarkStorage(product)}}
                        src={starList[index] ? imgOn : imgOff}
                        alt="img"
                        width="25px"
                        height="25px"
                        />
                    </IconContainer>
                    </ImgContainer>
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
                    <ImgContainer imageurl={product.image_url} onClick={()=> openModal(product.id)}>
                    <IconContainer>
                    <img onClick={(event) => {handleIconClickAllType(event, product.id);
                       BookmarkStorage(product)}}
                        src={starList[index] ? imgOn : imgOff}
                        alt="img"
                        width="25px"
                        height="25px"
                        />
                    </IconContainer>
                    </ImgContainer>
                    <h3>{product.title}</h3>
                    <p className="sub_title">{product.sub_title}</p>
                  </div>
                )
                }else if(product.type === "Product"){
                    return(
                     <div key={product.id}>
                    <ImgContainer  imageurl={product.image_url} onClick={()=> openModal(product.id)}>
                    <IconContainer>
                    <img onClick={(event) => {handleIconClickAllType(event, product.id);
                       BookmarkStorage(product)}}
                        src={starList[index] ? imgOn : imgOff}
                        alt="img"
                        width="25px"
                        height="25px"
                        />
                    </IconContainer>
                    </ImgContainer>
                     <div className="title_discount">
                     <h3>{product.title}</h3>
                     <p>{product.discountPercentage}%</p>
                     </div>
                     <p className="price">{product.price}원</p>
                     </div>)
                }else if(product.type === "Category"){
                    return(
                    <div key={product.id}>
                    <ImgContainer imageurl={product.image_url} onClick={()=> openModal(product.id)}>
                    <IconContainer>
                    <img onClick={(event) => {handleIconClickAllType(event, product.id);
                       BookmarkStorage(product)}}
                        src={starList[index] ? imgOn : imgOff}
                        alt="img"
                        width="25px"
                        height="25px"
                        />
                    </IconContainer>
                    </ImgContainer>
                    <h3># {product.title}</h3>
                    </div>)
                }else{
                    return null;
                }
        });
        return( <>
            { allProducts}
            <ModalBookmark selectedProductId={selectedProductId} 
            setSelectedProductId={setSelectedProductId} 
            products={products} isOnToast={isOnToast} 
            setIsOnToast={setIsOnToast} bookmarks={bookmarks} 
            setBookmarks={setBookmarks} handleIconClick={handleIconClick} starList={starList}/>
            </>)
       
    }

    const renderedProducts = filteredProducts.map((product, index) => {

  

        const BookmarkStorage= (product)=> {
            starList[index] ? removeBookmark(product.id) : addBookmark(product)};

        if(product.type === 'Brand'){
        return(
            <div key={product.id}>
            <ImgContainer imageurl ={product.brand_image_url} onClick={()=> openModal(product.id)}>
            <IconContainer>
            <img onClick={(event)=> {handleIconClick(event, product.id); BookmarkStorage(product)}}
            src ={starList[index] ? imgOn :imgOff} alt="img" width="25px" height="25px"/>
            </IconContainer>
            </ImgContainer>
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
            <ImgContainer imageurl={product.image_url} onClick={()=> openModal(product.id)}>
            <IconContainer>
            <img onClick={(event)=> {handleIconClick(event, product.id); BookmarkStorage(product)}}
            src ={starList[index] ? imgOn :imgOff} alt="img" width="25px" height="25px"/>
            </IconContainer>
            </ImgContainer>
            <h3>{product.title}</h3>
            <p className="sub_title">{product.sub_title}</p>
          </div>
        )
        }else if(product.type === "Product"){
            return(
             <div key={product.id}>
            <ImgContainer  imageurl={product.image_url} onClick={()=> openModal(product.id)}>
            <IconContainer>
            <img onClick={(event)=> {handleIconClick(event, product.id); BookmarkStorage(product)}}
            src ={starList[index] ? imgOn :imgOff} alt="img" width="25px" height="25px"/>
            </IconContainer>
            </ImgContainer>
             <div className="title_discount">
             <h3>{product.title}</h3>
             <p>{product.discountPercentage}%</p>
             </div>
             <p className="price">{product.price}원</p>
             </div>)
        }else if(product.type === "Category"){
            return(
            <div key={product.id}>
            <ImgContainer imageurl={product.image_url} onClick={()=> openModal(product.id)}>
            <IconContainer>
            <img onClick={(event)=> {handleIconClick(event, product.id); BookmarkStorage(product)}}
            src ={starList[index] ? imgOn :imgOff} alt="img" width="25px" height="25px"/>
            </IconContainer>
            </ImgContainer>
            <h3># {product.title}</h3>
            </div>)
        }else{
            return null;
        }})

    return (
    <>
    {renderedProducts}
    <ModalBookmark selectedProductId={selectedProductId} 
    setSelectedProductId={setSelectedProductId} 
    products={products} isOnToast={isOnToast} 
    setIsOnToast={setIsOnToast} bookmarks={bookmarks} 
    setBookmarks={setBookmarks} handleIconClick={handleIconClick} starList={starList}/>
    </>
    )
    
};

export default ItemByButtons;