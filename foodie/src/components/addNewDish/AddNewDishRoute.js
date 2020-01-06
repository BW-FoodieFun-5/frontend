import React from 'react'

import { StyledMainPage } from '../../styles/mainPageStyles'
import { StyledApp } from '../../styles/appStyles'
import { StyledSideBar } from '../../styles/sideBarStyles'

import AddNewDish from './AddNewDish'
import AddNewDishBar from './AddNewDishBar'

export default function AddNewDishRoute() {
    return (
        <StyledApp>
            <StyledSideBar>
                <AddNewDishBar />
            </StyledSideBar>
            <StyledMainPage>
                <AddNewDish />
            </StyledMainPage>
        </StyledApp>
    )
}