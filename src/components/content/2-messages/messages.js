import React from "react";
import st from "./messages.module.scss";
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

const Message = ({id, message}) => <div className={st.message}>{message}</div>


const Messages = ({contacts, messages}) => {
    const contactsElem = contacts.map(({id, name}) => {
        return <Contact key={id} id={id} name={name}/>;
    })

    const messagesElem = messages.map(({id, message}) => {
        return <Message key={id} id={id} message={message}/>;
    })

    return (
        <div className={st.dialogs}>
            <div className={st.contacts}>{contactsElem}</div>
            <div className={st.messages}>{messagesElem}</div>
        </div>
    );
}

export default Messages;