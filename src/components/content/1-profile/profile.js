import React from "react";
import st from "./profile.module.scss";
import ProfileInfo from "./profile-info/profile.info";
import MyPostsContainer from "./my-posts/my-posts-container";

const Profile = () => {
    return (
        <div className={st.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;