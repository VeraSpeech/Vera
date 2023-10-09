import './text.css'
import React from 'react';

function Text(){
    return (
            <div className='TextCon'>
                <h1 className='TextHeading'>
                    About Us!
                </h1>
                <p className='TextDes'>
                Vera is an AI-powered mobile application that uses machine learning, big data and AI to provide accurate and immediate diagnosis and fun treatment for children suffering from speech sound disorders wherein patients have difficulties in articulation and phonology. 
                <br/> <br/>In the first phase, our app will carry out a fun and interactive diagnosis test with the child with the help of a chatbot, deep learning algorithm and a pronunciation database. Right now we are focusing on the development of the first phase.
                <br/>  <br/>In the second phase, treatment is provided through personalised and interactive speech therapy through gamification and AI technology.
                <br/>  <br/>We have received the Cyberport Creative Micro Fund of HK$100,000 to support the development of Vera in the coming six months, and will be applying for more fundings to sustain our development in the longer term!
                </p>
            </div>
    );
}

export default Text;