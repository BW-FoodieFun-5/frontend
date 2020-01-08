import React from 'react'
import { StyledMainPage } from '../../styles/mainPageStyles'
import { StyledApp } from '../../styles/appStyles'
// import { StyledSideBar } from '../../styles/sideBarStyles'
import { StyledBottomBar } from '../../styles/bottomBarStyle'
import { StyledLogin } from '../../styles/loginStyles'

import AddRestaurant from './AddRestaurant'
import AddRestaurantBar from './AddRestaurantBar'
export default function AddRestaurantRoute(props) {
    return (
        <StyledApp>
            <StyledBottomBar>

                <AddRestaurantBar {...props} />

            </StyledBottomBar>
            <StyledMainPage>
                <StyledLogin>
                <AddRestaurant {...props} />
                </StyledLogin>
            </StyledMainPage>
        </StyledApp>
    )
}