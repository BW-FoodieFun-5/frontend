import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

import { MenuContext } from "../../contexts/MenuContext";

import { LineHeight } from '../../styles/lineHeight';
import { Spacing } from '../../styles/spacing';
import { StyledBottomBar } from '../../styles/bottomBarStyle';
import { StyledButton } from '../../styles/buttonStyle';

// import {
//     FavoriteRestaurantStyles,
//     RestaurantCardButtons
// } from "../../styles/FavoriteRestaurantStyles";

export default function MenuItem() {

    let { id } = useParams();
    let history = useHistory();

    const { menu, setMenu } = React.useContext(MenuContext);
    const target = menu.filter(i => i.id == id)
    React.useEffect(() => {
        axiosWithAuth()
            .get('https://foodie-fun-chards.herokuapp.com/api/menu')
            .then(res => {
                console.log('menu', res.data)
                setMenu(res.data)
            })
            .catch(err => console.log(err))
    }, [])

        console.log('menu2', menu);

    function handleclick() {
        axiosWithAuth()
            .delete(`https://foodie-fun-chards.herokuapp.com/api/menu/${id}`)
            .then(res => history.push(`/restaurant/${target[0].restaurants_id}`))
            .catch(err => console.log(err));
    }

    function handleEdit() {
        history.push(`/edititem/${id}`);
    }

    function handleReturn() {
        history.push(`/restaurant/${target[0].restaurants_id}`)
    }

    return (
        <div>
            {menu.map(i => {
                if (i.id == id) {
                return (
                    <LineHeight>
                        <Spacing style={{ flexDirection: 'column' }}>
                        {" "}
                        <h1 style={{ marginTop: '20px' }}>{i.itemName}</h1>

                        <div style={{ display: 'flex' }}>
                            <h3>Cuisine Type: {i.cuisineType}</h3>
                            <h3>Rating: {i.itemRating}</h3>
                        </div>

                        <img src={i.image} style={{ maxWidth: '225px' }} />

                        <h3>Price: {i.price}</h3>
                            <p>Review: {i.itemReview}</p>

                        </Spacing>
                    </LineHeight>
                );
                }
            })}

            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                <button onClick={handleEdit}>Edit Review</button>
                <button onClick={handleclick}>Delete Review</button>
            </div>

            <StyledBottomBar style={{ display: 'flex', justifyContent: 'center', position: 'fixed' }}>
                <StyledButton onClick={handleReturn}>Back to Restaurant</StyledButton>
            </StyledBottomBar>
        </div>
    )
}