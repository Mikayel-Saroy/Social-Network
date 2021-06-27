import React from "react";
import st from "./profile-info.module.scss";
import react_wall from "../../../../assets/images/react-wall.png";
import Preloader from "../../../_reusables/preloader/preloader";

const ProfileInfo = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    } else {
        console.log(profile);
        const {
            fullName,
            aboutMe,
            photos: {
                large,
            },
        } = profile;

        return (
            <div className={st.profileInfo}>
                <div className={st.wallpaper}>
                    <img src={react_wall} alt="react-wall"/>
                </div>
                <div className={st.description}>
                    <img src={large} alt="profile_picture"/>
                    <div className={st.info}>
                        <div className={st.fullName}>{fullName}</div>
                        <div className={st.aboutMe}>{aboutMe}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;