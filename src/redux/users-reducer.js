const FOLLOW_USER = 'FOLLOW-USER'
const UN_FOLLOW_USER = 'UN-FOLLOW-USER'

let initialState = {
    users: [
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
    ]
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER: {

            return  {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
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
                    if(user.id === action.userId){
                        return {...user, isFollowed: false}
                    }
                    return user;
                })

            }
        }
        default: {
            return state;
        }
    }

}

const followUserActionCreator = (userId) => {
    return {
        type: FOLLOW_USER,
        userId
    }
}

const unFollowUserActionCreator = (userId) => {
    return {
        type: UN_FOLLOW_USER,
        userId
    }
}

