import { Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer"
import Main from "../src/pages/Main";
import Productslist from "./pages/Products list";
import Bookmark from "../src/pages/Bookmark";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [products, setProducts] = useState([]);
  const [buttonType, setButtonType] = useState('All')
  const filteredProducts = products.filter((product)=> product.type === buttonType)
  // filteredProducts를 가지고, starList 만들고, useEffect로 업데이트 하는 것이 맞나?
  // buttonType이 All 인 경우에는 어떻게 하지?
  const initialBookmarks = JSON.parse(localStorage.getItem('bookmarks'))|| [];
  const [bookmarks, setBookmarks] = useState(initialBookmarks);
  const [isOnToast, setIsOnToast] = useState(null);
  const [starList, setStarList] = useState((new Array(filteredProducts.length).fill(false)));
  

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

  const handleIconClick = (event, productId) =>{
    event.stopPropagation();
    const clickedIndex = filteredProducts.findIndex((product)=>product.id === productId)
    if(clickedIndex !== -1){
    const updatedList = [...starList]
    updatedList[clickedIndex] = !updatedList[clickedIndex]
    setStarList(updatedList)
    setIsOnToast(updatedList[clickedIndex]);
    // 연속으로 추가 버튼을 누르면 isOnToast는 true를 유지하고 있기 때문에,
    // setShowToast를 설정하는 useEffect 가 바뀌지 않는다
    };}

    const handleIconClickAllType = (event, productId) =>{
      event.stopPropagation();
      const clickedIndex = products.findIndex((product)=>product.id === productId)
      if(clickedIndex !== -1){
      const updatedList = [...starList]
      updatedList[clickedIndex] = !updatedList[clickedIndex]
      setStarList(updatedList)
      setIsOnToast(updatedList[clickedIndex]);
      }
      };

    useEffect(()=>{
      setStarList(new Array(filteredProducts.length).fill(false));
       }, [filteredProducts.length]);

  //로컬 스토리지에서 북마크 상태를 가져오기
  useEffect (()=>{
  const storedBookmarks = localStorage.getItem('bookmarks')
  if(storedBookmarks){
    setBookmarks(JSON.parse(storedBookmarks))
  }
  },[]);

  // 북마크 상태 변경시 로컬스토리지에 저장
  useEffect(()=>{
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  },[bookmarks]);

  // 북마크 추가 함수
  const addBookmark = (newBookmark) =>{
    const isDuplicate = bookmarks.some((bookmark)=> bookmark.id === newBookmark.id)
    if(!isDuplicate){
    setBookmarks([...bookmarks, newBookmark])
    console.log("북마크가 추가되었습니다.")}
    else {
      console.log("이미 추가된 상품입니다")
    }
  };
  

  // 북마크 삭제 함수
  const removeBookmark = (bookmarkId) =>{
   setBookmarks(bookmarks.filter((bookmark)=>bookmark.id  !== bookmarkId))
  };

  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Main bookmarks={bookmarks} setBookmarks={setBookmarks} />} />
        <Route path="/products/list" 
        element={<Productslist 
        products={products} 
        isOnToast={isOnToast} 
        setIsOnToast={setIsOnToast} 
        buttonType={buttonType} 
        setButtonType={setButtonType} 
        bookmarks={bookmarks} 
        setBookmarks={setBookmarks} 
        filteredProducts={filteredProducts}
        handleIconClick={ handleIconClick}
        addBookmark={addBookmark}
        removeBookmark={removeBookmark}
        handleIconClickAllType={handleIconClickAllType}
        starList={starList} setStarList={setStarList}/>} />
        <Route path="/bookmark" 
        element={<Bookmark bookmarks={bookmarks} setBookmarks={setBookmarks} buttonType={buttonType} setButtonType={setButtonType} />}/>
      </Routes>
      <Footer />
      </>
      
     
  );
}

export default App;
