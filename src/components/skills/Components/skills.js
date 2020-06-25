import React from 'react';
import { Progress } from 'antd';
import LinearProgress from '@material-ui/core/LinearProgress';

import "./skills.css";
import { yellow } from '@material-ui/core/colors';

const Skills = () => {
    return (
        <div>
            <h2 className="text-section">skills</h2>
            <div className="blink">
                <h2 className="experince-heading">3 Years + Experience in Web Development </h2>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> React</h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate" value={60} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> JavaScript </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate" color="secondary" value={80} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> ES6 </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate"  value={80} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> ES7 </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate" color="secondary" value={80} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> WordPress </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate"  value={80} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> Material UI </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate" color="secondary" value={70} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> Ant Desgin </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate"  value={50} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> Git </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate" color="secondary" value={50} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> Redux </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate"  value={40} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> jQuery </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate" color="secondary" value={50} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> HTML </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate"  value={90} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> CSS </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate" color="secondary" value={80} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> Webpack </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate"  value={40} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> BABEL </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate" color="secondary" value={40} />
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-title"><h1> JSON </h1></div>
                <div className="skills-bar"> <LinearProgress variant="determinate"  value={50} />
                </div>
            </div>

        </div>
    )
}

export default Skills;
