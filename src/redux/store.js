const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const ADD_LIKE = "ADD-LIKE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";


let store = {
    _state: {
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
            newMessageText: "",
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
    },
    _subscriber() {},


    // Primary Methods
    getState() {
       return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },


    // Dispatch
    dispatch(action) {  //  { type: "ABC-DEF" }
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._subscriber();
        } else if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.profilePage.posts[0].id + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts = [newPost, ...this._state.profilePage.posts];
            this._state.profilePage.newPostText = "";
            this._subscriber();
        } else if (action.type === ADD_LIKE) {
            for (let post of this._state.profilePage.posts) {
                if (post.id === action.id) {
                    let postIndex = this._state.profilePage.posts.length - action.id;
                    this._state.profilePage.posts[postIndex].likesCount += 1;
                }
            }
            this._subscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.text;
            this._subscriber();
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages = [...this._state.dialogsPage.messages, newMessage];
            this._state.dialogsPage.newMessageText = "";
            this._subscriber();
        }
    },


    // // Profile Page Methods
    // updateNewPostText(text) {
    //     this._state.profilePage.newPostText = text;
    //     this._subscriber();
    // },
    // addPost() {
    //     let newPost = {
    //         id: this._state.profilePage.posts[0].id + 1,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts = [newPost, ...this._state.profilePage.posts];
    //     this._state.profilePage.newPostText = "";
    //     this._subscriber();
    // },
    // addLike(id) {
    //     for (let post of this._state.profilePage.posts) {
    //         if (post.id === id) {
    //             let postIndex = this._state.profilePage.posts.length - id;
    //             this._state.profilePage.posts[postIndex].likesCount += 1;
    //         }
    //     }
    //     this._subscriber();
    // },
    //
    //
    // // Messages Page Methods
    // updateNewMessageText(text) {
    //     this._state.dialogsPage.newMessageText = text;
    //     this._subscriber();
    // },
    // addMessage() {
    //     let newMessage = {
    //         id: this._state.dialogsPage.messages.length + 1,
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.messages = [...this._state.dialogsPage.messages, newMessage];
    //     this._state.dialogsPage.newMessageText = "";
    //     this._subscriber();
    // }
}

export const updateNewPostTextActionCreator = (post) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: post
})
export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const addLikeActionCreator = (id) => ({
    type: ADD_LIKE,
    id: id
})
export const updateNewMessageActionCreator = (message) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: message
})
export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})


export default store;
window.store = store;