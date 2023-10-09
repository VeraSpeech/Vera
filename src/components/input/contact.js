import React, {useRef , useState} from 'react';
import { Alert} from 'react-bootstrap';

import firebase from '../../firebase';

import { v4 as idgen } from "uuid";

//import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';




function Contact() {
    const email = useRef()
    const subject = useRef()
    const inquiry = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    //const db = firebase.firestore();
    const ref = firebase.firestore().collection("ContactInformation")
    function addInquiry(newIn){
        console.log(newIn)
        ref
           .doc(newIn.id)
            .set(newIn)   
            .catch((err)=>{
                console.log(err);
         });
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const emailval =  email.current.value;
        const subjectval=  subject.current.value;
       const inquiryval = inquiry.current.value;
       const status = false;
        const newSchool = {emailval, subjectval ,inquiryval,status , id: idgen() };
        try{
            setError("")
            setLoading(true)
            await addInquiry(newSchool)
            setError('Submitted')
        }
    catch(errorgot){
        console.log(errorgot)
        setError("eror")
    }
    setLoading(false)
}
  return (
    <div className='bgwhite p-5'>     
    
            {error && <Alert variant="success">{error}</Alert>}
            <form  onSubmit={handleSubmit}  >
                <fieldset>
                     <legend>Contact Us!</legend>
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="col-form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref={email} required />
                    </div>
                    <div class="form-group">
                        <label class="col-form-label" for="inputDefault"> Topic  </label>
                        <input type="text" class="form-control" placeholder="One Line Summary" id="inputDefault" ref={subject} required  />
                    </div>
                    <div class="form-group">
                        <label for="exampleTextarea" class="form-label mt-4">Your message</label>
                          <textarea class="form-control" id="exampleTextarea" placeholder="Message"  rows="7" ref={inquiry} required  ></textarea>
                    </div>
                    <div className=' m-3'>
                                  <button disabled={loading}  type="submit" class="btn btn-success" >Send </button>
                    </div>
                </fieldset>
            </form>

            


            
        </div>
  );
}

export default Contact