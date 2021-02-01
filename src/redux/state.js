const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_TEXT_AREA = "UPDATE-TEXT-AREA";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

export let store = {
    _state: {
        profilePage: {
            postData: [],
            newPostText: "",
        },
        messages: {
            messageData: [],
            newMessageText: "",
        },

    },

    getState() {
        return this._state;
    },

    callSub() {

    },
    subscribe(observer) {
        this.callSub = observer;
    },
    dispatch(action) {
        if (action.type === "ADD-NEW-POST") {
            let newPost = {
                authorName: "123",
                postText: this._state.profilePage.newPostText,
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = "";
            this.callSub(this._state)
        } else if (action.type === "UPDATE-TEXT-AREA") {
            this._state.profilePage.newPostText = action.newText;
            this.callSub(this._state);
        } else if (action.type === "SEND-MESSAGE") {
            let newMessage = {
               messageText:  this._state.messages.newMessageText,
            };
            this._state.messages.messageData.push(newMessage);
            this._state.messages.newMessageText = "";
            this.callSub(this._state);
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.messages.newMessageText = action.newText;
            this.callSub(this._state);
        }

    },

}

export const addPostActionCreator = () => {
    return {
        type: ADD_NEW_POST
    }
}
export const updateTextAreaActionCreator = (text) => {
    return {
        type: UPDATE_TEXT_AREA,
        newText: text,
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






