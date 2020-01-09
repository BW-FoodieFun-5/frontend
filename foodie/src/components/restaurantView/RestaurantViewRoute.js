import React from 'react'
import { StyledMainPage } from '../../styles/mainPageStyles'
import { StyledApp } from '../../styles/appStyles'
// import { StyledSideBar } from '../../styles/sideBarStyles'
import { StyledBottomBar } from '../../styles/bottomBarStyle'

import { StyledLogin } from '../../styles/loginStyles'
import RestaurantViewBar from './RestaurantViewBar'
import RestaurantView from './RestaurantView'
export default function RestaurantViewRoute(props) {
    return (
        <StyledApp>
            <h1 style={{color: '#C45228', textAlign: 'center' }}>Restaurants</h1>
            <StyledMainPage>
                <StyledLogin>
                    <RestaurantView {...props} />
                </StyledLogin>
                <StyledBottomBar>
                    <RestaurantViewBar {...props} />
            </StyledBottomBar>
            </StyledMainPage>
        </StyledApp>
    )
}
