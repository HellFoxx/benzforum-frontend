import React, {useEffect, useState} from "react";
import axios from "axios";
import DiscussItem from "./discuss-item";
import '../css/forum.css';
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messages-slice";
import { setDiscussions } from "../redux/discussions-slice";

export default function Forum() {
    
    const discussions = useSelector(state => state.discussions.discussions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMessages([]));
        axios.get('http://localhost:8081/forum').then(res => {
            dispatch(setDiscussions(res.data));
            console.log(discussions);
        });
    }, []);    

    return (
        <div className="container">
            <div className="discuss-section">
                <h1>Форум</h1>
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
    );
}