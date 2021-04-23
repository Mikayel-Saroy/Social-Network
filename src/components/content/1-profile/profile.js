import React from "react";
import st from "./profile.module.scss";
import MyPosts from "./my-posts/my-posts";
import ProfileInfo from "./profile-info/profile.info";

const Profile = ({posts}) => {

    console.log(posts);

    return (
        <div className={st.profile}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
}

export default Profile;