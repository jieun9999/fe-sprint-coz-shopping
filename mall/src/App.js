import React from "react";
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from "../src/components/Header";
import Footer from "../src/components/Footer"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
