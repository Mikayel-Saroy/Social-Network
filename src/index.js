import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./components/app/app";


const renderEntireTree = () => {
    ReactDOM.render(<App state={store.getState()}
                         updateNewPostText={store.updateNewPostText.bind(store)}
                         addPost={store.addPost.bind(store)}
                         addLike={store.addLike.bind(store)}
                         updateNewMessageText={store.updateNewMessageText.bind(store)}
                         addMessage={store.addMessage.bind(store)}
    />, document.getElementById('root'));
};

renderEntireTree();
store.subscribe(renderEntireTree);