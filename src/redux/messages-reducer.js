const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";


let initialState = {
    newMessageText: "",
    contacts: [
        {id: 1, name: "Benjamin"},
        {id: 2, name: "Albert"},
        {id: 3, name: "Henry"},
        {id: 4, name: "Gary"},
        {id: 5, name: "Robert"},
    ],
    messages: [
        {id: 1, message: "Hi Benjamin."},
        {id: 2, message: "Hi, How are you?"},
        {id: 3, message: "I'm fine, thanks."},
    ],
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        case ADD_MESSAGE:
            console.log("XXX");
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages = [...state.messages, newMessage];
            state.newMessageText = "";
            console.log(state);
            return state;
        default:
            return state;
    }
}

export default messagesReducer;


export const updateNewMessageActionCreator = (message) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: message
})
export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})