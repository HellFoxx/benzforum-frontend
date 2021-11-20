import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../css/discuss-page.css';
import Message from "./message";

export default function DiscussPage() {
    
    const { id } = useParams();

    const [messages, setMessages] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8081/forum/' + id).then(res => {
            console.log(res.data);
            setMessages(res.data);
        });
    }, []);

    return (
        <div className="content">
            <div className="container">
                <div className="discuss-title">
                    <h1>Discuss Title</h1>
                </div>
                {messages.map(mess => {
                    return (
                        <Message
                            text = {mess.msgText} 
                            publicDate = {mess.publicDate}
                            author = {mess.author}
                        />
                    );
                })}
            </div>
            <div className="send-message">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-5">
                                <textarea className="form-control" placeholder="Message" id="floatingTextarea2"></textarea>
                            </div>
                            <div className="col-1">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}