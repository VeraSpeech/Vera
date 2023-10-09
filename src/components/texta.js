import './texta.css'
import React from 'react';
import money from './images/money.gif'
import bird2 from './images/bird2.gif'
import bird1 from './images/bird1.gif'
import bird3 from './images/bird3.gif'
import gov from './images/govern.gif'
import { Container } from 'react-bootstrap';

function texta(){
    return (
        <Container className='bgwhite p-5'>
              <br/>
            <div >
        <h1 className='colororange'><br/>Our Mission</h1>
        <p className='TextDes'><br/>Currently, speech therapy services are hard to access due to various reasons:</p>
        </div>
        <div >

            <div className="row">
  <div className="column">
    <img className ='miro' src={money} />
  </div>
  <div className="column"><br/><br/><br/>
    <h4 className="animate__animated animate__fadeInLeft">Expensive private speech therapy</h4>
  </div>
  </div>
  </div>            <div >
  <div className="row">
  <div className="column">
  <h4><br/><br/> Insufficient Government Aid</h4>

  </div>
  <div className="column">
  <img className ='miro' src={gov} />
  </div>

    </div>
    </div>
    <div >

    <p className='TextDes'><br/>As a result, children with speech disorders may suffer from delayed diagnosis and inadequate treatment. 
<br/><br/>
Speech sound disorders can lead to serious negative impacts if left untreated, including psychological problems and affected future outcomes. This is especially concerning for children with speech sound disorders born in families with low socioeconomic status to break out of poverty.
</p>
</div>            <div >

<h1 className='Textahead'><br/>Our Features</h1>    </div>            <div >


<div className="row">

  <div className="column">
    <img className ='miro' src={bird1} />
  </div>
  <div className="column">
    <h4><br/><br/>Accurate diagnosis results generated within 30 minutes
</h4>
  </div>
  </div>
  </div>            <div >

  <div className="row">
  <div className="column">
  <h4><br/><br/> Speech therapy made fun and interactive
</h4>

  </div>
  <div className="column">
  <img className ='miro' src={bird2} />
  </div>
    </div>
    </div>            <div >

    <div className="row">
  <div className="column">
    <img className ='miro' src={bird3} />
  </div>
  <div className="column">
  <br/><br/>
  <div >
    <h4 >Personalized treatment embedded in games for children
</h4></div>
  </div>
  </div>
  </div>
  <hr></hr>
  <br/>
           </Container>
    );
}

export default texta;