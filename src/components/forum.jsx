import React, {useEffect, useState} from "react";
import axios from "axios";
import DiscussItem from "./discuss-item";
import '../css/forum.css';

export default function Forum() {
    
    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/forum').then(res => {
            console.log(res.data);
            setDiscussions(res.data);
        });
    }, []);    

    return (
        <div className="container">
            <div className="discuss-section">
                <h1>Форум</h1>
                {discussions.map(item => {
                    return (
                        <DiscussItem
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