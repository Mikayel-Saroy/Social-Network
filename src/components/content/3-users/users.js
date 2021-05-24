import React from "react";
import st from "./users.module.scss";

const FOLLOW = "Follow";
const UNFOLLOW = "Unfollow";


const Users = ({data, processFollow, processUnfollow}) => {
    return (
        <div className={st.users}>
            {
                data.users.map(user => {
                    return (
                        <div key={user.id} className={st.user}>
                            <div className={st.left}>
                                <img className={st.userImage} src={user.img} alt={user.name}/>
                                {
                                    user.isFollowed
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
                                    <h3>{user.location.country}, {user.location.city}</h3>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Users;