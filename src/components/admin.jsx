import axios from "axios";
import React, { useEffect, useState } from "react";
import '../css/admin.css';
import NonAciveDiscussItem from "./non-active-discuss-item";
import { setNonActiveDiscussions } from '../redux/discussions-slice'
import { useDispatch, useSelector } from "react-redux";

export default function Admin() {


    const nonActiveDiscussions = useSelector(state => state.discussions.nonActiveDiscussions);
    const [newsItem, setNewsItem] = useState({
        title : "",
        imgSrc : "",
        newsText : "",
        externReff : ""
    });
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:8081/admin/discussions/non-active").then(res => {
            dispatch(setNonActiveDiscussions(res.data));
        })
    }, []);

    const showDiscussionsBlock = () => {
        if (nonActiveDiscussions.length !== 0)
            return (
                <div className="admin-block non-active-discussions">
                    <h2>Предложенные темы</h2>
                    {nonActiveDiscussions.map(item => {
                        return <NonAciveDiscussItem id={item.id} title={item.title} author={item.author} />
                    })}
                </div>
            );
    }

    const handle = (e) => {
        const newData = {...newsItem};
        if (e.target.id === "newsText" && e.target.value.length > 256 || 
            e.target.id === "title" && e.target.value.length > 64)
            return;
        newData[e.target.id] = e.target.value;
        setNewsItem(newData);
        console.log(newData);
    }

    const sendNewsItem = () => {
        axios.post("http://localhost:8081/admin/news/add", newsItem);
    }

    return (
        <div className="admin">
            <div className="container">
                {showDiscussionsBlock()}
                <div className="admin-block new-news-item">
                    <h2>Добавить новость</h2>
                    <form>
                        <div className="form-group">
                            <input
                                onChange={(e) => handle(e)}
                                value={newsItem.title}
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Тема"/>
                        </div>
                        <div className="form-group">
                            <input 
                                onChange={(e) => handle(e)} 
                                value={newsItem.imgSrc}
                                type="text" 
                                className="form-control" 
                                id="imgSrc" 
                                placeholder="URL Изображения"/>
                        </div>
                        <div className="form-group">
                            <textarea
                                onChange={(e) => handle(e)}
                                value={newsItem.newsText}
                                className="form-control"
                                id="newsText"
                                rows="3"
                                placeholder="Текст">
                            </textarea>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={(e) => handle(e)}
                                value={newsItem.externReff}
                                type="text"
                                className="form-control"
                                id="externReff"
                                placeholder="URL Источника"/>
                        </div>
                        <button
                            onClick={() => sendNewsItem()} 
                            type="submit" 
                            class="btn btn-outline-light">
                            Добавить
                        </button>
                    </form>
                </div>
                <div className="admin-block">
                    <h2>Пользователи</h2>
                </div>
            </div>
        </div>
    );
}