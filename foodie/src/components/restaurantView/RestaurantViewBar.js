import React from 'react'
import { StyledForm } from '../../styles/formStyles'
import { Link } from 'react-router-dom'

export default function RestaurantViewBar() {
    return (
        <div>
            <Link to='/addrestaurant'>Add Restaurant</Link>
        </div>
    )
}