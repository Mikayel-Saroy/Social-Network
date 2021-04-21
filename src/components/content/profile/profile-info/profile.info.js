import React from "react";
import st from "./profile-info.module.scss";
import react_wall from "../../../../assets/images/react-wall.png";

const ProfileInfo = () => {
    return (
        <div className={st.profileInfo}>
            <div className={st.wallpaper}>
                <img src={react_wall} alt="react-wall"/>
            </div>
            <div className={st.description}>
                Profile Picture + Description
            </div>
        </div>
    );
}

export default ProfileInfo;