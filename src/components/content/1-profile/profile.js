import React from "react";
import st from "./profile.module.scss";
import MyPosts from "./my-posts/my-posts";
import ProfileInfo from "./profile-info/profile.info";

const Profile = ({data, dispatch}) => {

    return (
        <div className={st.profile}>
            <ProfileInfo/>
            <MyPosts data={data}
                     dispatch={dispatch}
            />
        </div>
    );
}

export default Profile;