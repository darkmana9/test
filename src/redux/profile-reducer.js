const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_TEXT_AREA = "UPDATE-TEXT-AREA";

let initialState = {
    postData: [],
    newPostText: "",
}


export const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                authorName: "123",
                postText: state.newPostText,
            };
            state.postData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_TEXT_AREA:
            state.newPostText = action.newText;
            return state;
        default: return  state;
    }

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