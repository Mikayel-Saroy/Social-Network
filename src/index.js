import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import state from "./redux/state";
import {addPost} from "./redux/state";


ReactDOM.render(<App state={state}
                     addPost={addPost}/>, document.getElementById('root'));