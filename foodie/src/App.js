import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { RestaurantContext } from './contexts/RestaurantContext';
import { MenuContext } from './contexts/MenuContext';

import AddNewDishRoute from './components/addNewDish/AddNewDishRoute';
import AddRestaurantRoute from './components/addRestaurant/AddRestaurantRoute';
import EditDish from './components/addNewDish/EditDish';
import EditRestaurant from './components/addRestaurant/EditRestaurant';
import LoginRoute from './components/login/LoginRoute';
import MenuItem from './components/MenuItem/MenuItem';
import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import RestaurantViewRoute from './components/restaurantView/RestaurantViewRoute';
import SignupRoute from './components/signUp/SignupRoute';
import TestPUT from './components/TestPUT';

function App() {
  console.log('context', RestaurantContext)
  const [restaurants, setRestaurants] = useState([])
  const [menu, setMenu] = useState([])

  return (

    <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
      <MenuContext.Provider value={{ menu, setMenu }} >
        <div className="App">
          <header className="App-header">
            <Nav />

            <Switch>
              <Route exact path="/login" ><LoginRoute /></Route>
              <Route exact path="/signup" component={SignupRoute} />
              
              <PrivateRoute exact path="/adddish/:id" component={AddNewDishRoute} />
              <PrivateRoute exact path="/addrestaurant" component={AddRestaurantRoute} />
              <PrivateRoute exact path="/restaurantview" component={RestaurantViewRoute} />
              <PrivateRoute exact path='/editrestaurant/:id' component={EditRestaurant} />
              <PrivateRoute exact path='/menureview/:id' component={MenuItem} />
              <PrivateRoute exact path='/restaurant/:id' component={TestPUT} />
              <PrivateRoute exact path='/edititem/:id' component={EditDish} />
            </Switch>

          </header>
        </div>
      </MenuContext.Provider>
    </RestaurantContext.Provider>
  );
}

export default App;