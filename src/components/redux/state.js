let state = {
    messagesPage: {
        dialogs: [{
                id: 1,
                name: 'Идиот'
            },
            {
                id: 2,
                name: 'Программист'
            },
            {
                id: 3,
                name: 'Рандом'
            },
            {
                id: 4,
                name: 'Админ'
            }
        ],
        messages: [{
                id: 1,
                message: 'Hello there'
            },
            {
                id: 2,
                message: 'Bruh.'
            },
            {
                id: 3,
                message: 'LOL'
            },
            {
                id: 4,
                message: 'Hello. You are banned.'
            }
        ]
    },

    profilePage: {
        posts: [{id: 1, message: 'Hello. LOL ROFL LMAO WTF BRUH BRUH BRUH', likeCount: 45},
                {id: 2, message: 'This is my 1st day in the Internet.', likeCount: -24}],
        newPostText: ''
    },
    
    sidebar: {
        friends: 
                [{id: 1, name: 'Jedy', avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg'},
                {id: 2, name: 'Alex', avatar: 'https://image.flaticon.com/icons/svg/145/145850.svg'},
                {id: 3, name: 'Rose', avatar: 'https://image.flaticon.com/icons/svg/145/145847.svg'}]
    }
}

let rerenderEntireTree = () => {
    console.log('bruh')
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 1,
        message: state.profilePage.newPostText,
        likeCount: 1   
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);

}

export const updateNewPostFunc = (text) => {
    state.profilePage.newPostText = text; 
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
    
}


export default state;