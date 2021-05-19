import React from "react";
import st from "./messages.module.scss";
import Contact from "./contact/contact";
import Message from "./message/message";

const PLACEHOLDER = "Enter your message";


const Messages = ({data, processUpdateNewMessageText, processAddMessage}) => {
    const {newMessageText, contacts, messages} = data;

    const contactsEl = contacts.map(({id, name}) => {
        return <Contact key={id} id={id} name={name}/>;
    })

    const messagesEl = messages.map(({id, message}) => {
        return <Message key={id} id={id} message={message}/>;
    })

    return (
        <div className={st.dialogs}>
            <div className={st.contacts}>{contactsEl}</div>
            <div className={st.messages}>
                <div className={st.messagesBox}>
                    {messagesEl}
                </div>
                <div className={st.inputBox}>
                    <input placeholder={PLACEHOLDER}
                           value={newMessageText}
                           onChange={processUpdateNewMessageText}/>
                    <button onClick={processAddMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;