import './ChatEnterMessage.css';
import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Button from "react-bootstrap/Button";


  function ChatEnterMessage() {

      const [user, setUser] = useState('')
      const [sonum, setSonum] = useState('')
      const [kuva, setKuva] = useState([]);

      useEffect(()=>{ // called on page ref

              Axios.get('http://localhost:3001/read').then((response) => {
                  setKuva(response.data); // reading data from backend via get
              })

      }, [])

      function CreateMessageCard() {

          if (setSonum.length > 100)  { // || setUser.value = '' || setSonum.value = '' validation

              alert('error') // voiks luua <div> tagasiside </div>

          } else {

              Axios.post("http://localhost:3001/insert", { // making a http request , sends an array of data{obj} to backend via post

                 sonum: sonum,
                 user: user,

             });
          }

          document.getElementById('sisestaSonum').value = ''; // ux - taastab sisendi valja

       }
       //getElementsByClassName
        return (
                 <div>
                   <h2> KHK </h2>
                   <div className="ekraanTaust">
                       <br>
                       </br>
                       {kuva.map((val, key) => { // .map - loopib labi backend data.array ja returnib/kuvab sonumid maaratud value:key paaridele
                           return(
                           <div className="kuvaSonum" key={key}>
                               <p className="sonum" > {val.messageSisu} </p>
                               <p className="date" >  {val.kasutaja} - 12.01.2022 15:33 </p>
                           </div>
                           )
                         })}
                        </div>
                         <div className="typeBox">
                            <div className="container">
                              <div className="user">
                                <input className="sisestaNimi"  type="text"  onChange={e => setUser (e.target.value)} placeholder="User" >
                                </input>
                              </div>
                              <div className="sonumiVali">
                                 <input id='sisestaSonum' type="text" onChange={e => setSonum (e.target.value)} placeholder="Type your message here...">
                                 </input>
                                <div className="wordCounter">
                                   <p> 90/100</p>
                                </div>
                              </div>
                            </div>
                          </div>
                           <div className="container">
                               <div className="row">
                                  <div className="nupp">
                                      <Button onClick={CreateMessageCard} className="saada"> Send </Button>
                                   </div>
                                 </div>
                              </div>
                           </div>
            );
       }

 export default ChatEnterMessage




