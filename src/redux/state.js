import {rerenderTree} from "../render";

let state = {
    profilePage: {
        postData: [
            {
                authorName: "Andrey",
                postText: "Hi",
            },
            {
                authorName: "Vasya",
                postText: "how do you do?",
            },
            {
                authorName: "Andrey",
                postText: "im fine",
            },


        ]
    }
}

export let addPost = (postData) => {
    let newPost = {
        authorName: "123",
        postText: postData,
    };
    state.profilePage.postData.push(newPost);
    rerenderTree(state)

}

export default state
