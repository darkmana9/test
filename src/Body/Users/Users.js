import React from "react";

export const Users = (props) => {



    if (props.users.length === 0) {
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
    }
    return (
        <div>
            {props.users.map(user => {
                return (
                    <div key = {user.id}>
                       <p>{user.fullName}</p>
                        {user.isFollowed ?
                            <button onClick = {() => {
                                props.unFollow(user.id)
                            }}>follow</button>
                            : <button onClick = {() => {
                                props.follow(user.id)
                            }}>unFollow</button>}
                        <p>{user.location.city}</p>
                       <p>{user.location.country}</p>
                       <p>{user.status}</p>
                    </div>
                )
            })}
        </div>
    )
}