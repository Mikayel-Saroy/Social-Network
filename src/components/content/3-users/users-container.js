import React from "react";
import Users from "./users";
import {connect} from "react-redux";
import {
    setUsersAC,
    followAC,
    unfollowAC,
    setPageAC
} from "../../../redux/users-reducer";


const mapStateToProps = (state) => ({
    data: state.usersPage
})

const mapDispatchToProps = (dispatch) => ({
    processFollow: (id) => {
        let action = followAC(id)
        dispatch(action);
    },
    processUnfollow: (id) => {
        let action = unfollowAC(id);
        dispatch(action);
    },
    setUsers: (users) => {
        let action = setUsersAC(users);
        dispatch(action);
    },
    setPage: (pageNo) => {
        let action = setPageAC(pageNo);
        dispatch(action);
    }
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;