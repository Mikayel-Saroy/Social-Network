import React from "react";
import st from "./app.module.scss";
import Header from "../header/header.js";
import Navbar from "../navbar/navbar.js";
import Profile from "../content/1-profile/profile.js";
import Messages from "../content/2-messages/messages";
import {BrowserRouter, Route} from "react-router-dom";
import Users from "../content/3-users/users";
import News from "../content/4-news/news";
import Music from "../content/5-music/music";
import Settings from "../content/6-settings/settings";

const App = ({data}) => {
    const {posts, contacts, messages} = data;


    return (
        <BrowserRouter>
        <div className={st.app}>
            <Header/>
            <div className={st.wrapper}>
                <Navbar/>
                <div className={st.content}>
                    <Route render={() => <Profile posts={posts}/>} path="/profile"/>
                    <Route render={() => <Messages contacts={contacts}
                                                   messages={messages}/>} path="/dialogs"/>
                    <Route render={() => <Users/>} path="/users"/>
                    <Route render={() => <News/>} path="/news"/>
                    <Route render={() => <Music/>} path="/music"/>
                    <Route render={() => <Settings/>} path="/settings"/>
                </div>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
