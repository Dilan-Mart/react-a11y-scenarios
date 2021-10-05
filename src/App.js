import React from 'react'
import {BrowserRouter as Router,Switch,Route,NavLink} from 'react-router-dom'
// import ScenarioOne from './components/scenario1'
import ScenarioTwo from './components/scenario2'
import ScenarioThree from './components/scenario3'
import ScenarioFour from './components/scenario4'
import './App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
          {/* <NavLink to="/scenario1" activeClassName="selected" className="btn">Scenario 1</NavLink> */}
          <NavLink to="/example/form" activeClassName="selected" className="btn">Submit form on input keypress</NavLink>
          <NavLink to="/example/div" activeClassName="selected" className="btn">Make a component act as button</NavLink>
          <NavLink to="/example/ref" activeClassName="selected" className="btn">Make a ext. component act as button using ref</NavLink>
      </div>
      <Switch>
        <Route exact path="/"><h1 className="scenario">Hi, click on the above links to route</h1></Route>
        {/* <Route path="/scenario1" component={ScenarioOne}/> */}
        <Route path="/example/form" component={ScenarioTwo}/>
        <Route path="/example/div" component={ScenarioThree}/>
        <Route path="/example/ref" component={ScenarioFour}/>
      </Switch>
    </Router>
    );
}

export default App;
