import React, {useEffect, useState} from "react";
import axios from "axios";
import DiscussItem from "./discuss-item";
import Modal from "./modal";
import '../css/forum.css';
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messages-slice";
import { setDiscussions } from "../redux/discussions-slice";

export default function Forum() {
    
    const discussions = useSelector(state => state.discussions.discussions);
    const user = useSelector(state => state.user.user); 
    const dispatch = useDispatch();
    const [isModalActive, setModalActive] = useState(false);
    const [offer, setOffer] = useState("");
    useEffect(() => {
        dispatch(setMessages([]));
        axios.get('http://localhost:8081/forum').then(res => {
            dispatch(setDiscussions(res.data));
            console.log(discussions);
        });
    }, []); 
    
    const isUserAuth = () => {
        if (user.id !== null)
            return (
                <div className="to-discuss-btn d-flex align-items-center">
                    <button className="btn btn-outline-light" onClick={() => setModalActive(true)}>
                        Обсудить
                    </button>
                </div>
            );
        else
            return "";
    }

    const handle = (e) => {
        setOffer(e.target.value);
    }

    const sendOffer = () => {
        axios.post("http://localhost:8081/forum/offer", {
            title : offer,
            author : user 
        })
    }
    
    return (
        <div className="forum">
            <div className="container">
                <div className="discuss-section">
                    <div className="d-flex justify-content-between">
                        <h1>Форум</h1>
                        {isUserAuth()}
                    </div>
                    {discussions.map(item => {
                        return (
                            <DiscussItem
                                id = {item.id}
                                title = {item.title}
                                publicDate = {item.public_date}
                                author = {item.author}
                            />
                        );
                    })}
                </div>
            </div>
            <Modal isActive={isModalActive} setActive={setModalActive} >
                <form className="send-theme-form">
                    <span>Напишите тему, которую вы бы хотели обсудить.</span>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="theme"
                            value={offer}
                            onChange={(e) => handle(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-light send-btn d-flex" onClick={() => sendOffer()}>
                        Отправить
                    </button>
                </form>
            </Modal>
        </div>
    );
}