import React from 'react';

import AddNewDish from './AddNewDish';
// import AddNewDishBar from './AddNewDishBar';

import { StyledMainPage } from '../../styles/mainPageStyles';
import { StyledApp } from '../../styles/appStyles';
// import { StyledBottomBar } from '../../styles/bottomBarStyle';

export default function AddNewDishRoute() {
    return (
        <StyledApp>
            <StyledMainPage>
                <h1 style={{color: '#C45228'}}>Add New Dish</h1>
                <AddNewDish />
            </StyledMainPage>
            {/* <StyledBottomBar>
                <AddNewDishBar />    
            </StyledBottomBar> */}
        </StyledApp>
    )
}