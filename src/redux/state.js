import {renderEntireTree} from "./render";


let state = {
    profilePage: {
        newPostText: "",
        posts: [
            {id: 2, message: "It's my first post.", likesCount: 21},
            {id: 1, message: "Hi, how are you?", likesCount: 12},
        ],
    },
    dialogsPage: {
        newMessageText: "next",
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
    },
};

export const addPost = () => {
    let newPost = {
        id: state.profilePage.posts[0].id + 1,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts = [newPost, ...state.profilePage.posts];
    state.profilePage.newPostText = "";
    renderEntireTree(state);
}

export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    renderEntireTree(state);
}

export const updateNewMessageText = (text) => {
    state.dialogsPage.newMessageText = text;
    renderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: state.dialogsPage.messages[state.dialogsPage.messages.length],
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages = [...state.dialogsPage.messages, newMessage];
    state.dialogsPage.newMessageText = "";
    renderEntireTree(state);
}

export default state;