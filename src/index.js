import ReactDOM from "react-dom";
import App from "./components/app/app";
import state, {
    subscribe,
    addLike,
    addMessage,
    addPost,
    updateNewMessageText,
    updateNewPostText
} from "./redux/state";


export const renderEntireTree = () => {
    ReactDOM.render(<App state={state}
                         updateNewPostText={updateNewPostText}
                         addPost={addPost}
                         addLike={addLike}
                         updateNewMessageText={updateNewMessageText}
                         addMessage={addMessage}
    />, document.getElementById('root'));
};

renderEntireTree();
subscribe(renderEntireTree);