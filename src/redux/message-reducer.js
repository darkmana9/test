const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
    messageData: [],
    newMessageText: "",
}

export const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            let newMessage = {
                messageText: stateCopy.newMessageText,
            };
            stateCopy.messageData = [...state.messageData];
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}
export const updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    }
}