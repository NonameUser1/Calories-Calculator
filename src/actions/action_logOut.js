export const logOut = () => {
    console.log('run action USER_LOG_OUT');
    return {
        type: 'USER_LOG_OUT',
        payload: {
            authorized : false,
            currentUser: null
        }
    }
}