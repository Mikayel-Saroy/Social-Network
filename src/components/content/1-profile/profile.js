import React from "react";
import st from "./profile.module.scss";
import MyPosts from "./my-posts/my-posts";
import ProfileInfo from "./profile-info/profile.info";

const Profile = ({data, addPost}) => {
    const {posts} = data;

    return (
        <div className={st.profile}>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    );
}

export default Profile;