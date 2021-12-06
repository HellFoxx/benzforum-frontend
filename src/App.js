import React, { useEffect } from "react";
import './App.css';
import Header from './components/header.jsx';
import News from "./components/news";
import SignUp from "./components/sign-up";
import SignIn from "./components/sign-in";
import Forum from "./components/forum";
import DiscussPage from "./components/discuss-page";
import UserPage from "./components/user-page";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { authUser } from "./redux/user-slice";
import axios from "axios";

function App() {
  
  const dispatch = useDispatch();

  // checking for auth
  useEffect(() => {
    axios.get("http://localhost:8081/user/auth",
    { withCredentials : true })
    .then(res => {
      if (res.data !== "")
        dispatch(authUser({
          id : res.data.id,
          name : res.data.userName,
          surname : res.data.userSurname,
          nickname : res.data.nickname,
          email : res.data.email,
          type : res.data.userType
        }));
      else
        dispatch(authUser({
          id : null,
          name : "",
          surname : "",
          nickname : "",
          email : "",
          type : ""
        }));
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Routes>
            <Route path ="/" element={<Navigate to="/news" />} />
            <Route path ="/news" element={<News/>} />
            <Route path = "/forum" element={<Forum/>} />
            <Route path = "/signup" element={<SignUp/>} />
            <Route path = "/signin" element={<SignIn/>} />
            <Route path = "/forum/:id" element={<DiscussPage/>}/>
            <Route path = "/user/:id" element={<UserPage/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
