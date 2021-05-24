import React from "react";
import st from "./users.module.scss";

const Users = ({data, processFollow, processUnfollow}) => {
    let users = data.users.map(user => {
        let followButtonText;
        user.isFollowed ? followButtonText = "Unfollow" : followButtonText = "Follow";


        const processFollowFunction = (isFollowed, id) => {
            debugger;
            isFollowed ? processUnfollow(id) : processFollow(id);
        }

        return (
            <div key={user.id}>
                <button onClick={() => processFollowFunction(user.isFollowed, user.id)}>{followButtonText}</button>
                <p>{user.name}</p>
            </div>
        )
    })

    return (
        <div className={st.main}>
            {users}
        </div>
    );
};

export default Users;