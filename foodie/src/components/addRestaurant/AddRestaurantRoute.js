import React from 'react'
import { StyledMainPage } from '../../styles/mainPageStyles'
import { StyledApp } from '../../styles/appStyles'
import { StyledSideBar } from '../../styles/sideBarStyles'
import AddRestaurant from './AddRestaurant'
import AddRestaurantBar from './AddRestaurantBar'
export default function AddRestaurantRoute(props) {
    return (
        <StyledApp>
            <StyledSideBar>

                <AddRestaurantBar {...props} />

            </StyledSideBar>
            <StyledMainPage>
                <AddRestaurant {...props} />
            </StyledMainPage>
        </StyledApp>
    )
}