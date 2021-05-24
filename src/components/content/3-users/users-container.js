import React from "react";
import Users from "./users";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../../redux/users-reducer";


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
    },
    setUsers: (users) => {
        let action = setUsersActionCreator(users);
        dispatch(action);
    }
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;