import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../css/discuss-page.css';
import Message from "./message";
import { useDispatch, useSelector } from "react-redux";
import { setMessages, addMessage } from "../redux/messages-slice"

export default function DiscussPage() {
    
    const { id } = useParams();
    const messagesEndRef = useRef(null);
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages.messages);
    const user = useSelector(state => state.user.user);
    const discussions = useSelector(state => state.discussions.discussions);
    const [messageText, setMessageText] = useState("");
    const [title, setTitle] = useState("");

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        for (let discuss of discussions)
            if ((discuss.id + "") === id) {
                setTitle(discuss.title);
                break;
            }
        axios.get('http://localhost:8081/forum/' + id).then(res => {
            dispatch(setMessages(res.data));
        });
    }, []);

    const handleChangeMessage = (e) => {
        setMessageText(e.target.value);
    }

    const onSendMessage = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/forum/' + id, {
            messageText : messageText,
            authorId : user.id
        })
        .then(res => {
            setMessageText("");
            dispatch(addMessage(res.data));
        });
    }

    const checkForAuth = () => {
        if (user.id !== null) {
            return (
                <form method="put" onSubmit={(e) => onSendMessage(e)}>
                    <div className="row">
                        <div className="col-5">
                            <textarea
                                className="form-control"
                                placeholder="Message"
                                onChange={(e) => handleChangeMessage(e)}
                                value={messageText}
                            />
                        </div>
                        <div className="col-1">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            );
        }
        else {
            return (
                <div className="not-autorized">
                    <p>Чтобы участвовать в обсуждениях на форуме войдите в свой аккаунт или зарегистрируйтесь</p>
                </div>
            );
        }
    }

    useEffect(scrollToBottom, [messages]);

    return (
        <div className="discuss-page">
            <div className="container">
                <div className="discuss-title">
                    <h1>{title}</h1>
                </div>
                {messages.map(mess => {
                    return (
                        <Message
                            msgText = {mess.msgText} 
                            publicDate = {mess.publicDate}
                            author = {mess.author}
                        />
                    );
                })}
                <div ref={messagesEndRef}/>
            </div>
            <div className="send-message">
                <div className="container">
                   {checkForAuth()}
                </div>
            </div>
        </div>
    );

}