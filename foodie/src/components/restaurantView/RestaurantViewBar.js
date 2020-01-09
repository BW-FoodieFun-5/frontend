import React from 'react';
import { Link } from 'react-router-dom';

import { Spacing } from '../../styles/spacing';
import { StyledBottomBar } from '../../styles/bottomBarStyle';

export default function RestaurantViewBar() {
    return (
        
        <StyledBottomBar>
            <Spacing>
                <Link to='/addrestaurant'>Add Restaurant</Link>
            </Spacing>
        </StyledBottomBar>
    )
}