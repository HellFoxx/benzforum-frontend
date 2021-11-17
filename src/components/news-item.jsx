import React from "react";
import '../css/news.css';

export default function NewsItem(props) {
    var externReff = React.createRef();
    externReff = props.externReff;
    var text = props.text;
    if (text.length > 400) 
        text = text.substr(0,400);
    text = text.concat('...');

    const imgStyle = {
        backgroundImage: 'url(' + props.imgSrc + ')',
    };

    return (
        <div className="news-item row">
            <div className="image col-2" style={imgStyle}></div>
            <div className="text col-10">
                <h3>{props.title}</h3>
                <p>{text}</p>
                <a href={externReff}>Читать далее</a>
            </div>
        </div>   
    );
}