import React from 'react';
import c from './Comments.module.css'
import Comment from "./Comment/Comment";

const Comments = () => {
    return (
        <div className={c.comments__wrapper}>
                <div className = {c.comment}>
                <Comment/>
                </div>
            </div>
    );
}

export default Comments;
