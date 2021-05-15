import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";


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
        messagesPage: {
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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._subscriber();
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
    //     this._state.messagesPage.newMessageText = text;
    //     this._subscriber();
    // },
    // addMessage() {
    //     let newMessage = {
    //         id: this._state.messagesPage.messages.length + 1,
    //         message: this._state.messagesPage.newMessageText
    //     }
    //     this._state.messagesPage.messages = [...this._state.messagesPage.messages, newMessage];
    //     this._state.messagesPage.newMessageText = "";
    //     this._subscriber();
    // }
}

export default store;
window.store = store;