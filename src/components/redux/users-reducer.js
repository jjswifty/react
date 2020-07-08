import { usersAPI } from './api';

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const IS_FETCHING = 'IS_FETCHING';
const IS_FOLLOW_REQUEST = 'IS_FOLLOW_REQUEST'


let initialState = {
    users: [],
    totalUsersCount: 0, 
    pageSize: 10, // Количество юзеров на странице.
    currentPage: 1, // Выбранная страница.
    isFetching: false, // Делается ли запрос за пользователями.
    isFollowRequesting: [], // Делается ли запрос на follow / unfollow
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: 
            return {
                ...state,
                users: state.users.map (user => {
                    return user.id === action.id ? {...user, followed: !{...user}.followed} : user;
                })
            };
        
        case SET_TOTAL_USERS_COUNT: 
            return {...state, totalUsersCount: action.totalCount};
        
        case SET_CURRENT_PAGE: 
            return {...state, currentPage: action.page};
        
        case SET_USERS: 
            return {...state, users: [...action.users]};
        
        case IS_FETCHING: 
            return {...state, isFetching: !{...state}.isFetching};

        case IS_FOLLOW_REQUEST:
            return {...state, isFollowRequesting: action.bool 
                ? [...state.isFollowRequesting, action.id] 
                : state.isFollowRequesting.filter(id => id !== action.id)}
        
        default: 
            return state; 
    }
}

export const toggleFollow = (id) => ({type: TOGGLE_FOLLOW, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleFetching = () => ({type: IS_FETCHING});
export const followRequestCheck = (bool, id) => ({type: IS_FOLLOW_REQUEST, bool, id})

export default usersReducer;




export const getUsers = (pageSize, currentPage, optionalPage) => (dispatch) => {
  
    dispatch(toggleFetching());
    usersAPI.getUsers(pageSize, currentPage)
        .then(response => {
            if (optionalPage) {dispatch(setCurrentPage(optionalPage))}
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(Math.ceil(response.totalCount - 4950)));
            dispatch(toggleFetching());

        });
} 

export const unfollow = (user) => (dispatch) => {
    dispatch(followRequestCheck(true, user.id));
        usersAPI.unfollowUser(user.id)
            .then(response => {
                response.resultCode === 0 
                ? dispatch(toggleFollow(user.id)) 
                : alert('Some error occured, CODE: ' + response.resultCode)
                dispatch(followRequestCheck(false, user.id));
        })
}

export const follow = (user) => (dispatch) => {
    dispatch(followRequestCheck(true, user.id));
        usersAPI.followUser(user.id)
            .then(response => {
                response.resultCode === 0 
                ? dispatch(toggleFollow(user.id)) 
                : alert('Some error occured, CODE: ' + response.resultCode)
                dispatch(followRequestCheck(false, user.id));
        })
}

