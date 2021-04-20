import React from "react";
import st from "./my-posts.module.scss";
import Post from "./Post/post";

const MyPosts = () => {
    return (
        <div className={st.main}>
            <h1>My Posts</h1>
            <div className={st.new_post}>
                <h3>
                    <div>New Post</div>
                </h3>
                <textarea placeholder="Enter your text."/>
                <button>Add Post</button>
            </div>
            <Post message="Hi, how are you?" likes={20}/>
            <Post message="It's my first post." likes={15}/>
        </div>
    );
}

export default MyPosts;