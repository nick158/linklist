import {
    MAKE_LIST_FAILURE,
    MAKE_LIST_REQUEST,
    MAKE_LIST_SUCCESS
} from "../actions";

export default (state = {
        selectedList: "",
        listDesc: "",
        lastUpdated: "",
        items: [],
        makingList: false,
        makeListError: false
}, action) => {
    switch (action.type) {
        case MAKE_LIST_REQUEST:
            return {
                ...state,
                makingList: true,
                makeListError: false
            }
        case MAKE_LIST_FAILURE:
            return {
                ...state,
                makingList: false,
                makeListError: true
            }
        case MAKE_LIST_SUCCESS:
            return {
                ...state,
                list: action.list
            }
        default:
            return state;
    }
}