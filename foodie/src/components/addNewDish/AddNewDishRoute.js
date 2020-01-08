import React from 'react'

import { StyledMainPage } from '../../styles/mainPageStyles'
import { StyledApp } from '../../styles/appStyles'
import { StyledBottomBar } from '../../styles/bottomBarStyle'

import AddNewDish from './AddNewDish'
import AddNewDishBar from './AddNewDishBar'

export default function AddNewDishRoute() {
    return (
        <StyledApp>
            <StyledMainPage>
            <h1>Add New Dish</h1>
            <AddNewDish />
            </StyledMainPage>
            <StyledBottomBar>
                {/* <AddNewDishBar />     */}
            </StyledBottomBar>
        </StyledApp>
    )
}