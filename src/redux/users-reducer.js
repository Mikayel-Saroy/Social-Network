import user_icon from "./../assets/icons/user_icon.png";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        {
            id: 1,
            img: user_icon,
            isFollowed: false,
            name: "Mikayel",
            status: "Full stack developer",
            location: {country: "Armenia", city: "Yerevan"}
        },
        {
            id: 2,
            img: user_icon,
            isFollowed: true,
            name: "Anyut",
            status: "UI/UX designer",
            location: {country: "Armenia", city: "Yerevan"}
        },
        {
            id: 3,
            img: user_icon,
            isFollowed: true,
            name: "Mary",
            status: "HR in Google",
            location: {country: "United States", city: "San Francisco"}
        },
        {
            id: 4,
            img: user_icon,
            isFollowed: true,
            name: "Jack",
            status: "Residential Architect",
            location: {country: "United Kingdom", city: "Manchester"}
        },
        {
            id: 5,
            img: user_icon,
            isFollowed: false,
            name: "Stephan",
            status: "President of Bugatti Automobiles",
            location: {country: "Germany", city: "Berlin"}
        },
        {
            id: 6,
            img: user_icon,
            isFollowed: false,
            name: "Enzo",
            status: "Founder of Ferrari",
            location: {country: "Italy", city: "Modena"}
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, isFollowed: true};
                    } else {
                        return user;
                    }
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, isFollowed: false};
                    } else {
                        return user;
                    }
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export default usersReducer;


export const followActionCreator = (id) => ({
    type: FOLLOW,
    id: id
})
export const unfollowActionCreator = (id) => ({
    type: UNFOLLOW,
    id: id
})
export const setUsersActionCreator = (users) => ({
    type: SET_USERS,
    users: users
})