import React, { useState } from "react";
import "./Login.css"
 const Login=()=>{

    const [mob,setMob]=useState('')
    const [fname,setFname]=useState('')
    const [email,setEmail]=useState('')
    const [mobError, setMobError] = useState("");
    const [fnameError, setFnameError] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        // Reset error states
        setMobError("");
        setEmailError("");
    
        let hasError = false;
    
        // Validate mobile number
        const mobPattern = /^[0-9]{10}$/; 
        if (!mob.match(mobPattern)) {
          setMobError("Please enter a valid mobile nuumber");

          hasError = true;
        }
        
        if (fname.length<=3) {
          setFnameError("Please enter a valid name");
          hasError = true;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!email.match(emailPattern)) {
          setEmailError("Please enter a valid e-mail id.");
          hasError = true;
        }  
    
        if (hasError) {
          return;
        }
      };
    
    return (
        <> 
            <div className="login-container">
                <div className="l-heading">
                    <h2>Book a Free Demo Class</h2>
                    <h3>Limited Seats only !</h3>
                </div>
                <div >
                    <form className="login-form" onSubmit={handleFormSubmit}>
                    <input className="l-input"  type="tel" placeholder="Enter Mobile Number"  required value={mob} onChange={(e)=>setMob(e.target.value)}/>
                    {mobError && <p className="error-message">{mobError}</p>}
                    <input className="l-input" type="text" placeholder="Enter Full Name" required value={fname} onChange={(e)=>setFname(e.target.value)}/>
                    {fnameError && <p className="error-message">{fnameError}</p>}
                    <input className="l-input" type="text" placeholder="Enter E-mail ID" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {emailError && <p className="error-message">{emailError}</p>}
                    <label htmlFor="describe">What describes you best?</label>
                    <select className="l-input" name="describe" id="describe">
                        <option selected disabled>Select Options</option>
                        <option value="student">College Student</option>
                        <option value="working">Working Professional</option>
                        <option value="aspirant">Full time Aspirant</option>
                        <option value="other">Other</option>
                    </select>
                    <button className="l-input" type="submit">Submit</button>
                    </form>                 
                    <p className="l-bottom">By clicking 'Submit' button,you explicitly solicit a call & email from uFaber</p>
                </div>
                
            </div>
        </>
    );
 }

 export default Login;