import React from 'react'
import { StyledMainPage } from '../../styles/mainPageStyles'
import { StyledApp } from '../../styles/appStyles'
import { StyledSideBar } from '../../styles/sideBarStyles'
import AddRestaurant from './AddRestaurant'
import AddRestaurantBar from './AddRestaurantBar'
export default function AddRestaurantRoute() {
    return (
        <StyledApp>
            <StyledSideBar>

                <AddRestaurantBar />

            </StyledSideBar>
            <StyledMainPage>
                <AddRestaurant />
            </StyledMainPage>
        </StyledApp>
    )
}