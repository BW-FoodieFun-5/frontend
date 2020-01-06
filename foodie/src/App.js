import React from 'react';
import './App.css';
import SignUp from './components/SignUp'
import LoginRoute from './components/login/LoginRoute'
import AddRestaurantRoute from './components/addRestaurant/AddRestaurantRoute'
import AddNewDishRoute from './components/addNewDish/AddNewDishRoute'
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/addrestaurant" component={AddRestaurantRoute} />
          <Route exact path="/adddish" component={AddNewDishRoute} />
        </Switch>

      </header>
    </div>
  );
}

export default App;
