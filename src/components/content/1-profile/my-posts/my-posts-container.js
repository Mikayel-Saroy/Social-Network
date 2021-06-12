import {
    addLikeAC,
    addPostAC,
    updateNewPostTextAC
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
            let action = updateNewPostTextAC(post)
            dispatch(action);
        },
        processAddPost: () => {
            let action = addPostAC();
            dispatch(action);
        },
        processAddLike: (id) => {
            let action = addLikeAC(id);
            return dispatch(action);
        }
    };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;