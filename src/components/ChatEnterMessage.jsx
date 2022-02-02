import React, {Component} from 'react';
import './ChatEnterMessage.css';

export class ChatEnterMessage extends Component{

    render(){
        return(
             <div className="typeBox">
                 <div className="container">
                     <div className="User">
                         <p> Guest3367</p>
                     </div>
                     <div className="Message">
                         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing. </p>
                         <p className="wordCounter"> 90/100</p>
                     </div>
             </div>
            </div>

        )
    }
}

