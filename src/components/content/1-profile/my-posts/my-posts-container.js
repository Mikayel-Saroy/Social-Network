import {
    addLikeActionCreator,
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../../redux/profile-reducer";
import MyPosts from "./my-posts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        data: state.profilePage,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        processNewPostText: (e) => {
            let post = e.target.value;
            let action = updateNewPostTextActionCreator(post)
            dispatch(action);
        },
        processAddPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        processAddLike: (id) => {
            let action = addLikeActionCreator(id);
            return dispatch(action);
        }
    };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;