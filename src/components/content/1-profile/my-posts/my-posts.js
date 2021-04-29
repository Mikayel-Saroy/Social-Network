import React from "react";
import st from "./my-posts.module.scss";
import Post from "./Post/post";

const PLACEHOLDER = "Enter your text.";


const MyPosts = ({posts}) => {
    const postElem = posts.map(({id, message, likesCount}) => {
        return <Post key={id} id={id} message={message} likesCount={likesCount}/>;
    })

    let newPostElement = React.createRef();

    const addPost = () => {
        let post = newPostElement.current.value;
        alert(post);
    }

    return (
        <div className={st.myPosts}>
            <h1>My Posts</h1>
            <div className={st.new_post}>
                <h3>New Post</h3>
                <textarea placeholder={PLACEHOLDER} ref={newPostElement}/>
                <button onClick={addPost}>Add Post</button>
            </div>
            {postElem}
        </div>
    );
}

export default MyPosts;