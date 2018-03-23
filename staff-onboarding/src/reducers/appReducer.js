import initialState from '../initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT':
            return {...state, candidates: action.payload};
        default:
            return {...state};
    }
};

export default reducer;