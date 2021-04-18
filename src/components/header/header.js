import React from "react";
import st from "./header.module.scss";
import logo from "../../assets/icons/logo.png";

const Header = () => {
    return (
        <div className={st.main}>
            <img src={logo} alt="ReactJS"/>
            <div className={st.headline}>Social Network (Learn Vertical Align)</div>
        </div>
    );
}

export default Header;