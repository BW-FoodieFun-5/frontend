import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp'
import Login from './components/Login'
import AddRestaurant from './components/AddRestaurant'
import { Switch, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/addrestaurant'>Test Route</Link>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/addrestaurant" component={AddRestaurant} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
