import React from "react";
import st from "./profile.module.scss";
import ProfileInfo from "./profile-info/profile.info";
import MyPostsContainer from "./my-posts/my-posts-container";

const Profile = ({store}) => {
    return (
        <div className={st.profile}>
            <ProfileInfo/>
            <MyPostsContainer data={store.getState().profilePage}
                              dispatch={store.dispatch}/>
        </div>
    );
}

export default Profile;