const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";


let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 36,
    currentPage: 1,
    isFetching: true
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
            };
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.pageNo,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
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
export const toggleIsFetchingAC = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
})