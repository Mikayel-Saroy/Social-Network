import React from "react";
import st from "./post.module.scss";
import user_icon from "../../../../../assets/icons/user_icon.png";

const Post = () => {
    return (
        <div className={st.main}>
            <div className={st.user}>
                <img src={user_icon} alt="user"/>
            </div>
            <div className={st.text}>Post X</div>
        </div>
    );
}

export default Post;