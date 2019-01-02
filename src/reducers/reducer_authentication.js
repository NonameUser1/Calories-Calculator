const initialAuth = {
    authorized : false,
    currentUser: null
}
const authReducer = (state = initialAuth , action) =>{
    switch (action.type) {
        case 'SIGNING_UP':
            console.log('action SIGNING_UP');
            return action.payload;
            break;
    }
    return state;
}

export default authReducer;