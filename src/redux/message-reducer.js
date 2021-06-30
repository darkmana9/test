const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
    messageData: [],

}

export const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messageData: [...state.messageData, {messageText: action.newMessageText}],

            };
        }

        default: {
            return state;
        }
    }
}

export const sendMessageCreator = (newMessageText) => {
    return {
        type: SEND_MESSAGE,
        newMessageText
    }
}
