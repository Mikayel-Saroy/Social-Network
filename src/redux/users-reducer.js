const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1
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
                users: [...action.users]
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.pageNo,
            }
        default:
            return state;
    }
}

export default usersReducer;


// AC = ActionCreator
export const followAC = (id) => ({
    type: FOLLOW,
    id: id
})
export const unfollowAC = (id) => ({
    type: UNFOLLOW,
    id: id
})
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users: users
})
export const setPageAC = (pageNo) => ({
    type: SET_PAGE,
    pageNo: pageNo,
})