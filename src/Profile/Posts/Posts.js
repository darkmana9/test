import React from "react"
import c from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = (props) => {

    let NewPostData = props.postData.map(post =>
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