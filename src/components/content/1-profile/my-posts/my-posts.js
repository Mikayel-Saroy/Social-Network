import React from "react";
import st from "./my-posts.module.scss";
import Post from "./Post/post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/store";

const PLACEHOLDER = "Enter your text.";


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

    let newPostElement = React.createRef();

    const processNewPostText = () => {
        let post = newPostElement.current.value;
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
                          ref={newPostElement}
                          value={newPostText}
                          onChange={processNewPostText}/>
                <button onClick={processAddPost}>Add Post</button>
            </div>
            {postElem}
        </div>
    );
}

export default MyPosts;