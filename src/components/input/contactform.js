import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Map from './map'


//import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import ContactFormSimple from './contact';






function ContactForm() {
 
  return (
    <div className='bgwhite p-5'>     
       <Row>
           
            <Col >
            <ContactFormSimple></ContactFormSimple>

            </Col>
            <Col >
            <h3>IDendron, Pao Siu Loong Building, HKU</h3>
                <Map></Map>
            </Col> 
       </Row>
           
            


        </div>
  );
}

export default ContactForm;