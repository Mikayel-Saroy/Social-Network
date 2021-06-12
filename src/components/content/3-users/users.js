import React, {Component} from "react";
import st from "./users.module.scss";
import user_icon from "../../../assets/icons/user_icon.png";
import axios from "axios";

const FOLLOW = "Follow";
const UNFOLLOW = "Unfollow";


class Users extends Component {
    componentDidMount() {
        const {pageSize, currentPage} = this.props.data;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            })
    }

    setPage = (pageNo) => {
        this.props.setPage(pageNo);
        setTimeout(() => this.componentDidMount(), 0);
    }

    render() {
        const {data, processFollow, processUnfollow} = this.props;
        const {users, pageSize, totalUsersCount, currentPage} = data;

        let pageCount = Math.ceil(totalUsersCount / pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) pages.push(i);

        return (
            <div className={st.users}>
                <div className={st.navigator}>
                    {
                        pages.map(p => <div
                            className={currentPage === p ? st.activePageNo : st.pageNo}
                            key={p}
                            onClick={() => this.setPage(p)}>{p}</div>)
                    }
                </div>
                {
                    users.map(user => {
                        return (
                            <div key={user.id} className={st.user}>
                                <div className={st.left}>
                                    <img className={st.userImage} src={user.photos.small ? user.photos.small : user_icon}
                                         alt={user.name}/>
                                    {
                                        user.followed
                                            ? <button className={st.followButton}
                                                      onClick={() => processUnfollow(user.id)}>{UNFOLLOW}</button>
                                            : <button className={st.followButton}
                                                      onClick={() => processFollow(user.id)}>{FOLLOW}</button>
                                    }
                                </div>
                                <div className={st.right}>
                                    <div className={st.info}>
                                        <h3>{user.name}</h3>
                                        <p>{user.status}</p>
                                    </div>
                                    <div className={st.location}>
                                        <h3>{"user.location.country"}, {"user.location.city"}</h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Users;