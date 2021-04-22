import React from "react";
import st from "./my-posts.module.scss";
import Post from "./Post/post";

const PLACEHOLDER = "Enter your text.";


const MyPosts = () => {
    const posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post.", likesCount: 21},
    ];

    const postElem = posts.map(({id, message, likesCount}) => {
        return <Post key={id} id={id} message={message} likesCount={likesCount}/>;
    })

    return (
        <div className={st.myPosts}>
            <h1>My Posts</h1>
            <div className={st.new_post}>
                <h3>New Post</h3>
                <textarea placeholder={PLACEHOLDER}/>
                <button>Add Post</button>
            </div>
            {postElem}
        </div>
    );
}

export default MyPosts;