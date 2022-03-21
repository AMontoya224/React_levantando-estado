import './App.css';
import React, { useState } from 'react';
import Groceries from './Components/Groceries/Groceries';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';

function App() {
  let groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  return (
    <div className="App">
      <Groceries groceryList = {groceryList}/>
      <MessageForm onNewMessage={ youveGotMail } />
      <MessageDisplay message={ currentMsg } />
    </div>
  );
}

export default App;
