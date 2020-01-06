import React from 'react'
import { StyledMainPage } from '../../styles/mainPageStyles'
import { StyledApp } from '../../styles/appStyles'
import { StyledSideBar } from '../../styles/sideBarStyles'
import RestaurantViewBar from './RestaurantViewBar'
import RestaurantView from './RestaurantView'
export default function RestaurantViewRoute(props) {
    return (
        <StyledApp>
            <StyledSideBar>

                <RestaurantViewBar {...props} />

            </StyledSideBar>
            <StyledMainPage>
                <RestaurantView {...props} />
            </StyledMainPage>
        </StyledApp>
    )
}
