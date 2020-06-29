const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
    users: [],
    totalUsersCount: 0, 
    pageSize: 10, // Количество юзеров на странице.
    currentPage: 1, // Выбранная страница.
    isFetching: false // Делается ли запрос за пользователями.
}

window.initialState = initialState;

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
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case IS_FETCHING: {
            return {...state, isFetching: !{...state}.isFetching}
        }
        default: 
            return state; 
    }
}


export const toggleFollowAC = (id) => ({type: TOGGLE_FOLLOW, id});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleFetchingAC = () => ({type: IS_FETCHING});


export default usersReducer;




