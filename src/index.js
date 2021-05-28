import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import App from "./components/app/app";
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));