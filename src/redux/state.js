export let store = {
    _state: {
        profilePage: {
            postData: [],
            newPostText: "",
        }
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
        }else if (action.type === "UPDATE-TEXT-AREA"){
            this._state.profilePage.newPostText = action.newText;
            debugger
            this.callSub(this._state);
        }

    },
}





