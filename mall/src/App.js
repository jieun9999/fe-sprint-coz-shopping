import { Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer"
import Main from "../src/pages/Main";
import Productslist from "./pages/Products list";
import Bookmark from "../src/pages/Bookmark";

function App() {
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
