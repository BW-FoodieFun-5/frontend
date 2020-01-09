import React from 'react'
import { StyledBottomBar } from '../../styles/bottomBarStyle'
import { Spacing } from '../../styles/spacing';
import { Link } from 'react-router-dom'

export default function RestaurantViewBar() {
    return (
        <StyledBottomBar>
            <Spacing>
                <Link to='/addrestaurant'>Add Restaurant</Link>
            </Spacing>
        </StyledBottomBar>
    )
}