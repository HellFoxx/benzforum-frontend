import React from "react";
import '../css/non-active-discuss-item.css';
import { deleteNonActiveDiscuss } from '../redux/discussions-slice';
import { useDispatch } from "react-redux";
import axios from "axios";

export default function NonAciveDiscussItem(props) {

    const dispatch = useDispatch()

    const acceptDiscuss = () => {
        axios.put("http://localhost:8081/admin/discussions/non-active/accept/" + props.id).then(res => {
            dispatch(deleteNonActiveDiscuss(props.id));
        })
    }

    const deleteDiscuss = () => {
        axios.delete("http://localhost:8081/admin/discussions/non-active/delete/" + props.id).then(res => {
            dispatch(deleteNonActiveDiscuss(props.id));
        })
    }

    return (
        <div className="non-active-discuss-item row">
            <span className="col-9 title">{props.title}</span>
            <span className="col-2 nickname">{props.author.nickname}</span>
            <div className="btns col-1">
                <a href="#" className="accept link" onClick={() => acceptDiscuss()}>✔</a>
                <a href="#" className="decline link" onClick={() => deleteDiscuss()}>❌</a>
            </div>
        </div>
    );
}