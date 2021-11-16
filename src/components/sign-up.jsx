import React, {useEffect, useState} from "react";
import axios from "axios";

export default function SignUp() {

    const [data, setData] = useState({
        userName : "",
        userSurname : "",
        nickname : "",
        email : "",
        password : "",
        passwordRepeat : "",
    });

    function submit(e) {
        e.preventDefault();
        axios.post("http://localhost:8081/user/signup", {
            userName : data.userName,
            userSurname : data.userSurname,
            nickname : data.nickname,
            email : data.email,
            password : data.password,
            passwordRepeat : data.passwordRepeat
        })
        .then(res => {
            console.log(res.data);
        });
    }

    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData);
    }

    return (
        <div className="container">
            <div className="content">
                <div className="sign-up">
                    <h1>Регистрация</h1>
                    <form method="POST" onSubmit={(e) => submit(e)}>
                        <div className="row">

                            <div className="user-image-form col-12 mb-3"></div>

                            <div className="mb-3 form-item col-12">
                                <label for="exampleFormControlFile1">Ваше фото</label>
                                <br/>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                            </div>

                            <div className="col-3">
                                <div className="mb-3 form-item">
                                    <label for="userName" className="form-label">Имя</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userName"
                                        onChange = {(e) => handle(e)}
                                        value = {data.userName}
                                        placeholder="Не обязательно"
                                    />
                                </div>

                                <div className="mb-3 form-item">
                                    <label for="userSurname" className="form-label">Фамилия</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        id="userSurname"
                                        onChange = {(e) => handle(e)}
                                        value = {data.userSurname}
                                        placeholder="Не обязательно"
                                    />
                                </div>

                                <div className="mb-3 form-item">
                                    <label for="nickname" className="form-label">Никнейм</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nickname"
                                        onChange = {(e) => handle(e)}
                                        value = {data.nickname}
                                        aria-describedby="nicknameHelp"
                                    />
                                    <div id="nicknameHelp" className="form-text">Никнейм будет виден другим пользователям на сайте, если вы не добавили имя или фамилию</div>
                                </div>

                                <button type="submit" className="btn btn-primary col-5" >Подтвердить</button>
                            </div>

                            <div className="col-3">

                                <div className="mb-3 form-item">
                                    <label for="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        onChange = {(e) => handle(e)}
                                        value = {data.email}
                                        aria-describedby="emailHelp"
                                    />
                                </div>

                                <div className="mb-3 form-item">
                                    <label for="password" className="form-label">Пароль</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        onChange = {(e) => handle(e)}
                                        value = {data.password}
                                    />
                                </div>

                                <div className="mb-3 form-item">
                                    <label for="passwordRepeat" className="form-label">Повторите пароль</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="passwordRepeat"
                                        onChange = {(e) => handle(e)}
                                        value = {data.passwordRepeat}
                                    />
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}