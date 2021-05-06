import React from "react";
import st from "./my-posts.module.scss";
import Post from "./Post/post";

const PLACEHOLDER = "Enter your text.";


const MyPosts = ({data, updateNewPostText, addPost, addLike}) => {
    const {newPostText, posts} = data;

    const postElem = posts.map(({id, message, likesCount}) => {
        return <Post key={id}
                     id={id}
                     message={message}
                     likesCount={likesCount}
                     addLike={addLike}/>;
    })

    let newPostElement = React.createRef();

    const processNewPostText = () => {
        let post = newPostElement.current.value;
        updateNewPostText(post);
    }

    const processAddPost = () => {
        addPost();
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