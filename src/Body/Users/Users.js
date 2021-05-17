import React from "react";
import style from "./Users.module.css";
import userPhoto from '../../assets/user/default-user.jpg'
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
            <div className = {style.pagination__wrapper}>
            {pages.map(el => {
                return <div onClick = {() => {
                    props.changeCurrentPage(el)
                }}
                            className = {props.currentPage === el ? style.active + " " + style.pagination__item : style.pagination__item}>{el}</div>
            })}
            </div>
        {props.users.map(user => {
            return (
                <div key = {user.id}>
                    <NavLink to = {'/profile/' + user.id}>
                        <img className = {style.userPhoto}
                             src = {user.photos.small != null ? user.photos.small : userPhoto}/>
                    </NavLink>
                        <p>{user.name}</p>
                    {user.followed ?
                        <button disabled = {props.followingInProgress.some(id => id === user.id)}
                                onClick = {() => {
                                    props.unFollow(user.id)
                                }}>unFollow</button>
                        : <button disabled = {props.followingInProgress.some(id => id === user.id)}
                                  onClick = {() => {
                                      props.follow(user.id)
                                  }}>Follow</button>}
                    <p>{user.status}</p>
                            </div>
            )
        })}

                            </div>
}

export default Users