import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";

import "./header.css"
import { fromUnixTime } from "date-fns";


const Header = () => {
    return (
        <div>
            <nav>
                <ul className="myul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>

            </nav>
        </div>
    )
}

export default Header
