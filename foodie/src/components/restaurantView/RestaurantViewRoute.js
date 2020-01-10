import React from 'react';

import RestaurantView from './RestaurantView';
import RestaurantViewBar from './RestaurantViewBar';

import { StyledApp } from '../../styles/appStyles';
import { StyledBottomBar } from '../../styles/bottomBarStyle';
import { StyledLogin } from '../../styles/loginStyles';
import { StyledMainPage } from '../../styles/mainPageStyles';
// import { StyledSideBar } from '../../styles/sideBarStyles';

export default function RestaurantViewRoute(props) {
    return (

        <StyledApp>
            <h1 style={{color: '#C45228', textAlign: 'center', marginBottom: 0, fontSize: '48px' }}>Restaurants</h1>

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
