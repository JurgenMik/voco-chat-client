import React from 'react';
import {ChatEnterMessage} from './components/ChatEnterMessage'
import {MessageSend} from "./components/MessageSend";
import {Chatmessages} from "./components/chatmessages";
import './App.css'

function App() {
    return (
           <div>
               <h2> KHK </h2>
               <div className="ekraanTaust">
                   <br></br>
                   <Chatmessages/>
                   <Chatmessages/>
                   <Chatmessages/>
                   <Chatmessages/>
                   <Chatmessages/>
               </div>
               <ChatEnterMessage/>
               <MessageSend/>
          </div>

    );
}


export default App;
