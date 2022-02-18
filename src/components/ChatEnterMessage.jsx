import './ChatEnterMessage.css';
import React, { useState} from "react";
import Button from "react-bootstrap/Button";


  function ChatEnterMessage() {

      const [user, setUser] = useState('')
      const [sonum, setSonum] = useState('')
      const [koostaKaart , setKoosta]= useState([]);

      function CreateMessageCard() {

          if (setSonum.length > 100)  { // || setUser.value = '' || setSonum.value = ''

              alert('error')

          } else {

              setKoosta(koostaKaart.concat({sonum})) // state updated by .concat creating new array with passed obj
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
                       {koostaKaart.map((sonum) => { // .map - loopib labi array ja returnib ele sisestatud jarjekorras
                           return(
                           <div className="kuvaSonum" key={sonum}>
                               <p className="sonum" > {sonum.sonum} </p>
                               <p className="date" >  {user} - 12.01.2022 15:33 </p>
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




