const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [{id: 1, message: 'Hello there', likeCount: 45},
            {id: 2, message: 'This is my 1st day in the Internet.', likeCount: -24}],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
// Делаем копию состояния в return, следуем принципам идемпотентности и детерминирования. (47)

    switch (action.type) {
        case ADD_POST: {
            // если поле ввода пустое - не отправляем. Don't forget to return state.
            if (state.newPostText === '') { return state; } 

            return {
                ...state,
                posts: [
                    ...state.posts, 
                    {
                        id: [...state.posts].length + 1,
                        message: state.newPostText, 
                        likeCount: Math.floor(Math.random() * 22) // рандомное кол-во лайков
                    }
                ],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        default: 
            return state; 
    }
}

//action creators
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});
export const addPostActionCreator = () => ({type: ADD_POST});
//end of action creators

export default profileReducer;