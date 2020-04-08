import React, { Component } from "react";
import { connect } from "react-redux";
import {makeList} from "../actions";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class AddList extends Component {
    handleAddList = () => {
        const {dispatch} = this.props;
        const listObj = {
           listTitle: this.state.tempAddListTitle,
           uid: this.props.user.uid,
           dateUpdated: Date.now(),
            description: this.state.description,
            items: []
        };

        dispatch(makeList(listObj));
    };
    handleAddListTitle = ({ target }) => {
        this.setState({tempAddListTitle : target.value});
    };
    handleAddDescription = ({ target }) => {
        this.setState({description: target.value});
    };
    render(){
        const {isAuthenticated} = this.props;
        return(
            <div>
                <h1>Create your list</h1>
                <form noValidate>
                    <TextField onChange={this.handleAddListTitle} id="outlined-basic" label="Test" variant="outlined" />
                    <br />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows="3"
                        defaultValue="Type in your list description"
                        variant="outlined"
                        onChange={this.handleAddDescription}
                    />
                    <br />
                    <Button onClick={this.handleAddList} variant="outlined">Submit</Button>
                </form>

            </div>
        )
    }
}
//make sure to add the user info to state so that it can be used when creating a list item
function mapStateToProps(state){
    return {
        makingList: state.list.makingList,
        makeListError: state.list.makeListError,
        user: state.auth.user
    }
}
export default connect(mapStateToProps)(AddList);