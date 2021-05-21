import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import App from "./components/app/app";
import {Provider} from "react-redux";


// const renderEntireTree = () => {
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
// };

// renderEntireTree();
// store.subscribe(renderEntireTree);