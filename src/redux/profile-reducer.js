const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_TEXT_AREA = "UPDATE-TEXT-AREA";

let initialState = {
    postData: [],
    newPostText: "",
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let stateCopy = {...state}
            let newPost = {
                authorName: "123",
                postText: stateCopy.newPostText,
            };

            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_TEXT_AREA: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default: {
            return state;
        }
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