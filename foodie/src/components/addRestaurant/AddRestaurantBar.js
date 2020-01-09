import React from 'react'
import { StyledBottomBar } from '../../styles/bottomBarStyle'
import { Spacing } from '../../styles/spacing';
import { Link } from 'react-router-dom'

export default function AddRestaurantBar() {
    return (
        <StyledBottomBar>
            <Spacing>
                <Link to='#'>Action</Link>
                <Link to='#'>Action 2</Link>
                <Link to='#'>Action 3</Link>
            </Spacing>
        </StyledBottomBar>
    )
}