import React from "react";
import "./Information.css"

const Information=()=>{
    return (
        <>
            <div className="information-container">
                <div className="i-head">
                <span className="i-heading" ><strong>UPSC</strong> PATHSHALA</span>
                </div>
                <div className="i-1">
                    <p>Best Online Coaching</p>
                    <p>for UPSC Preparation</p>
                </div>
                <div className="i-2">
                    <img className="i-image" src="./Img/annual.jpg" alt="img"/>
                    <p className="i-para">Thousands of students from all over India trust UPSC Pathashala for IAS preparation.
                    Now, it’s <strong>your</strong> chance to clear UPSC!</p>
                </div>
            </div>
        </>
    )
}

export default Information;