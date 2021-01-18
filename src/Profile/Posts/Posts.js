import React from "react"
import c from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = () => {


    let postData = [
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

    let NewPostData = postData.map(post =>
        <Post authorName={post.authorName} postText={post.postText}/>
    )

    return (
        <div className={c.wrapper}>
            {
                NewPostData
            }

        </div>
    )
}

export default Posts