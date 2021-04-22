import React from "react";
import st from "./dialogs.module.scss";
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


const Dialogs = () => {
    const contacts = [
        {id: 1, name: "Benjamin"},
        {id: 2, name: "Albert"},
        {id: 3, name: "Henry"},
        {id: 4, name: "Gary"},
        {id: 5, name: "Robert"},
    ];
    const messages = [
        {id: 1, message: "Hi Benjamin."},
        {id: 2, message: "Hi, How are you?"},
        {id: 3, message: "I'm fine, thanks."},
    ];

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

export default Dialogs;