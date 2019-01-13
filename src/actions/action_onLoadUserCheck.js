export const onLoadUserCheck = userData => {   // action creator to pass data to store
    console.log('run action ON_LOAD_USER_CHECK');
    return{                              // action
        type: 'ON_LOAD_USER_CHECK',
        payload: userData
    }
};