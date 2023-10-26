import React, { useState } from "react";
import "./Login.css"
 const Login=()=>{

    const [mob,setMob]=useState('')
    const [fname,setFname]=useState('')
    const [email,setEmail]=useState('')
    
    return (
        <> 
            <div className="login-container">
                <div className="l-heading">
                    <h2>Book a Free Demo Class</h2>
                    <h3>Limited Seats only !</h3>
                </div>
                <div >
                    <form className="login-form">
                    <input className="l-input"  type="tel" placeholder="Enter Mobile Number" value={mob} onChange={(e)=>setMob(e.target.value)}/>
                    <input className="l-input" type="text" placeholder="Enter Full Name" value={fname} onChange={(e)=>setFname(e.target.value)}/>
                    <input className="l-input" type="email" placeholder="Enter E-mail ID" value={email} onChange={(e)=>setEmail(e.target.value)}/>
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