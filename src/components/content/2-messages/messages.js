import React from "react";
import st from "./messages.module.scss";
import Contact from "./contact/contact";
import Message from "./message/message";

const Messages = ({contacts, messages}) => {
    const contactsEl = contacts.map(({id, name}) => {
        return <Contact key={id} id={id} name={name}/>;
    })

    const messagesEl = messages.map(({id, message}) => {
        return <Message key={id} id={id} message={message}/>;
    })

    return (
        <div className={st.dialogs}>
            <div className={st.contacts}>{contactsEl}</div>
            <div className={st.messages}>{messagesEl}</div>
        </div>
    );
}

export default Messages;