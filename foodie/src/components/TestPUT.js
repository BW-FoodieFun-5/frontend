import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom'
import { RestaurantContext } from '../contexts/RestaurantContext'
export default function TestPUT() {
    let { id } = useParams()
    let history = useHistory()
    const { restaurants, setRestaurants } = React.useContext(RestaurantContext)
    console.log('contextlog', restaurants)


    function handleclick() {
        axiosWithAuth()
            .delete(`https://foodie-fun-chards.herokuapp.com/api/restaurants/${id}`)
            .then(res => history.push('/restaurantview'))
            .catch(err => console.log(err))
    }
    return (
        <div>
            {restaurants.map(i => {
                if (i.id == id) {
                    return (<div>
                        <h1>{i.name}</h1>
                    </div>)
                }
            }



            )
            }
            <Link to={`/dish/${id}`}>see all reviews</Link>
            <button onClick={handleclick} >Delete Restaurant</button>
        </div>
    )
}