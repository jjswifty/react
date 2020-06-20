const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map (user => {
                    if (user.id === action.id) {
                        return {...user, followed: !{...user}.followed}
                    }
                    return user;
                })
            };
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default: 
            return state; 
    }
}


export const toggleFollowAC = (id) => ({type: TOGGLE_FOLLOW, id});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;



