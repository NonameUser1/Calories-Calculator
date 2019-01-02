export default function (state = null , action) {

    switch (action.type) {
        case 'SEARCHING_FOOD_INFO':
            console.log('action SEARCHING_FOOD_INFO');
            return action.payload;
            break;
    }
    return state;
}