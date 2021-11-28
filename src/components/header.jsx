import React from "react";
import '../css/header.css';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Header() {

    const userId = useSelector((state) => state.auth.userId);
    const userNickname = useSelector((state) => state.auth.userNickname);
    const isAuth = useSelector((state) => state.auth.isAuth);

    const checkAuth = () => {
        if (isAuth === false) {
            return (
                <div className="col-xl-3 user-btns row justify-content-end">
                    <NavLink to="/signin" className="btn btn-outline-light sign-in col-6" >Войти</NavLink> 
                    <NavLink to="/signup" className="btn btn-light registr col-6" >Регистрация</NavLink> 
                </div>
            );
        } else {
            return (
                <div className="col-xl-3 row justify-content-end align-items-center">
                    <div className="col-3 user-profile-link">
                        <NavLink to={'/user/' + userId} className="nav-link">{userNickname}</NavLink>
                    </div>
                    <div className="user-header-img"></div>
                </div>
            );
        }
    }

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="logo col-xl-3">
                        <h1>BenzForum</h1>
                    </div>
                    <div className="main-menu col-xl-6">
                        <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <NavLink to="/news" className="nav-link" >Новости</NavLink>  
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/forum" className="nav-link" >Форум</NavLink> 
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/club" className="nav-link disabled" >Клуб</NavLink> 
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/mercedes" className="nav-link disabled" >Мерседес</NavLink> 
                                </li>
                        </ul>
                    </div>
                   {checkAuth()} 
                </div>
            </div>
        </header>
    );
}