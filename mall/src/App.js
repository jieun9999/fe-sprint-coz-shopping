import { Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer"
import Main from "../src/pages/Main";
import Productslist from "./pages/Products list";
import Bookmark from "../src/pages/Bookmark";
import { useState, useEffect } from "react";

function App() {

  const [bookmarks, setBookmarks] = useState([]);

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
    setBookmarks([...bookmarks, newBookmark])
  };

  // 북마크 삭제 함수
  const removeBookmark = (bookmarkId) =>{
   setBookmarks(bookmarks.filter((bookmark)=>bookmark.id  !== bookmarkId))
  };

  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/products/list" element={<Productslist />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      <Footer />
      </>
      
     
  );
}

export default App;
