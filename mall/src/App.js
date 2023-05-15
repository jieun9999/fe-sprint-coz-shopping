import React from "react";
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from "../src/components/Header";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    </div>
    </BrowserRouter>
  );
}

export default App;
