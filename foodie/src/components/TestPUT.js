import React, { useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { MenuContext } from "../contexts/MenuContext";
import {
  FavoriteRestaurantStyles,
  RestaurantCardButtons
} from "../styles/FavoriteRestaurantStyles";

export default function TestPUT() {
  let { id } = useParams();
  let history = useHistory();
  const { menu, setMenu } = React.useContext(MenuContext);
  const { restaurants, setRestaurants } = React.useContext(RestaurantContext);

  React.useEffect(() => {
    axiosWithAuth()
      .get('https://foodie-fun-chards.herokuapp.com/api/menu')
      .then(res => {
        console.log('menu', res.data)

        setMenu(res.data)

      })
      .catch(err => console.log(err))
  }, [])

  function handleclick() {
    axiosWithAuth()
      .delete(`https://foodie-fun-chards.herokuapp.com/api/restaurants/${id}`)
      .then(res => history.push("/restaurantview"))
      .catch(err => console.log(err));
  }

  function handleEdit() {
    history.push(`/editrestaurant/${id}`);
  }

  function handleAdd() {
    history.push(`/adddish/${id}`);
  }



  return (
    <FavoriteRestaurantStyles>
      {restaurants.map(i => {
        if (i.id == id) {
          return (
            <div>
              {" "}
              <h1>Name: {i.name}</h1>
              <h2>Cuisine Type: {i.cuisineType}</h2>
              <h3>Hours of Operation: {i.hoursOperation}</h3>
              <h4>Rating: {i.rating}</h4>
              <p>Description: {i.description}</p>
              <p>Review: {i.review}</p>
              <p>Menu Items:</p>
              {menu.map(i => {
                if (i.restaurants_id == id) {
                  return <div key={i.id}><p>{i.itemName} - {i.itemRating} stars</p>
                    <button onClick={() => history.push(`/menureview/${i.id}`)}>View Item</button> </div>
                }
              })}
            </div>
          );
        }
      })}
      <button onClick={handleAdd}>Add Item Review</button>
      <button onClick={handleEdit}>Edit Restaurant</button>
      <button onClick={handleclick}>Delete Restaurant</button>{" "}
    </FavoriteRestaurantStyles>
  );
}
