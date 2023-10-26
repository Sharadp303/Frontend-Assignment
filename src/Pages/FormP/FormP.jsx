import React from "react";
import Information from "../../Components/Information/Information";
import Login from "../../Components/Login/Login";
import './FormP.css'

const FormP=()=>{
    return(
        <>
        <div className="main">
          <Information/>
          <Login/>
        </div>
        </>
    );
}
export default FormP;