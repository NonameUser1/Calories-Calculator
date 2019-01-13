const initialAuth = {
    authorized : false,
    currentUser: null
};
const auth = (state = initialAuth , action) =>{
    switch (action.type) {
        case 'ON_LOAD_USER_CHECK':
            console.log('action ON_LOAD_USER_CHECK');
            return action.payload;

        case 'USER_SIGNING_UP':
            console.log('action SIGNING_UP');
            return action.payload;

        case 'USER_LOG_OUT':
            console.log('action USER_LOG_OUT');
            return action.payload;

        case 'USER_LOG_IN':
            console.log('action USER_LOG_IN');
            return action.payload;

        default :
            return state;
    }
};

export default auth;