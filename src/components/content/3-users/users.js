import React from "react";
import st from "./users.module.scss";
import user_icon from "../../../assets/icons/user_icon.png";
import axios from "axios";

const FOLLOW = "Follow";
const UNFOLLOW = "Unfollow";


const Users = ({data, processFollow, processUnfollow, setUsers}) => {
    // const users = [
    //     {
    //         id: 1,
    //         img: user_icon,
    //         isFollowed: false,
    //         name: "Mikayel",
    //         status: "Full stack developer",
    //         location: {country: "Armenia", city: "Yerevan"}
    //     },
    //     {
    //         id: 2,
    //         img: user_icon,
    //         isFollowed: true,
    //         name: "Anyut",
    //         status: "UI/UX designer",
    //         location: {country: "Armenia", city: "Yerevan"}
    //     },
    //     {
    //         id: 3,
    //         img: user_icon,
    //         isFollowed: true,
    //         name: "Mary",
    //         status: "HR in Google",
    //         location: {country: "United States", city: "San Francisco"}
    //     },
    //     {
    //         id: 4,
    //         img: user_icon,
    //         isFollowed: true,
    //         name: "Jack",
    //         status: "Residential Architect",
    //         location: {country: "United Kingdom", city: "Manchester"}
    //     },
    //     {
    //         id: 5,
    //         img: user_icon,
    //         isFollowed: false,
    //         name: "Stephan",
    //         status: "President of Bugatti Automobiles",
    //         location: {country: "Germany", city: "Berlin"}
    //     },
    //     {
    //         id: 6,
    //         img: user_icon,
    //         isFollowed: false,
    //         name: "Enzo",
    //         status: "Founder of Ferrari",
    //         location: {country: "Italy", city: "Modena"}
    //     },
    // ];
    // if (data.users.length === 0) setUsers(users);

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(res => {
            console.log("Data:  " + res.data.items);
            console.log("Users: " + data.users.length);
            if (data.users.length === 0) {
                setUsers(res.data.items);
            }
        })

    return (
        <div className={st.users}>
            {
                data.users.map(user => {
                    return (
                        <div key={user.id} className={st.user}>
                            <div className={st.left}>
                                <img className={st.userImage} src={user.img ? user.img : user_icon} alt={user.name}/>
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
};

export default Users;