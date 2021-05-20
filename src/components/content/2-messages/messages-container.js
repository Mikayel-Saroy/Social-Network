import React from "react";
import {
    addMessageActionCreator,
    updateNewMessageActionCreator
} from "../../../redux/messages-reducer";
import Messages from "./messages";
import StoreContext from "../../../store-context";


const MessagesContainer = () => {
    return <StoreContext.Consumer>
        {
            store => {
                const processUpdateNewMessageText = (e) => {
                    let message = e.target.value;
                    let action = updateNewMessageActionCreator(message);
                    store.dispatch(action);
                }

                const processAddMessage = () => {
                    let action = addMessageActionCreator();
                    store.dispatch(action);
                }

                return <Messages data={store.getState().messagesPage}
                                 processUpdateNewMessageText={processUpdateNewMessageText}
                                 processAddMessage={processAddMessage}/>;
            }
        }
    </StoreContext.Consumer>
}

export default MessagesContainer;