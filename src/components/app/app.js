import React from "react";
import st from "./app.module.scss";
import Header from "../header/header.js";
import Navbar from "../navbar/navbar.js";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import News from "../content/4-news/news";
import Music from "../content/5-music/music";
import Settings from "../content/6-settings/settings";
import MessagesContainer from "../content/2-messages/messages-container";
import UsersContainer from "../content/3-users/users-container";
import ProfileContainer from "../content/1-profile/profile-container";


const App = () => {
    return (
        <BrowserRouter>
            <div className={st.app}>
                <Header/>
                <div className={st.wrapper}>
                    <Navbar/>
                    <div className={st.content}>
                        <Route exact path="/" render={() => <Redirect to="/profile"/>}/>
                        <Route path="/profile"
                               render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs"
                               render={() => <MessagesContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
