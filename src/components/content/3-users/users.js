import React from "react";
import st from "./users.module.scss";
import user_icon from "../../../assets/icons/user_icon.png";

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
    } = props;

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

export default Users;