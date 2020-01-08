import React, { useContext } from 'react'

import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { Link } from 'react-router-dom'
import { StyledGrid } from '../../styles/gridStyles'
import { RestaurantContext } from '../../contexts/RestaurantContext'
export default function RestaurantView(props) {
    console.log('context2', RestaurantContext)
    const { restaurants, setRestaurants } = useContext(RestaurantContext)
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
    // let handleClick = function () {
    //     axiosWithAuth()
    //         .delete('https://foodie-fun-chards.herokuapp.com/api/restaurants/2')
    //         .then(res => {
    //             console.log(res)

    //         })
    //         .catch(err => console.log(err))
    // }
    return (
        <StyledGrid >
            {restaurants.map((data) => (<RestCard key={data.id} data={data} {...props} />))}
            {/* <button onClick={handleClick}>delete id 2</button> */}
        </StyledGrid>
    )
}

function RestCard(props) {
    return (

        <Link to={`/restaurant/${props.data.id}`}>
            <h1>{props.data.name}</h1>
            <h2>{props.data.description}</h2>
            {/* <h3>{props.data.rating} Stars</h3> */}

        </Link>
    )
}