import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import App from "./components/app/app";


const renderEntireTree = () => {
    ReactDOM.render(<App state={store.getState()}
                         dispatch={store.dispatch.bind(store)}
    />, document.getElementById('root'));
};

renderEntireTree();
store.subscribe(renderEntireTree);