import React from "react";
import st from "./messages.module.scss";
import Contact from "./contact/contact";
import Message from "./message/message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/store";

const Messages = ({data, dispatch}) => {
    const {newMessageText, contacts, messages} = data;

    const contactsEl = contacts.map(({id, name}) => {
        return <Contact key={id} id={id} name={name}/>;
    })

    const messagesEl = messages.map(({id, message}) => {
        return <Message key={id} id={id} message={message}/>;
    })

    let newMessageElement = React.createRef();

    const processUpdateNewMessageText = () => {
        let message = newMessageElement.current.value;
        let action = updateNewMessageActionCreator(message);
        dispatch(action);
    }

    const processAddMessage = () => {
        let action = addMessageActionCreator();
        dispatch(action);
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
                           onChange={() => processUpdateNewMessageText()}/>
                    <button onClick={processAddMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;