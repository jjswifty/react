import { authAPI, usersAPI } from "./api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_INFO = 'SET-USER-INFO';
const IS_FETCHING = 'IS-FETCHING';

let initialState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false,
    userInfo: null, // photo, etc.
    isFetching: true
}

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state, ...action.data,
                isAuth: true
            }
        }
        case SET_USER_INFO: {
            return {
                ...state, userInfo: {...action.info}
            }
        }
        case IS_FETCHING: {
            return {...state, isFetching: !{...state}.isFetching}
        }
        default: 
            return state; 
    }
}

//action creators

export const setUserData = (email, userId, login) => ({type: SET_USER_DATA, data: {email, userId, login}});
export const setUserInfo = (info) => ({type: SET_USER_INFO, info})
export const toggleFetching = () => ({type: IS_FETCHING});

//end of action creators

export default authReducer;

export const auth = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            console.log(response)
            let {email, id, login} = response.data.data;

            if (response.data.resultCode === 0 ) {
                dispatch(setUserData(email, id, login));
                usersAPI.getProfile(id)
                    .then(response => {
                        dispatch(setUserInfo(response.data));
                        dispatch(toggleFetching());
                })
            }
        });
}