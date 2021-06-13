import React, {Component} from "react";
import {connect} from "react-redux";
import {
    setUsersAC,
    followAC,
    unfollowAC,
    setPageAC,
    toggleIsFetchingAC
} from "../../../redux/users-reducer";
import axios from "axios";
import Users from "./users";


class UsersAPI extends Component {
    componentDidMount() {
        const {pageSize, currentPage} = this.props.data;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.toggleIsFetching(false);
            })
    }

    setPage = (pageNo) => {
        this.props.setPage(pageNo);
        this.props.toggleIsFetching(true);
        setTimeout(() => this.componentDidMount(), 0);
    }

    render() {
        const {data, processFollow, processUnfollow} = this.props;
        const {users, pageSize, totalUsersCount, currentPage, isFetching} = data;

        let pageCount = Math.ceil(totalUsersCount / pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) pages.push(i);

        return <Users pages={pages}
                      currentPage={currentPage}
                      users={users}
                      setPage={this.setPage}
                      processFollow={processFollow}
                      processUnfollow={processUnfollow}
                      isFetching={isFetching}
        />;
    }
}

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
    },
    toggleIsFetching: (isFetching) => {
        let action = toggleIsFetchingAC(isFetching);
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);