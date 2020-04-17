import React, {Component} from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {loginUser, logoutUser} from "../actions";
import AddList from "./AddList";
import AddToList from "./AddToList"
import { withStyles } from "@material-ui/styles";

class Home extends Component{
    handleLogout = () => {
        const {dispatch} = this.props;
        dispatch(logoutUser());
    };
     render() {
         const { isLoggingOut, logoutError } = this.props;
         return(
             <div>
                 <h1>This is your app's protected area.</h1>
                 <p>Any routes here will also be protected</p>
                 <AddList/>
                 <AddToList/>
                 <button onClick={this.handleLogout}>Logout</button>
                 {isLoggingOut && <p>Logging Out....</p>}
                 {logoutError && <p>Error logging out</p>}
             </div>
         )
     }
}
function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError,
        user: state.auth.user
    }
}
export default connect(mapStateToProps)(Home);