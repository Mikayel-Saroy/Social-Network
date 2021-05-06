let state = {
    profilePage: {
        newPostText: "",
        posts: [
            {id: 4, message: "I'm fine too, thanks for asking.", likesCount: 10},
            {id: 3, message: "I'm fine, thanks brother, what about?", likesCount: 32},
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

let rerenderEntireTree = () => {}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree();
}

export const addPost = () => {
    let newPost = {
        id: state.profilePage.posts[0].id + 1,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts = [newPost, ...state.profilePage.posts];
    state.profilePage.newPostText = "";
    rerenderEntireTree();
}

export const addLike = (id) => {
    for (let post of state.profilePage.posts) {
        if (post.id === id) {
            let postIndex = state.profilePage.posts.length - id;
            state.profilePage.posts[postIndex].likesCount += 1;
        }
    }
    rerenderEntireTree();
}

export const updateNewMessageText = (text) => {
    state.dialogsPage.newMessageText = text;
    rerenderEntireTree();
}

export const addMessage = () => {
    let newMessage = {
        id: state.dialogsPage.messages[state.dialogsPage.messages.length],
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages = [...state.dialogsPage.messages, newMessage];
    state.dialogsPage.newMessageText = "";
    rerenderEntireTree();
}

export default state;