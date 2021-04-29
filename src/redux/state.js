let state = {
    profilePage: {
        posts: [
            {id: 2, message: "It's my first post.", likesCount: 21},
            {id: 1, message: "Hi, how are you?", likesCount: 12},
        ],
    },
    dialogsPage: {
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


export function addPost(post) {
    let newPost = {
        id: state.profilePage.posts[0].id + 1,
        message: post,
        likesCount: 0
    };
    state.profilePage.posts = [newPost, ...state.profilePage.posts];
    console.log(state.profilePage.posts);
}

export default state;