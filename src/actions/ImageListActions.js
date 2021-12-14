import { IMAGE_SEARCH_BOX_UPDATED } from "./ActionTypes";

export const imageSearchBoxValueChanged = search => {
    return {
        type: IMAGE_SEARCH_BOX_UPDATED,
        payload: search,
    };
};