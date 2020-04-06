import {myFirebase} from "../firebase/firebase";
//make list
export const MAKE_LIST_REQUEST = "MAKE_LIST_REQUEST";
export const MAKE_LIST_SUCCESS = "MAKE_LIST_SUCCESS";
export const MAKE_LIST_FAILURE = "MAKE_LIST_FAILURE";
export const DELETE_LIST_REQUEST = "DELETE_LIST_REQUEST";
export const DELETE_LIST_SUCCESS = "DELETE_LIST_SUCCESS";
export const DELETE_LIST_FAILURE = "DELETE_LIST_FAILURE";
const makeListRequest = () => {
    return {
        type: MAKE_LIST_REQUEST
    };
};
const makeListSuccess = (list) => {
    return {
        type: MAKE_LIST_SUCCESS,
        list
    };
};
const makeListFailure = () => {
    return {
        type: MAKE_LIST_FAILURE
    }
};
//delete a list
const deleteListRequest = () => {
    return {
        type: DELETE_LIST_REQUEST
    }
};
const deleteListSuccess = () => {
    return {
        type: DELETE_LIST_SUCCESS
    }
};
const deleteListFailure = () => {
    return {
        type: DELETE_LIST_FAILURE
    }
};

//add an item to the list

//delete an item from the list
export const makeList = (listDetails) => dispatch => {
    dispatch(makeListRequest());
    myFirebase.database().ref('lists').push(listDetails)
        .then(madeList => {
            dispatch(makeListSuccess(madeList));
        })
        .catch(error => {
            console.error((error));
            dispatch(makeListFailure());
        })
};