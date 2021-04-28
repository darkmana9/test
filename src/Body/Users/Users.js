import React from "react";
import axios from "axios";

class Users extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

            axios.get("https://social-network.samuraijs.com/api/1.0/users", {
                withCredentials: true, headers: {
                    'API-KEY': 'bab5eb69-9682-4eb9-abfa-a16987f89e90'
                }
            }).then(response => {
                debugger
                this.props.setUsers(response.data.items)
            })

    }

    render() {
        return <div>
            {this.props.users.map(user => {
                return (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        {user.isFollowed ?
                            <button onClick={() => {
                                this.props.unFollow(user.id)
                            }}>follow</button>
                            : <button onClick={() => {
                                this.props.follow(user.id)
                            }}>unFollow</button>}
                        {/* <p>{user.location.city}</p>*/}
                        {/*<p>{user.location.country}</p>*/}
                        <p>{user.status}</p>
                    </div>
                )
            })}

        </div>
    }

}

export default Users

