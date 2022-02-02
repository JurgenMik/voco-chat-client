import React from 'react';
import {ChatEnterMessage} from './components/ChatEnterMessage'
import {MessageSend} from "./components/MessageSend";
import './App.css'

function App() {
    return (
           <div>
               <h2> KHK </h2>
               <div className="ekraanTaust">
               </div>
               <ChatEnterMessage/>
               <MessageSend/>
          </div>

    );
}


export default App;
