import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom'
export default function TestPUT() {
    let { id } = useParams()
    let history = useHistory()
    const [state, setState] = React.useState([])
    React.useEffect(() => {
        axiosWithAuth()
            .get('https://foodie-fun-chards.herokuapp.com/api/restaurants')
            .then(res => {
                console.log(res.data)
                setState(res.data)

            })
            .catch(err => console.log(err))
    }, []

    )
    console.log(state)
    function handleclick() {
        axiosWithAuth()
            .delete(`https://foodie-fun-chards.herokuapp.com/api/restaurants/${id}`)
            .then(res => history.push('/restaurantview'))
            .catch(err => console.log(err))
    }
    return (
        <div>
            {state.map(i => {
                if (i.id === 1) {
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