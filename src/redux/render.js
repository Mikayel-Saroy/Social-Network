import ReactDOM from "react-dom";
import App from "../components/app/app";
import React from "react";
import {updateNewPostText, addPost, updateNewMessageText, addMessage} from "./state";

export const renderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         updateNewPostText={updateNewPostText}
                         addPost={addPost}
                         updateNewMessageText={updateNewMessageText}
                         addMessage={addMessage}
    />, document.getElementById('root'));
};