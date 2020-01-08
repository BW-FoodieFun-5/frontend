import React from 'react';
import './App.css';
import SignupRoute from './components/signUp/SignupRoute'
import LoginRoute from './components/login/LoginRoute'
import AddRestaurantRoute from './components/addRestaurant/AddRestaurantRoute'
import Nav from './components/Nav'
import AddNewDishRoute from './components/addNewDish/AddNewDishRoute'

import RestaurantViewRoute from './components/restaurantView/RestaurantViewRoute'

import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <div className="App">
      
      <Nav/>
      
      <header className="App-header">


        <Switch>
          <Route exact path="/login" ><LoginRoute /></Route>
          <Route exact path="/signup" component={SignupRoute} />
          <PrivateRoute exact path="/addrestaurant" component={AddRestaurantRoute} />
          <PrivateRoute exact path="/restaurantview" component={RestaurantViewRoute} />
          <Route exact path="/adddish" component={AddNewDishRoute} />

        </Switch>

      </header>
    </div>
  );
}

export default App;
