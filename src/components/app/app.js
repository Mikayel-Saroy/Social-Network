import React from "react";
import st from "./app.module.scss";
import Header from "../header/header.js";
import Navbar from "../navbar/navbar.js";
import Profile from "../content/1-profile/profile.js";
import Messages from "../content/2-messages/messages";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Users from "../content/3-users/users";
import News from "../content/4-news/news";
import Music from "../content/5-music/music";
import Settings from "../content/6-settings/settings";


const App = ({state, dispatch}) => {
    const {profilePage, messagesPage} = state;

    return (
        <BrowserRouter>
            <div className={st.app}>
                <Header/>
                <div className={st.wrapper}>
                    <Navbar/>
                    <div className={st.content}>
                        <Route path="/" render={() => <Redirect to="/profile" />}/>
                        <Route path="/profile"
                               render={() => <Profile data={profilePage}
                                                      dispatch={dispatch}
                               />}/>
                        <Route path="/dialogs"
                               render={() => <Messages data={messagesPage}
                                                       dispatch={dispatch}
                               />}/>
                        <Route path="/users" render={() => <Users/>}/>
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
