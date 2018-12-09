export const searchFoodInfo = foodData =>{   // action creator to pass data to store
    console.log('run action searchFoodInfo');
    return{                              // action
        type: 'SEARCHING_FOOD_INFO',
        payload: foodData
    }
};