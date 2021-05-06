import ReactDOM from "react-dom";
import App from "../components/app/app";
import React from "react";
import {
    updateNewPostText,
    addPost,
    updateNewMessageText,
    addMessage,
    addLike
} from "./state";

export const renderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         updateNewPostText={updateNewPostText}
                         addPost={addPost}
                         addLike={addLike}
                         updateNewMessageText={updateNewMessageText}
                         addMessage={addMessage}
    />, document.getElementById('root'));
};