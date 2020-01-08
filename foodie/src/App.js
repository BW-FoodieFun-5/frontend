import React, { useState } from 'react';
import './App.css';
import SignupRoute from './components/signUp/SignupRoute'
import LoginRoute from './components/login/LoginRoute'
import AddRestaurantRoute from './components/addRestaurant/AddRestaurantRoute'
import AddNewDishRoute from './components/addNewDish/AddNewDishRoute'
import RestaurantViewRoute from './components/restaurantView/RestaurantViewRoute'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import { RestaurantContext } from './contexts/RestaurantContext'
import TestPUT from './components/TestPUT'

function App() {
  console.log('context', RestaurantContext)
  const [restaurants, setRestaurants] = useState([])
  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
      <div className="App">
        <header className="App-header">


          <Switch>
            <Route exact path="/login" ><LoginRoute /></Route>
            <Route exact path="/signup" component={SignupRoute} />
            <PrivateRoute exact path="/addrestaurant" component={AddRestaurantRoute} />
            <PrivateRoute exact path="/restaurantview" component={RestaurantViewRoute} />
            <Route exact path="/adddish" component={AddNewDishRoute} />
            <PrivateRoute exact path='/restaurant/:id' component={TestPUT} />
          </Switch>

        </header>
      </div>
    </RestaurantContext.Provider>
  );
}

export default App;
