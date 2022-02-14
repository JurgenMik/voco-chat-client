import React, {Component} from 'react';
import './ChatEnterMessage.css';
export class ChatEnterMessage extends Component{

    render(){
        return(
                  <div className="typeBox">
                     <div className="container">
                        <div className="user">
                           <input className="sisestaNimi" type="text" placeholder="User"></input>
                         </div>
                         <div className="sonumiVali">
                           <input className="sisestaSonum" type="text" placeholder="Type your message here"></input>
                             <div className="wordCounter">
                                <p> 90/100</p>
                             </div>
                          </div>
                      </div>
                  </div>
        )
    }
}

