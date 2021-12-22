import { IMAGE_SEARCH_BOX_UPDATED, UPDATE_IMAGE_LIST, TOGGLE_IMAGELIST_LOADER, FILTER_IMAGE_LIST } from "./ActionTypes";
import axios from 'axios';

export const imageSearchBoxValueChanged = (image_list, search) => {
    // return {
    //     type: IMAGE_SEARCH_BOX_UPDATED,
    //     payload: search,
    // };
    return dispatch => {
        var filtered_imageList = image_list.filter(function(image_data) {
            return image_data.author.includes(search, 0);
        });

        console.log(filtered_imageList);
        dispatch({
            type: IMAGE_SEARCH_BOX_UPDATED,
            payload: search,
        });
        dispatch({
            type: FILTER_IMAGE_LIST,
            payload: filtered_imageList,
        });
    };
};

export const toggleImageListLoader = show => {
    return {
        type: TOGGLE_IMAGELIST_LOADER,
        payload: show,
    };
};

export const getImageListFromAPI = nav => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_IMAGELIST_LOADER,
            payload: true,
        });

        // Here we will write the usual return code
        // Basically we will call an API from here.
        axios.get('https://picsum.photos/v2/list')
        .then(response => {
            //console.log(response.data);
            dispatch({
                type: UPDATE_IMAGE_LIST,
                payload: response.data,
            });
            dispatch({
                type: FILTER_IMAGE_LIST,
                payload: response.data,
            });
            dispatch({
                type: TOGGLE_IMAGELIST_LOADER,
                payload: false,
            });

            //console.log('Nav in action function');
            nav.navigate('Tab Screens');
        })
        .catch(error => {
            console.log(error); 
        });
    };
};