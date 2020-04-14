import {myFirebase} from "../firebase/firebase";
//make list
export const MAKE_LIST_REQUEST = "MAKE_LIST_REQUEST";
export const MAKE_LIST_SUCCESS = "MAKE_LIST_SUCCESS";
export const MAKE_LIST_FAILURE = "MAKE_LIST_FAILURE";
export const DELETE_LIST_REQUEST = "DELETE_LIST_REQUEST";
export const DELETE_LIST_SUCCESS = "DELETE_LIST_SUCCESS";
export const DELETE_LIST_FAILURE = "DELETE_LIST_FAILURE";
export const GET_LISTS_REQUEST = "GET_LISTS_REQUEST";
export const GET_LISTS_SUCCESS = "GET_LISTS_SUCCESS";
export const GET_LISTS_FAILURE = "GET_LISTS_FAILURE";
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
//get lists associated with a specific user so that it can be viewed in a component
const getListsRequest = () => {
    return {
        type: GET_LISTS_REQUEST
    }
};
const getListsSuccess = (userLists) => {
    return{
        type: GET_LISTS_SUCCESS,
        userLists
    }
};

const getListsFailure = () => {
    return{
        type: GET_LISTS_FAILURE
    }
};
//add a list, listDetails are set in the component AddList.js (user, desc, date, title)
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

export const getLists = (userId) => dispatch => {
    dispatch(getListsRequest());
    myFirebase.database().ref('lists')
        .orderByChild('owner')
        .equalTo(userId)
        .on('value', function(snapshot){
            //logging purposes
            console.log(snapshot.val());
            return snapshot.val();
        })
        .then(retrievedLists => {
            dispatch(getListsSuccess(retrievedLists));
        })
        .catch(error => {
            console.error((error));
            dispatch(getListsFailure());
        })
};