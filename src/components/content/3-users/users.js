import React, {Component} from "react";
import st from "./users.module.scss";
import user_icon from "../../../assets/icons/user_icon.png";
import axios from "axios";

const FOLLOW = "Follow";
const UNFOLLOW = "Unfollow";


class Users extends Component {
    constructor() {
        super();
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                this.props.setUsers(res.data.items);
            })
    }

    render() {
        const {data, processFollow, processUnfollow, setUsers} = this.props;

        return (
            <div className={st.users}>
                {
                    data.users.map(user => {
                        return (
                            <div key={user.id} className={st.user}>
                                <div className={st.left}>
                                    <img className={st.userImage} src={user.img ? user.img : user_icon}
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