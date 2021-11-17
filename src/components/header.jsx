import React from "react";
import '../css/header.css';

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
                                    <a className="nav-link" href="/news">Новости</a>  
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/forum">Форум</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/club">Клуб</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/mercedes">Мерседес</a>
                                </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 user-btns row justify-content-end">
                        <a href="/signin" className="btn btn-outline-light sign-in col-6">Вход</a>
                        <a href="/signup" className="btn btn-light registr col-6">Регистрация</a>
                    </div>
                </div>
            </div>
        </header>
    );
}