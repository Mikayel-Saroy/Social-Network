import React from "react";
import st from "./app.module.scss";
import logo from "./assets/icons/logo.png";

const App = () => {
    return (
        <div className={st.main}>
            <div className={st.header}>
                <img src={logo} alt="ReactJS"/>
            </div>
            <div className={st.wrapper}>
                <div className={st.nav}>
                    <div className={st.links}>Profile</div>
                    <div className={st.links}>Messages</div>
                    <div className={st.links}>Users</div>
                    <div className={st.links}>News</div>
                    <div className={st.links}>Music</div>
                    <div className={st.links}>Settings</div>
                </div>
                <div className={st.content}>
                    #CONTENT
                </div>
            </div>
        </div>
    );
}

export default App;
