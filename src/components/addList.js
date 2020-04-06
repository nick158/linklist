import React, { Component } from "react";
import { connect } from "react-redux";
import {makeList} from "../actions";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
class AddList extends Component {
    handleAddList = () => {
        const {dispatch} = this.props;
        const {tempAddListTitle} = this.state;
        dispatch(makeList(tempAddListTitle));
    };
    handleAddListField = ({ target }) => {
        this.setState({tempAddListTitle : target.value});
    };
    render(){
        const {isAuthenticated} = this.props;
        return(
            <div>
                <form noValidate>
                    <TextField onChange={this.handleAddListField} id="outlined-basic" label="Test" variant="outlined" />
                    <Button onClick={this.handleAddList} variant="outlined">Submit</Button>
                </form>

            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        makingList: state.list.makingList,
        makeListError: state.list.makeListError
    }
}
export default connect(mapStateToProps)(AddList);