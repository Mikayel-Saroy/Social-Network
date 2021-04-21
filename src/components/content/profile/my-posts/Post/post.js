import React from "react";
import st from "./post.module.scss";
import user_icon from "../../../../../assets/icons/user_icon.png";

const Post = (props) => {
    const {message, likes} = props;

    return (
        <div className={st.post}>
            <div className={st.user}>
                <img src={user_icon} alt="user"/>
            </div>
            <div className={st.content}>
                <div className={st.text}>{message}</div>
                <div className={st.like}>like {likes}</div>
            </div>
        </div>
    );
}

export default Post;