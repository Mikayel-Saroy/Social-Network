import React from "react";
import st from "./profile.module.scss";
import ProfileInfo from "./profile-info/profile.info";
import MyPostsContainer from "./my-posts/my-posts-container";

const Profile = ({profile}) => {
    return (
        <div className={st.profile}>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;