import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './components/MainPage';
import Dashboard from './components/admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/admin" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;