import React from "react";
import st from "./navbar.module.scss";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={st.main}>
            <div className={st.links}>
                <NavLink to="/profile" activeClassName={st.activeLink}>Profile</NavLink>
            </div>
            <div className={st.links}>
                <NavLink to="/dialogs" activeClassName={st.activeLink}>Messages</NavLink>
            </div>
            <div className={st.links}>
                <NavLink to="/users" activeClassName={st.activeLink}>Users</NavLink>
            </div>
            <div className={st.links}>
                <NavLink to="/news" activeClassName={st.activeLink}>News</NavLink>
            </div>
            <div className={st.links}>
                <NavLink to="/music" activeClassName={st.activeLink}>Music</NavLink>
            </div>
            <div className={st.links}>
                <NavLink to="/settings" activeClassName={st.activeLink}>Settings</NavLink>
            </div>
        </div>
    );
}

export default Navbar;