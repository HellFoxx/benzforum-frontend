import React, { useState, useEffect } from "react";
import Modal from "./modal";
import { useSelector } from "react-redux";
import '../css/user-page.css';
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { clearUser } from "../redux/user-slice";
import { useDispatch } from "react-redux";
import News from "./news";

export default function UserPage() {
    
    const { userIdParam } = useParams();
    const user = useSelector(state => state.user.user); 
    const [isModalActive, setModalActive] = useState(false);
    const [isNicknameWrong, setNicknamaWrong] = useState(false);
    const [data, setData] = useState({
        name : user.name + "",
        surname : user.surname + "",
        nickname : user.nickname + "",
        email : user.email + "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handle = (e) => {
        const newData = {...data}
        newData[e.target.id] = e.target.value;
        setData(newData)
        if (e.target.id === "nickname" && e.target.value !== user.nickname) {
            axios.get("http://localhost:8081/user/nickname/" + e.target.value)
            .then(res => {
                setNicknamaWrong(res.data);
            })
        };
    }

    const displayUserType = () => {
        switch(user.type) {
            case "ADMIN":
            case "MODERATOR":
                return (
                    <h1>{user.nickname}<span class="badge badge-light">{user.type}</span></h1>
                );
            default: return (
                <h1>{user.nickname}</h1> 
            );
        }
    }

    const onExitProfile = () => {
        axios.get("http://localhost:8081/user/reauth", {withCredentials : true});
        dispatch(clearUser());
        navigate("/news");
    }

    const onSetProfileChanges = () => {
        axios.post("http://localhost:8081/user/edit", data, {withCredentials : true}).then(res => {
            setData(data);
            setModalActive(false);
        })
        .catch(error => {
            console.log(error.response.data);
        });
    }

    return (
        <div className="user-page-content">
            <div className="container">
                <div className="row">
                    <div className="col-2 user-profile-img-container">
                        <div className="user-profile-img"></div>
                    </div>
                    <div className="col-7 user-profile-data">
                        <div className="nickname-block">
                            <h1>{displayUserType()}</h1>   
                        </div>
                        <span>{user.name + " " + user.surname}</span>
                        <br/>
                        <span>{user.email}</span>
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-start">
                        <button className="btn btn-outline-light edit-profile-btn" onClick={() => setModalActive(true)}>
                            Редактировать
                        </button>
                        <button className="btn btn-outline-light exit-profile-btn" onClick={() => onExitProfile()}>
                            Выйти
                        </button>
                    </div>
                </div>
            </div>
            <Modal isActive={isModalActive} setActive={setModalActive}>
                <div className="edit-profile">
                    <button type="button" className="close" onClick={() => setModalActive(false)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h2>Редактировать профиль</h2>
                    <div className="form-outer">
                        <form className="edit-profile-form">
                            <div className="form-group">
                                <label forHtml="nickname">Никнейм</label>
                                <input
                                    type="text"
                                    className={isNicknameWrong ? "form-control wrong" : "form-control"}
                                    id="nickname"
                                    value={data.nickname}
                                    onChange={(e) => handle(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label forHtml="name">Имя</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => handle(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label forHtml="surname">Фамилия</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="surname"
                                    value={data.surname}
                                    onChange={(e) => handle(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label forHtml="email">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) => handle(e)}
                                />
                            </div>
                            <button
                                onClick={() => onSetProfileChanges()}
                                type="submit" 
                                className=
                                {
                                    isNicknameWrong ? "btn btn-outline-light save-btn disabled"
                                    : "btn btn-outline-light save-btn"
                                }
                            >
                                Сохранить
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
}