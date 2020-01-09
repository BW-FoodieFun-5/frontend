import React, { useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { MenuContext } from "../contexts/MenuContext";
import { LineHeight } from '../styles/lineHeight';
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
      .get('https://foodie-fun-chards.herokuapp.com/api/restaurants')
      .then(res => {
        console.log(res.data)
        setRestaurants(res.data)

      })
      .catch(err => console.log(err))
  }, []

  )

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
            <div style={{ marginTop: '10px' }}>
              <LineHeight>
              {" "}
              <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>{i.name}</h1>
              <div style={{ display: 'flex' }}>
                <h3>Cuisine Type: { i.cuisineType }</h3>
                <h3>Rating: { i.rating }</h3>
              </div>
              <h3>Hours of Operation: {i.hoursOperation}</h3>
              <h4>Description: {i.description}</h4>
              <h4>Review: {i.review}</h4>
              </LineHeight>
              <LineHeight>
              <h2 style={{ textAlign: 'center' }}>Menu Items:</h2>
              {menu.map(i => {
                if (i.restaurants_id == id) {
                  return <div style={{ textAlign: 'center', marginBottom: '20px' }} key={i.id}>
                          <h4>{i.itemName} - {i.itemRating} Stars</h4>
                          <button onClick={() => history.push(`/menureview/${i.id}`)}>View Item</button> </div>
                }
              })}
              </LineHeight>
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
