export const signingUp = userData =>{   // action creator to pass data to store
    console.log('run action signingUp');
    return{                              // action
        type: 'USER_SIGNING_UP',
        payload: {
            authorized : true,
            currentUser: userData
        }
    }
};