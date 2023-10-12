// step 1: create file for our reducer and export
const pets = (state = [], action) => {
    switch(action.type) {
        case 'SET_PET_LIST':
            return action.payload;
        default:
            return state;
    }
};

export default pets;