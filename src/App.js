import React from "react";
import './App.css';
import Header from './components/header.jsx';
import News from "./components/news";
import SignUp from "./components/sign-up";
import Forum from "./components/forum";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Routes>
            <Route exact path ="/news" element={<News/>}/>
            <Route path = "/forum" element={<Forum/>}/>
            <Route path ="/signup" element={<SignUp/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
