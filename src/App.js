import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      let message = {text: snapshot.val(), id: snapshot.key};
      this.setState({messages: [message].concat(this.state.messages)});
    })
  }
  addMessage(e){
    e.preventDefault(); //prevents form submit
    fire.database().ref('messages').push( this.inputEl.value);
    this.inputEl.value = ''; //clears the input and resets to blank
  }
  render(){
    return (
        <form onSubmit={this.addMessage.bind(this)}>
          <input type="text" ref={ el => this.inputEl = el }/>
          <input type="submit"/>
          <ul>
            { /* Render the list of messages */
              this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
            }
          </ul>
        </form>
    )
  }
  }


export default App;
