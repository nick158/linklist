import React, { Component } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import {addToList} from "../actions";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useReducer } from "react";
import list from "../reducers/list";
import { useState } from "react";

function AddToList() {
    const initialState = useSelector(state => state);

    const dispatch = useDispatch()

    // const [state, dispatch] = useReducer(list, initialState);
    const [itemTitle, setItemTitle] = useState("");
    const [itemDescription, setItemDescription] = useState("");

    const handleAddItem = () => {
        const item = {
           itemTitle: itemTitle,
           itemDescription: itemDescription
        };
        dispatch(addToList("M4utU8epWXnVXJMOnuP", item));
    };

    const handleAddItemTitle = ({ target }) => {
        setItemTitle(target.value);
    };
    const handleAddItemDescription = ({ target }) => {
        setItemDescription(target.value)
    };

    return(
        <div>
            <h1>Add item to list</h1>
            <form noValidate>
                <TextField onChange={handleAddItemTitle} id="outlined-basic" label="Item title" variant="outlined" />
                <br />
                <TextField
                    id="outlined-multiline-static"
                    label="Item decription"
                    multiline
                    rows="3"
                    variant="outlined"
                    onChange={handleAddItemDescription}
                />
                <br />
                <Button onClick={handleAddItem} variant="outlined">Submit</Button>
            </form>

        </div>
    )
};

function mapStateToProps(state){
    return {
        addingToList: state.addingToList,
        addToListErr: state.addToListErr,
        user: state.user
    }
}

export default connect(mapStateToProps)(AddToList)