import React from "react";
import st from "./app.module.scss";
import Header from "./components/header/header.js";
import Navbar from "./components/navbar/navbar.js";
import Profile from "./components/content/profile/profile.js";

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
