import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import './MessageSend.css';

export class MessageSend extends Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                  <div className="nupp">
                    <Button type="submit" className="saada"> Send </Button>
                 </div>
               </div>
            </div>
        )
    }
}