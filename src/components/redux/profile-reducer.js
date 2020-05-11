const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [{id: 1, message: 'Hello there', likeCount: 45},
            {id: 2, message: 'This is my 1st day in the Internet.', likeCount: -24}],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText === '') {
                return state;
            } // если поле ввода пустое - не отправляем. не забываем return state.
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCount: Math.floor(Math.random() * 22)
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;

        default:
            return state;
    }

}

//action creators
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});
export const addPostActionCreator = () => ({type: ADD_POST});
//end of action creators

export default profileReducer;