import React from "react";
import styled from "styled-components";
import TopButtons from "../components/TopButtons/TopButtons";
import BookmarkToast from "../components/BookmarkToast/BookmarkToast";
import '../App.css';
import { useState } from "react";
import BookmarkList  from "../components/BookmarkList";

export const BookmarkContainer = styled.div`
position: fixed;
bottom: 20px;
right: 20px;
z-index:20000;
`;

export const ItemContainer =styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;
max-width: calc(20vw * 4);
margin: 0 auto;


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

function Bookmark
({products, isOnToast, setIsOnToast, setButtonType, buttonType, 
  bookmarks, setBookmarks, filteredProducts, handleIconClick,
  addBookmark, removeBookmark, handleIconClickAllType,starList, setStarList}){

const [selectedProductId, setSelectedProductId] = useState(null);

  
return(
    <>
    <TopButtonsContainer>
    <TopButtons buttonType={buttonType} bookmarks={bookmarks} setButtonType={setButtonType}/>
    </TopButtonsContainer>
    <ItemContainer>
    <BookmarkList
    buttonType={buttonType} products={products} isOnToast={isOnToast} 
    setIsOnToast={setIsOnToast} filteredProducts={filteredProducts} handleIconClick={handleIconClick}
    bookmarks={bookmarks} selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId}
    handleIconClickAllType={handleIconClickAllType} addBookmark={addBookmark} removeBookmark={removeBookmark}
    setButtonType={setButtonType} starList={starList} setStarList={setStarList}
    />
    </ItemContainer>
    <BookmarkContainer>
    {isOnToast === null ? null : <BookmarkToast starList ={starList} isOnToast={isOnToast}/>}
    </BookmarkContainer>
    </>
)
}

export default  Bookmark;