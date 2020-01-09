import React from 'react';
import { Link } from 'react-router-dom';

import { Spacing } from '../../styles/spacing';
import { StyledBottomBar } from '../../styles/bottomBarStyle';
import { StyledButton } from '../../styles/buttonStyle';

export default function RestaurantViewBar() {
    return (
        
        <StyledBottomBar>
            <Spacing>
                <StyledButton>
                    <Link to='/addrestaurant'>Add Restaurant</Link>
                </StyledButton>
            </Spacing>
        </StyledBottomBar>
    )
}