import {
    GET_LISTS_FAILURE,
    GET_LISTS_REQUEST, GET_LISTS_SUCCESS,
    MAKE_LIST_FAILURE,
    MAKE_LIST_REQUEST,
    MAKE_LIST_SUCCESS
} from "../actions";

export default (state = {
        selectedList: "",
        listDesc: "",
        lastUpdated: "",
    userLists: [],
        items: [],
        makingList: false,
        makeListError: false,
        retrievingList: false,
        retrieveListErr: false
}, action) => {
    switch (action.type) {
        case MAKE_LIST_REQUEST:
            return {
                ...state,
                makingList: true,
                makeListError: false
            };
        case MAKE_LIST_FAILURE:
            return {
                ...state,
                makingList: false,
                makeListError: true
            };
        case MAKE_LIST_SUCCESS:
            return {
                ...state,
                list: action.list
            };
        case GET_LISTS_REQUEST:
            return {
                ...state,
                retrieveListErr: false,
                retrievingList: true
            };
        case GET_LISTS_SUCCESS:
            return{
                ...state,
                retrievingList: false,
                retrieveListErr: false,
                userLists: action.userLists
            };
        case GET_LISTS_FAILURE:
            return{
                ...state,
                retrieveListErr: true,
                retrievingList: false
            };
        default:
            return state;
    }
}