const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true};
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
                        return {...user, followed: false};
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