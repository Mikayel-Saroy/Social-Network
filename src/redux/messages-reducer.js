const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";


const messagesReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages = [...state.messages, newMessage];
            state.newMessageText = "";
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