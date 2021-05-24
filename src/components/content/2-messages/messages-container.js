import {
    addMessageActionCreator,
    updateNewMessageActionCreator
} from "../../../redux/messages-reducer";
import Messages from "./messages";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    data: state.messagesPage
})

const mapDispatchToProps = (dispatch) => ({
    processUpdateNewMessageText: (e) => {
        let message = e.target.value;
        let action = updateNewMessageActionCreator(message);
        dispatch(action);
    },
    processAddMessage: () => {
        let action = addMessageActionCreator();
        dispatch(action);
    }
})

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;