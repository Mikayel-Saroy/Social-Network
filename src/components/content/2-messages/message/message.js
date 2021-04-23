import React from "react";
import st from "./message.module.scss";


const Message = ({id, message}) => {
    return (
        <div className={st.message}>{message}</div>
    );
}

export default Message;