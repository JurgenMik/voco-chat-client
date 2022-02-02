import React from 'react';
import Container from 'react-bootstrap/Container';
import {Col} from "react-bootstrap";
import Row from 'react-bootstrap/Row';


import './App.css'

function App() {
    return (
           <div>
               <h2> KHK </h2>
               <div className="ekraanTaust">
               </div>
               <Container fluid>
                   <Row>
                      <Col className="col-sm-4">
                          <div className="nupp">
                              <button type="button" className="saada"> Send </button>
                          </div>
                      </Col>
                   </Row>
               </Container>
          </div>

    );
}


export default App;
