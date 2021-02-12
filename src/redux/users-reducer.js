const FOLLOW_USER = 'FOLLOW-USER'
const UN_FOLLOW_USER = 'UN-FOLLOW-USER'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [

    ]
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
                users: [...state.users,...action.users]
            }
        }
        default: {
            return state;
        }
    }

}

export const followUserActionCreator = (userId) => {
    return {
        type: FOLLOW_USER,
        userId
    }
}

export const unFollowUserActionCreator = (userId) => {
    return {
        type: UN_FOLLOW_USER,
        userId
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

