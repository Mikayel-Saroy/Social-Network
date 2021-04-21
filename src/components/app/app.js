import React from "react";
import st from "./app.module.scss";
import Header from "../header/header.js";
import Navbar from "../navbar/navbar.js";
import Profile from "../content/profile/profile.js";
import Dialogs from "../content/dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Users from "../content/users/users";
import News from "../content/news/news";
import Music from "../content/music/music";
import Settings from "../content/settings/settings";

const App = () => {
    return (
        <BrowserRouter>
        <div className={st.main}>
            <Header/>
            <div className={st.wrapper}>
                <Navbar/>
                <div className={st.content}>
                    <Route component={Profile} path="/profile"/>
                    <Route component={Dialogs} path="/dialogs"/>
                    <Route component={Users} path="/users"/>
                    <Route component={News} path="/news"/>
                    <Route component={Music} path="/music"/>
                    <Route component={Settings} path="/settings"/>
                </div>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
