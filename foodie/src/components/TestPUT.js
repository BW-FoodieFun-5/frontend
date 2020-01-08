import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { RestaurantContext } from "../contexts/RestaurantContext";
import {
  FavoriteRestaurantStyles,
  RestaurantCardButtons
} from "../styles/FavoriteRestaurantStyles";

export default function TestPUT() {
  let { id } = useParams();
  let history = useHistory();

  const { restaurants, setRestaurants } = React.useContext(RestaurantContext);

  function handleclick() {
    axiosWithAuth()
      .delete(`https://foodie-fun-chards.herokuapp.com/api/restaurants/${id}`)
      .then(res => history.push("/restaurantview"))
      .catch(err => console.log(err));
  }

  function handleEdit() {
    history.push(`/editrestaurant/${id}`);
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
            </div>
          );
        }
      })}
      <button onClick={handleEdit}>Edit Restaurant</button>
      <button onClick={handleclick}>Delete Restaurant</button>{" "}
    </FavoriteRestaurantStyles>
  );
}
