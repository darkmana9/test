import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader";

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    changeCurrentPage = (currentPage) => {
        this.props.getUsers(this.props.pageSize, currentPage)

    }

    render() {

        return <>
            <Preloader isFetching = {this.props.isFetching}/>
        <Users totalUsersCount = {this.props.totalUsersCount}
               pageSize = {this.props.pageSize}
               currentPage = {this.props.currentPage}
               changeCurrentPage = {this.changeCurrentPage}
               users = {this.props.users}
               unFollow = {this.props.unFollow}
               follow = {this.props.follow}
               followingInProgress = {this.props.followingInProgress}
               toggleFollowingInProgress = {this.props.toggleFollowingInProgress}/>
                      </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followUser(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowUser(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPage(page))
        },
        setTotalUsersCount: (count) => {

            dispatch(setTotalUsersCount(count))
        },
        toggleIsFetching: (isFetching) => {

            dispatch(toggleIsFetching(isFetching))
        },
    }
}*/

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers,
})(UsersContainer)