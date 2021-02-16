import React from "react";
import axios from "axios";

export const Users = (props) => {
if (!props.users) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users", {
        withCredentials: true, headers: {
            'API-KEY': 'bab5eb69-9682-4eb9-abfa-a16987f89e90'
        }
    }).then(response => {
        debugger
        props.setUsers(response.data.items)
    })
}
    /*if (props.users.length === 0) {
        props.setUsers([
            {
                id: '1',
                isFollowed: true,
                fullName: 'Andrey',
                status: 'bad',
                location: {
                    city: 'novopolotsk',
                    country: 'belarus',
                },
            },
            {
                id: '2',
                isFollowed: false,
                fullName: 'Dimon',
                status: 'good',
                location: {
                    city: 'minsk',
                    country: 'belarus',
                },
            }
        ])
    }*/
    return (
        <div>
            {props.users.map(user => {
                return (
                    <div key={user.id}>
                        <p>{user.fullName}</p>
                        {user.isFollowed ?
                            <button onClick={() => {
                                props.unFollow(user.id)
                            }}>follow</button>
                            : <button onClick={() => {
                                props.follow(user.id)
                            }}>unFollow</button>}
                       {/* <p>{user.location.city}</p>*/}
                        {/*<p>{user.location.country}</p>*/}
                        <p>{user.status}</p>
                    </div>
                )
            })}
        </div>
    )
}