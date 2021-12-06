import react, { useState } from "react";
import '../css/sign-in.css';
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux'
import { authUser } from "../redux/user-slice";
import Modal from "./modal";

export default function SignIn() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        nickname : "",
        password : "",
        isRemember : true,
    });
    const [isModalErrorActive, setModalErrorActive] = useState(false);
    const [errorData, setErrorData] = useState("");

    const submit = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios.post("http://localhost:8081/user/signin", {
            nickname : data.nickname,
            password : data.password,
            isRemember : data.isRemember,
        })
        .then(res => {
            dispatch(authUser({
                id : res.data.id,
                name : res.data.userName,
                surname : res.data.userSurname,
                nickname : res.data.nickname,
                email : res.data.email,
                userType : res.data.userType
            }));
            navigate("/news");
        })
        .catch(error => {
            //console.log(error);
            //console.log(error.response.data);
            setModalErrorActive(true);
            setErrorData(error.response.data);
        });
    }

    const handle = (e) => {
        const newData = {...data}
        if (e.target.type === "checkbox")
            newData.isRemember = e.target.checked;
        else
            newData[e.target.id] = e.target.value;
        setData(newData)
        console.log(newData);
    }

    return (
        <div className="sign-in-content">
            <div className="sign-in-form">
                <h1>Войти</h1>
                <form method="POST" onSubmit={(e) => submit(e)}>
                    <div className="mb-3">
                        <label htmlFor="nickname" class="form-label">Никнейм</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nickname"
                            onChange={(e) => handle(e)}
                            value={data.nickname}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Пароль</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            onChange={(e) => handle(e)}
                            value={data.password}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            checked={data.isRemember}
                            type="checkbox"
                            className="form-check-input"
                            onChange={(e) => handle(e)}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Запомнить меня</label>
                    </div>
                    <div className="enter-btn">
                        <button type="submit" className="btn btn-outline-light">Вход</button>
                    </div>
                </form>
            </div>  
            <Modal isActive={isModalErrorActive} setActive={setModalErrorActive}>
                <div className="sign-in-error">
                    <h1>Ошибка!</h1>
                    <p>{errorData}</p>
                </div>
            </Modal>
        </div>
    )

}