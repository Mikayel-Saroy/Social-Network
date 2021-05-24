const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: [
        {
            id: 1,
            isFollowed: false,
            name: "Mikayel",
            status: "Full stack developer",
            location: {country: "Armenia", city: "Yerevan"}
        },
        {
            id: 2,
            isFollowed: true,
            name: "Anyut",
            status: "UI/UX designer",
            location: {country: "Armenia", city: "Yerevan"}
        },
        {
            id: 3,
            isFollowed: true,
            name: "Mary",
            status: "HR in Google",
            location: {country: "United States", city: "San Francisco"}
        },
        {
            id: 4,
            isFollowed: true,
            name: "Jack",
            status: "Residential Architect",
            location: {country: "United Kingdom", city: "Manchester"}
        },
        {
            id: 5,
            isFollowed: false,
            name: "Stephan",
            status: "President of Bugatti Automobiles",
            location: {country: "Germany", city: "Berlin"}
        },
        {
            id: 6,
            isFollowed: false,
            name: "Enzo",
            status: "Founder of Ferrari",
            location: {country: "Italy", city: "Modena"}
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {...state};
            stateCopy.users = [...state.users];
            stateCopy.users[action.id - 1] = {...state.users[action.id - 1]}
            stateCopy.users[action.id - 1].isFollowed = true
            return stateCopy;
        }
        case UNFOLLOW:
            let stateCopy = {...state};
            stateCopy.users = [...state.users];
            stateCopy.users[action.id - 1] = {...state.users[action.id - 1]}
            stateCopy.users[action.id - 1].isFollowed = false
            return stateCopy;
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