import React from "react";
import Header from "../components/header/Components/header.js";
import Resume from "../components/resume/Components/resume.js";
import Skills from "../components/skills/Components/skills.js";
import Education from "../components/education/Components/education.js";
import Home from "../components/home/Components/home.js";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Footer from "../components/footer/Components/footer.js";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact
                        component={Home}/>
                    <Route path="/resume" exact
                        component={Resume}/>
                    <Route path="/skills" exact
                        component={Skills}/>
                    <Route path="/education" exact
                        component={Education}/>
                </Switch>
                <Footer/>
            </div>
            
        </BrowserRouter>
    )
}

export default App;
