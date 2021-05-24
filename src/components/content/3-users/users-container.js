import React from "react";
import Users from "./users";
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator} from "../../../redux/users-reducer";


const mapStateToProps = (state) => ({
    data: state.usersPage
})

const mapDispatchToProps = (dispatch) => ({
    processFollow: (id) => {
        let action = followActionCreator(id)
        dispatch(action);
    },
    processUnfollow: (id) => {
        let action = unfollowActionCreator(id);
        dispatch(action);
    }
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;