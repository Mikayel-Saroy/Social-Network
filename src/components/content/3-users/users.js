import React from "react";
import st from "./users.module.scss";
import user_icon from "../../../assets/icons/user_icon.png";
import Preloader from "../../_reusables/preloader/preloader";
import {NavLink} from "react-router-dom";

const FOLLOW = "Follow";
const UNFOLLOW = "Unfollow";


const Users = (props) => {
    const {
        pages,
        currentPage,
        users,
        setPage,
        processFollow,
        processUnfollow,
        isFetching,
    } = props;

    const usersElem = users.map(user => {
        return (
            <div key={user.id} className={st.user}>
                <div className={st.left}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={st.userImage} src={user.photos.small ? user.photos.small : user_icon}
                             alt={user.name}/>
                    </NavLink>
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
                        <NavLink to={`/profile/${user.id}`}>
                            <h3>{user.name}</h3>
                        </NavLink>
                        <p>{user.status}</p>
                    </div>
                    <div className={st.location}>
                        <h3>{"user.location.country"}, {"user.location.city"}</h3>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className={st.users}>
            <div className={st.navigator}>
                {
                    pages.map(p => <div
                        className={currentPage === p ? st.activePageNo : st.pageNo}
                        key={p}
                        onClick={() => setPage(p)}>{p}</div>)
                }
            </div>
            {isFetching ? <Preloader/> : usersElem}
        </div>
    );
}

export default Users;