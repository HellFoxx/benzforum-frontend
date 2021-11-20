import React from "react";
import '../css/header.css';
import { NavLink } from "react-router-dom";

export default function Header() {
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
                                    <NavLink to="/club" className="nav-link" >Клуб</NavLink> 
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/mercedes" className="nav-link" >Мерседес</NavLink> 
                                </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 user-btns row justify-content-end">
                        <NavLink to="/signin" className="btn btn-outline-light sign-in col-6" >Войти</NavLink> 
                        <NavLink to="/signup" className="btn btn-light registr col-6" >Регистрация</NavLink> 
                    </div>
                </div>
            </div>
        </header>
    );
}