import React, { useEffect } from "react";
import './App.css';
import Header from './components/header.jsx';
import News from "./components/news";
import SignUp from "./components/sign-up";
import SignIn from "./components/sign-in";
import Forum from "./components/forum";
import DiscussPage from "./components/discuss-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { authUser } from "./redux/auth-slice";
import Cookies from "js-cookie";

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = Cookies.get("userId");
    const userNickname = Cookies.get("userNickname");
    debugger;
    if (userId != undefined) {
      dispatch(authUser({
        userId : userId,
        userNickname : userNickname
    }));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Routes>
            <Route exact path ="/news" element={<News/>} />
            <Route path = "/forum" element={<Forum/>} />
            <Route path = "/signup" element={<SignUp/>} />
            <Route path = "/signin" element={<SignIn/>} />
            <Route path = "/forum/:id" element={<DiscussPage/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
