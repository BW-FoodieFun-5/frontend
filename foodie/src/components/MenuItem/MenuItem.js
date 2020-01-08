import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { MenuContext } from "../../contexts/MenuContext";
import {
    FavoriteRestaurantStyles,
    RestaurantCardButtons
} from "../../styles/FavoriteRestaurantStyles";

export default function MenuItem() {
    let { id } = useParams();
    let history = useHistory();
    const { menu, setMenu } = React.useContext(MenuContext);

    console.log('menu2', menu);


    function handleclick() {
        axiosWithAuth()
            .delete(`https://foodie-fun-chards.herokuapp.com/api/menu/${id}`)
            .then(res => history.push("/restaurantview"))
            .catch(err => console.log(err));
    }
    function handleEdit() {
        history.push(`/edititem/${id}`);
    }
    return (
        <div>

            {menu.map(i => {
                if (i.id == id) {
                    return (
                        <div>
                            {" "}
                            <h1>Name: {i.itemName}</h1>
                            <h2>Cuisine Type: {i.cuisineType}</h2>
                            <h3>Price: {i.price}</h3>
                            <h4>Rating: {i.itemRating}</h4>

                            <p>Review: {i.itemReview}</p>


                        </div>
                    );
                }
            })}

            <button onClick={handleEdit}>Edit Review</button>
            <button onClick={handleclick}>Delete Review</button>
        </div>
    )
}