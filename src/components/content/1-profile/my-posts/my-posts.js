import React from "react";
import st from "./my-posts.module.scss";
import Post from "./Post/post";

const PLACEHOLDER = "Enter your post";


const MyPosts = ({data, processAddPost, processNewPostText, processAddLike}) => {
    const {newPostText, posts} = data;

    const postElem = posts.map(({id, message, likesCount}) => {
        return <Post key={id}
                     id={id}
                     message={message}
                     likesCount={likesCount}
                     processAddLike={processAddLike}/>;
    })

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