import React from "react";
import st from "./contact.module.scss";
import {NavLink} from "react-router-dom";

const Contact = ({id, name}) => {
    const className = (id === 1) ? "active" : "contact";
    const path = `/dialogs/${id}`;

    return (
        <div className={st[className]}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
}

export default Contact;