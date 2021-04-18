import React from "react";
import st from "./profile.module.scss";
import react_wall from "../../../assets/images/react-wall.png";

const Profile = () => {
    return (
        <div className={st.main}>
            <div className={st.wallpaper}>
                <img src={react_wall} alt="react-wall"/>
            </div>
        </div>
    );
}

export default Profile;