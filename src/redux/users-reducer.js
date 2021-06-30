import {usersAPI} from "../api/api";

const FOLLOW_USER = 'FOLLOW-USER'
const UN_FOLLOW_USER = 'UN-FOLLOW-USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"

let initialState = {
    users: [ ],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],

}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER: {

            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, isFollowed: true}
                    }
                    return user;
                }),
            }

        }
        case UN_FOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, isFollowed: false}
                    }
                    return user;
                })

            }
        }

        case SET_USERS: {
            return {
                ...state,

                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default: {
            return state;
        }
    }

}

export const followSuccess = (userId) => {
    return {
        type: FOLLOW_USER,
        userId
    }
}
export const unFollowSuccess = (userId) => {
    return {
        type: UN_FOLLOW_USER,
        userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount,
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    }
}
export const toggleFollowingInProgress = (inProgress, userId) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        inProgress: inProgress,
        userId: userId,
    }
}

export const getUsers = (pageSize, page) => {

   return (dispatch) => {

        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(pageSize, page).then(data => {

            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))

        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                followSuccess(userId)
            }
            dispatch(toggleFollowingInProgress(false,userId))
        })
    }
}
export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.unFollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                unFollowSuccess(userId)
            }
            dispatch(toggleFollowingInProgress(false,userId))
        })
    }
}




