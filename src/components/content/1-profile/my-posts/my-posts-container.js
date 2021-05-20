import React from "react";
import {
    addLikeActionCreator,
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../../redux/profile-reducer";
import MyPosts from "./my-posts";
import StoreContext from "../../../../store-context";


const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {
            store => {
                const {dispatch} = store;
                const data = store.getState().profilePage;

                const processNewPostText = (e) => {
                    let post = e.target.value;
                    let action = updateNewPostTextActionCreator(post)
                    dispatch(action);
                }

                const processAddPost = () => {
                    let action = addPostActionCreator();
                    dispatch(action);
                }

                const processAddLike = (id) => {
                    let action = addLikeActionCreator(id);
                    dispatch(action);
                }

                return <MyPosts data={data}
                                processAddPost={processAddPost}
                                processNewPostText={processNewPostText}
                                processAddLike={processAddLike}/>;
            }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;