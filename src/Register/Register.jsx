import '../Register/Register.css'
import { UseRef } from "react";
// import { Outlet, Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
const form = () => {
    const fname = UseRef(null);
    const lname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const startyear = useRef(null);
    const endyear = useRef(null)
    const location = useRef(null);
    const occupation = useRef(null);
    
    function registerValue() {
      const emailId = email.current.value;
      const pass = password.current.value;
      const firstname = fname.current.value;
      const lastname = lname.current.value;
      const syear = startyear.current.value;
      const lyear = endyear.current.value;
      const loc = location.current.value;
      const occ = occupation.current.value;
    //   const login_url="http://54.147.30.228:5050/user/login"

      console.log(emailId)
      console.log(pass)
      console.log(firstname)
      console.log(lastname)
      console.log(syear)
      console.log(lyear)
      console.log(loc)
      console.log(occ)

    //   axios.post(login_url,{'email':emailId,'password':pass})
    //   const list = axios.get("http://54.147.30.228:5050/user/list")
    //       console.log(list)
    //   .then((response)=>{
    //       console.log(response.data)
          
    //       // .then((res) =>{
    //       //   console.log(res)
    //       // }) 
    //   })
    //   .catch((err)=>{
    //       console.log(err)
  
    //   })
      
    }
    return(
        <>
        <div className="mainfrom">

        <div className="register  mx-5 p-4">   
          
          <h2 className='heading1 mb-5 sub'>REGISTERATION FORM</h2>

          
          <div className="d-flex justify-content-between mt-4">
            <div className="form ">
              <input type="text"  name="" placeholder='' className='textbox' ref={fname}/>
              <label className='registerLabel' for=''>First Name</label>
                </div>
                <div className="form ">
              <input type="text"  name="" placeholder='' className='textbox'ref={lname} />
              <label className='registerLabel' for=''>Last Name</label>
                </div>
                

            </div>
            
            <div className="d-flex justify-content-between mt-4">
            <div className="form ">
              <input type="email"  name="" placeholder='' className='textbox' ref={email}/>
              <label className='registerLabel' for=''>Email</label>
                </div>
                <div className="form ">
              <input type="password"  name="" placeholder='' className='textbox' ref={password}/>
              <label className='registerLabel' for=''>Passeord</label>
                </div>
                

            </div>
            
                 <div className="d-flex justify-content-between mt-4">
             <div className="form ">
                 <input type="date" name="" placeholder='' className='textbox' ref={startyear}/>
              <label className='registerLabel' for=''>Start Year</label>
                 </div>
                 <div className="form">

              <input type="date" name="" placeholder='' className='textbox'  ref={endyear}/>
              <label for='' className='confirm'> End Year</label>
                 </div>
              
              </div>
              <div className="d-flex justify-content-between mt-4">
            <div className="form ">
              <input type="text"  name="" placeholder='' className='textbox' ref={location}/>
              <label className='registerLabel' for=''>Location</label>
                </div>
                <div className="form ">
              <input type="text"  name="" placeholder='' className='textbox'ref={occupation} />
              <label className='registerLabel' for=''>Occupation</label>
                </div>
                

            </div>
              
         <div className="col-12 mt-4 ">
           <button className='signbtn mt-2 mb-2'onClick={registerValue}>Register</button>
           
         </div>
    </div>
        </div>
        </>
    );
};
export default form;