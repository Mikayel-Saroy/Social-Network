import React from "react";
import st from "./preloader.module.scss";
import preloader from "../../../assets/svg/preloader.svg";


const Preloader = () => {
    return (
        <div className={st.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    );
}

export default Preloader;