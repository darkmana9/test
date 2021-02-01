import React from "react";
import c from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={c.wrapper}>
            <div className={c.postAuthor}>
                {
                    props.authorName
                }
            </div>
            <div className={c.postText}>
                {
                    props.postText
                }
            </div>
        </div>

    )
}

export default Post