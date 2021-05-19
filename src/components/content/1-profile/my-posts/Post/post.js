import React from "react";
import st from "./post.module.scss";
import user_icon from "../../../../../assets/icons/user_icon.png";

const USER_ALT = "user";


const Post = ({id, message, likesCount, processAddLike}) => {
    return (
        <div className={st.post}>
            <div className={st.user}>
                <img src={user_icon} alt={USER_ALT}/>
            </div>
            <div className={st.content}>
                <div className={st.text}>{message}</div>
                <div className={st.like} onClick={() => processAddLike(id)}>like {likesCount}</div>
            </div>
        </div>
    );
}

export default Post;