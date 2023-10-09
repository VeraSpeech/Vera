import React from 'react';
import './join.css';
import join from './images/join.png'

function Join() {
  return (
  <div class='contain'>
      <img id='center' src={join}></img>
                <ul class="timeline">
                    <li>
                    <p id="sec2bodyjoin">
                            Currently, we are building a prototype for the application and are looking for teammates who can help us carry this project forward. 
                            <br></br><br></br><b>1. Technical Team:</b>Students who can help in programming and testing the diagnosis algorithm 
<br></br>Tasks: App development, NLP and ML algorithm development for speech sound disorder diagnosis, Database Testing 
<br></br>Majors: Computer Science, Information Systems, students experienced in app development, NLP, ML, and database development.
<br></br><br></br><b>2. Consultation Team:</b> Students who can help us improve our therapy and diagnosis methodology 
<br></br>Tasks: Advice on speech sound disorder diagnosis approach, gamification approach, and general design targeted to children 
<br></br>Majors: Speech and Hearing Sciences
<br></br>
<br></br><b>3. Design Team:</b> Students who can help us create an interactive interface for the application 
<br></br>Tasks: Design UI/UX, design game characters 
<br></br>Majors: Design+, students experienced in graphic designing and animation
<br></br>
<br></br>          If you are interested in being our mentor or want to know more, please contact us via email
at <a href="mailto:vera.speechapp@gmail.com">vera.speechapp@gmail.com</a>. We look forward to hearing from you!
<br></br><br></br><br></br> 

                
				    </p>
                   </li>
              </ul>  
              <br/>
              </div>
    
  );
}

export default Join;
