const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const ADD_LIKE = "ADD-LIKE";


let initialState = {
    newPostText: "",
    posts: [
        {id: 4, message: "I'm fine too, thanks for asking.", likesCount: 10},
        {id: 3, message: "I'm fine, thanks brother, what about?", likesCount: 32},
        {id: 2, message: "It's my first post.", likesCount: 21},
        {id: 1, message: "Hi, how are you?", likesCount: 12},
    ],
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        case ADD_POST: {
            let newPost = {
                id: state.posts[0].id + 1,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [newPost, ...state.posts];
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case ADD_LIKE: {
            let stateCopy = {...state};
            for (let post of stateCopy.posts) {
                if (post.id === action.id) {
                    let postIndex = stateCopy.posts.length - action.id;
                    stateCopy.posts[postIndex].likesCount += 1;
                }
            }
            return stateCopy;
        }
        default:
            return state;
    }
}

export default profileReducer;


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