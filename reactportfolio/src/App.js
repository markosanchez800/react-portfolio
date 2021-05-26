import React, {Component} from 'react';
import Header from './components/Header/Header';
import MyLinks from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Skillset from './pages/Skillset/Skillset';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Header />
      <MyLinks />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/skills" component={Skillset}/>
      </Switch>
      </div>
      </Router>
    )
  }
}

export default App;
