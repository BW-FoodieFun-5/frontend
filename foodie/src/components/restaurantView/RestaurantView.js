import React, { useContext } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

import { RestaurantContext } from '../../contexts/RestaurantContext';
import RestaurantFilters from '../FilterForms/RestaurantFilters'
import { Spacing } from '../../styles/spacing';
import { StyledGrid } from '../../styles/gridStyles';

export default function RestaurantView(props) {
    console.log('context2', RestaurantContext)

    const { restaurants, setRestaurants } = useContext(RestaurantContext)

    console.log(props, 'in rest view')
    console.log(restaurants)
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
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    // let handleClick = function () {
    //     axiosWithAuth()
    //         .delete('https://foodie-fun-chards.herokuapp.com/api/restaurants/2')
    //         .then(res => {
    //             console.log(res)

    //         })
    //         .catch(err => console.log(err))
    // }
console.log(props, 'not in restcard')
    return (
        <>
            <RestaurantFilters state={{ restaurants, setRestaurants }} />
            <StyledGrid >
                {restaurants.map((data) => (<RestCard key={data.id} data={data} {...props} />))}
                {/* <button onClick={handleClick}>delete id 2</button> */}
            </StyledGrid>
        </>
    )
}

function RestCard(props) {

    console.log(props, 'In restcard')
    return (

        <div>
            <Link to={`/restaurant/${props.data.id}`}>
                <Spacing>

                    <img src={`${props.data.image}`} style={{ maxWidth: '225px', paddingTop: '50px'}}/>
                </Spacing>
                <div>
                    <h1 style={{ padding: '10px 0 10px 20px', margin: 0}}>{props.data.name}</h1>
                    <h2 style={{ padding: '0 0 50px 20px', margin: 0, borderBottom: 'solid white 2px'}}>{props.data.description}</h2>
                    {/* <h3>{props.data.rating} Stars</h3> */}
                </div>


            </Link>
        </div>
    )
}