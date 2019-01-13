export const logIn = userData => {   // action creator to pass data to store
    console.log('run action logIn');
    return{                              // action
        type: 'USER_LOG_IN',
        payload: {
            authorized : true,
            currentUser: userData
        }
    }
};