import React from "react";
import st from "./navbar.module.scss";

const Navbar = () => {
    return (
        <div className={st.main}>
            <div className={`${st.links} ${st.active}`}>Profile</div>
            <div className={st.links}>Messages</div>
            <div className={st.links}>Users</div>
            <div className={st.links}>News</div>
            <div className={st.links}>Music</div>
            <div className={st.links}>Settings</div>
        </div>
    );
}

export default Navbar;