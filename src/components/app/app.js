import React from "react";
import st from "./app.module.scss";
import Header from "../header/header.js";
import Navbar from "../navbar/navbar.js";
import Profile from "../content/profile/profile.js";

const App = () => {
    return (
        <div className={st.main}>
            <Header/>
            <div className={st.wrapper}>
                <Navbar/>
                <div className={st.content}>
                    <Profile/>
                </div>
            </div>
        </div>
    );
}

export default App;
