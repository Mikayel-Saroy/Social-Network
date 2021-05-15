const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const ADD_LIKE = "ADD-LIKE";


const profileReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        case ADD_POST:
            let newPost = {
                id: state.posts[0].id + 1,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts = [newPost, ...state.posts];
            state.newPostText = "";
            return state;
        case ADD_LIKE:
            for (let post of state.posts) {
                if (post.id === action.id) {
                    let postIndex = state.posts.length - action.id;
                    state.posts[postIndex].likesCount += 1;
                }
            }
            return state;
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