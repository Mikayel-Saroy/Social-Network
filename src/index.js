import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

let data = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post.", likesCount: 21},
    ],
    contacts: [
        {id: 1, name: "Benjamin"},
        {id: 2, name: "Albert"},
        {id: 3, name: "Henry"},
        {id: 4, name: "Gary"},
        {id: 5, name: "Robert"},
    ],
    messages: [
        {id: 1, message: "Hi Benjamin."},
        {id: 2, message: "Hi, How are you?"},
        {id: 3, message: "I'm fine, thanks."},
    ],
};


ReactDOM.render(<App data={data}/>, document.getElementById('root'));