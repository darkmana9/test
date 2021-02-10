const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
    messageData: [],
    newMessageText: "",
}

export const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            return   {
                ...state,
                messageData: [...state.messageData, {messageText: state.newMessageText}],
                newMessageText: "",
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
           return  {
                ...state,
                newMessageText: action.newText
            };
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