import React, { useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import MenuFilters from './FilterForms/MenuFilter'
import { RestaurantContext } from "../contexts/RestaurantContext";
import { MenuContext } from "../contexts/MenuContext";

import { LineHeight } from '../styles/lineHeight';
import {
  FavoriteRestaurantStyles,
  // RestaurantCardButtons
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
  }, []);

  React.useEffect(() => {
    axiosWithAuth()
      .get('https://foodie-fun-chards.herokuapp.com/api/menu')
      .then(res => {
        console.log('menu', res.data)
        setMenu(res.data)
      })
      .catch(err => console.log(err))
  }, []);

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
                <h1 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '40px' }}>{i.name}</h1>

                <div style={{ display: 'flex' }}>
                  <h3>Cuisine Type: {i.cuisineType}</h3>
                  <h3>Rating: {i.rating}</h3>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={i.image} style={{ maxWidth: '225px', marginBottom: '10px'}} />
                </div>

                <h3 style={{ margin: '0 0 0 10px', lineHeight: '1.5em'}}>Hours of Operation: {i.hoursOperation}</h3>
                <h4 style={{ margin: '0 0 0 10px', lineHeight: '1.5em'}}>Description: {i.description}</h4>
                <h4 style={{ margin: '0 0 10px 10px', lineHeight: '1.5em'}}>Review: {i.review}</h4>

              </LineHeight>

              <LineHeight>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <MenuFilters state={{ menu, setMenu }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <button style={{ width: '30%', height: '40px', margin: '0 2%' }} onClick={handleAdd}>Add Item Review</button><br />
                  <button style={{ width: '30%', height: '40px', margin: '0 2%' }} onClick={handleEdit}>Edit Restaurant</button><br />
                  <button style={{ width: '30%', height: '40px', margin: '0 2%' }} onClick={handleclick}>Delete Restaurant</button>{" "}
                </div>

                <h2 style={{ textAlign: 'center', paddingBottom: '20px', marginBottom: 0, borderBottom: 'solid white 2px', fontSize: '30px' }}>Menu Items</h2>

                {menu.map(i => {
                  if (i.restaurants_id == id) {
                    return <div style={{ textAlign: 'center', padding: '0 0 40px 20px', borderBottom: 'solid white 2px'}} key={i.id}>
                            <h3 style={{ paddingTop: '10px'}}>{i.itemName} - {i.itemRating} Stars</h3>
                            <img src={i.image} style={{ maxWidth: '225px', marginBottom: '10px'}} />
                            <button onClick={() => history.push(`/menureview/${i.id}`)}>View Item</button> </div>

                  }
                })}
              </LineHeight>
            </div>
          );
        }
      })}



    </FavoriteRestaurantStyles>
  );
}
