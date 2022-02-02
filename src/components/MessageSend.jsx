import React, {Component} from 'react';
import './MessageSend.css';

export class MessageSend extends Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                  <div className="nupp">
                    <button type="button" className="saada"> Send </button>
                 </div>
               </div>
            </div>
        )
    }
}