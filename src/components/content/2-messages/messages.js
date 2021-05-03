import React from "react";
import st from "./messages.module.scss";
import Contact from "./contact/contact";
import Message from "./message/message";

const Messages = ({data, updateNewMessageText, addMessage}) => {
    const {newMessageText, contacts, messages} = data;

    const contactsEl = contacts.map(({id, name}) => {
        return <Contact key={id} id={id} name={name}/>;
    })

    const messagesEl = messages.map(({id, message}) => {
        return <Message key={id} id={id} message={message}/>;
    })

    let newMessageElement = React.createRef();

    const processMessage = () => {
        addMessage();
    }

    const processNewMessageText = () => {
        let message = newMessageElement.current.value;
        updateNewMessageText(message);
    }

    return (
        <div className={st.dialogs}>
            <div className={st.contacts}>{contactsEl}</div>
            <div className={st.messages}>
                <div className={st.messagesBox}>
                    {messagesEl}
                </div>
                <div className={st.inputBox}>
                    <input type="text"
                           ref={newMessageElement}
                           value={newMessageText}
                           onChange={processNewMessageText}/>
                    <button onClick={processMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;