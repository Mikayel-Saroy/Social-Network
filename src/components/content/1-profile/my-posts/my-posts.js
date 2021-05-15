import React from "react";
import st from "./my-posts.module.scss";
import Post from "./Post/post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";

const PLACEHOLDER = "Enter your post";


const MyPosts = ({data, dispatch}) => {
    const {newPostText, posts} = data;

    const postElem = posts.map(({id, message, likesCount}) => {
        return <Post key={id}
                     id={id}
                     message={message}
                     likesCount={likesCount}
                     dispatch={dispatch}
        />;
    })

    const processNewPostText = (e) => {
        let post = e.target.value;
        let action = updateNewPostTextActionCreator(post)
        dispatch(action);
    }

    const processAddPost = () => {
        let action = addPostActionCreator();
        dispatch(action);
    }

    return (
        <div className={st.myPosts}>
            <h1>My Posts</h1>
            <div className={st.new_post}>
                <h3>New Post</h3>
                <textarea placeholder={PLACEHOLDER}
                          value={newPostText}
                          onChange={processNewPostText}/>
                <button onClick={processAddPost}>Add Post</button>
            </div>
            {postElem}
        </div>
    );
}

export default MyPosts;