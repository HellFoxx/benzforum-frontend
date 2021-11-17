import React from "react";
import '../css/discuss-item.css'

export default function DiscussItem(props) {

    let date = new Date(props.publicDate);
    let dateStr = date.getHours() + ':' + date.getMinutes() + ' - ' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

    return (
        <div className="discuss-item">
            <div className="row">
                <div className="col-8 title">
                    <h4><a href="">{props.title}</a></h4>
                </div>
                <div className="col-2 date">
                    {dateStr}
                </div>
                <div className="col-2 author">
                    <a href="">{props.author.nickname}</a>
                </div>
            </div>
        </div>
    );

}