import React from "react";
import st from "./profile.module.scss";
import react_wall from "../../../assets/images/react-wall.png";
import MyPosts from "./my-posts/my-posts";

const Profile = () => {
    return (
        <div className={st.main}>
            <div className={st.wallpaper}>
                <img src={react_wall} alt="react-wall"/>
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;