let initialState = {
    friends: 
            [{id: 1, name: 'Jedy', avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg'},
            {id: 2, name: 'Alex', avatar: 'https://image.flaticon.com/icons/svg/145/145850.svg'},
            {id: 3, name: 'Rose', avatar: 'https://image.flaticon.com/icons/svg/145/145847.svg'}]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;