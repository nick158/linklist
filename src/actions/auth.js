import {myFirebase, googleAuth} from "../firebase/firebase";;
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const receiveLogin = user =>  {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

const loginError = () => {
    return {
        type: LOGIN_FAILURE
    };
};

const requestLogout = () => {
    return{
        type: LOGOUT_REQUEST
    };
};
const receiveLogout =() => {
    return {
        type: LOGOUT_SUCCESS
    };
};
const logoutError = () =>{
    return{
        type: LOGOUT_FAILURE
    };
};
const requestVerify = () => {
    return{
        type: VERIFY_REQUEST
    };
};
const receiveVerify = () => {
    return {
        type: VERIFY_SUCCESS
    };
};
//send the user object from firebase to the dispatch where it gets stored in state
export const loginUser = () => dispatch => {
    dispatch(requestLogin());
    myFirebase
        .auth()
        .signInWithPopup(googleAuth)
        .then(result => {
            dispatch(receiveLogin(result.user));
        })
        .catch(error => {
            console.error((error));
            dispatch(loginError());
        })
};

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    myFirebase
        .auth()
        .signOut()
        .then(() => {
            dispatch(receiveLogout());
        })
        .catch(error => {
            dispatch(logoutError());
        })
};

export const verifyAuth = () => dispatch => {
    dispatch(requestVerify());
    myFirebase.auth().onAuthStateChanged(user => {
        if (user !== null){
            dispatch(receiveLogin(user));
        }
        dispatch(receiveVerify());
    });
};