import { IMAGE_SEARCH_BOX_UPDATED } from "../actions/ActionTypes";

const INITIAL_STATE = {
    image_search: '',
};

export default (state = INITIAL_STATE, action) => {
    //console.log(action);
    switch(action.type){
        case IMAGE_SEARCH_BOX_UPDATED:
            return {...state, image_search: action.payload};
        default:
            return state;
    }
};