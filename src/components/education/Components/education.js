import React from "react";

import "./education.css";

const Education = () =>{
    return(
        <div>
            <h2 className="text-section">education</h2>

            
            <div className="job-box first-job">
                <h3>Universität Rostock</h3>
                <h4>Master's Computer Science</h4>
                <h5>March 2019 – March 2021</h5>
                <h5>Rostock, Germany</h5>
                <ul>
                    <li> Web 2.0  </li>
                    <li> Cyber Security </li>
                    <li> Artifical Inteligence </li>
                    <li> Virtual Reality </li>
                </ul>
            </div>


            <div className="job-box first-job">
                <h3>University of Agriculture </h3>
                <h4>BS Computer Science</h4>
                <h5>Sep 2013 – Sep 2018</h5>
                <h5>Faisalabad, Pakistan</h5>
                <ul>
                    <li>Web Development </li>
                    <li> Python </li>
                    <li> Artifical Inteligence </li>
                    <li> Differential Equations </li>
                </ul>
            </div>



        </div>
    )
} 

export default Education;