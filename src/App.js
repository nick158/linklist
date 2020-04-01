import React from "react";

import { Route, Switch } from "react-router-dom";
import {connect} from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login"

function mapStateToProps(state){
    return{
        isAuthenticated: state.auth.isAuthenticated,
        isVerifying: state.auth.isVerifying
    };
}
function App(props) {
    const { isAuthenticated, isVerifying } = props;
    return (
        <Switch>
            <ProtectedRoute
                exact
                path="/"
                component={Home}
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
            />
            <Route path="/login" component={Login} />
        </Switch>
    );
}
export default connect(mapStateToProps) (App);
