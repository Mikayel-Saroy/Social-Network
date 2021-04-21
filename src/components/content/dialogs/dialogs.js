import React from "react";
import st from "./dialogs.module.scss";
import {NavLink} from "react-router-dom";

const Contact = ({id, name}) => {
    let className = id === "1" ? "active" : "contact";
    let path = `/dialogs/${id}`;

    return (
        <div className={st[className]}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
}

const Message = ({message}) => {
    return (
        <div className={st.message}>{message}</div>
    );
}

const Dialogs = () => {
    return (
        <div className={st.dialogs}>
            <div className={st.contacts}>
                <Contact id="1" name="Benjamin"/>
                <Contact id="2" name="Albert"/>
                <Contact id="3" name="Henry"/>
                <Contact id="4" name="Gary"/>
                <Contact id="5" name="Robert"/>
            </div>
            <div className={st.messages}>
                <Message message="Hi Benjamin."/>
                <Message message="Hi, How are you?"/>
                <Message message="I'm fine, thanks."/>
            </div>
        </div>
    );
}

export default Dialogs;