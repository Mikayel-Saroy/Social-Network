import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import App from "./components/app/app";
import StoreContext from "./store-context";


const renderEntireTree = () => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>, document.getElementById('root'));
};

renderEntireTree();
store.subscribe(renderEntireTree);