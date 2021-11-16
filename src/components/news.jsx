import React, {useEffect, useState} from "react";
import axios from "axios";
import NewsItem from "./news-item";

export default function News() {

    const [news, setNews] = useState([]);

    const fetchNews = () => {
        axios.get("http://localhost:8081/news").then(res => {
            console.log(res.data);
            setNews(res.data);
        });
    };

    useEffect(() => {
        fetchNews();
    }, []);



    return (
        <div className="container">
            <div className="news-section">
                <h1>Новости</h1>
                {news.map(item => {
                        return (
                        <NewsItem
                            title = {item.title}
                            text = {item.newsText}
                            publicDate = {item.publicDate}
                            imgSrc = {item.imgSrc}
                            externReff = {item.externReff}
                        />
                    );
                })}
            </div>
        </div>
    );

}