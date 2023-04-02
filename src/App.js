import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/toolbox" component={Toolbox} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
