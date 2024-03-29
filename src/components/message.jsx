import react from "react";
import '../css/message.css';
import { NavLink } from "react-router-dom";

export default function Message(props) {

    let date = new Date(props.publicDate);
    let hh = date.getHours();
    let mm = date.getMinutes();
    let dd = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateStr = 
        (hh > 9 ? '' : '0') + hh + ':' + (mm > 9 ? '' : '0') + mm + ' - ' +
        (dd > 9 ? '' : '0') + dd + '/' + (month > 9 ? '' : '0') + month + '/' + year;

    return (
        <div className="message">
            <div className="row">
                <div className="col-1">
                    <div className="user-img"></div>
                    <div className="user-nick">
                        <NavLink to={'/user/' + props.author.id}>{props.author.nickname}</NavLink>
                    </div>
                </div>
                <div className="col-11 d-flex flex-column">
                    <div className="mess-text">
                        <p>{props.msgText}</p>
                    </div>
                    <div className="public-date align-self-end">
                        <span>{dateStr}</span>
                    </div> 
                </div>
            </div>
        </div>
    );
}