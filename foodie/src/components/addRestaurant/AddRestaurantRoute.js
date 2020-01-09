import React from 'react';

import AddRestaurant from './AddRestaurant';
import AddRestaurantBar from './AddRestaurantBar';

import { StyledApp } from '../../styles/appStyles';
import { StyledBottomBar } from '../../styles/bottomBarStyle';
import { StyledLogin } from '../../styles/loginStyles';
import { StyledMainPage } from '../../styles/mainPageStyles';
// import { StyledSideBar } from '../../styles/sideBarStyles';

export default function AddRestaurantRoute(props) {

    return (
        <StyledApp>
            <h1 style={{color: '#C45228', textAlign: 'center' }}>Add Restaurant</h1>

            <StyledMainPage>
                <StyledLogin>
                    <AddRestaurant {...props} />
                </StyledLogin>

                {/* <StyledBottomBar>
                    <AddRestaurantBar {...props} />
                </StyledBottomBar> */}
            </StyledMainPage>
        </StyledApp>
    )
}