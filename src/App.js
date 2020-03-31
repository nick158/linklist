import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { messages: [] };
  // }
  //
  // componentDidMount() {
  //   let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
  //   messagesRef.on('child_added', snapshot => {
  //     let message = {text: snapshot.val(), id: snapshot.key};
  //     this.setState({messages: [message].concat(this.state.messages)});
  //   })
  // }
  // addMessage(e){
  //   e.preventDefault(); //prevents form submit
  //   fire.database().ref('messages').push( this.inputEl.value);
  //   this.inputEl.value = ''; //clears the input and resets to blank
  // }
  render(){
    return (
        <div>
          <p>Hello world</p>
        </div>
    )
  }
  }


export default App;
