export const signingUp = userData =>{   // action creator to pass data to store
    console.log('run action signingUp');
    return{                              // action
        type: 'SIGNING_UP',
        payload: userData
    }
};