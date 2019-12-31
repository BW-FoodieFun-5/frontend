import React from 'react'
import { StyledMainPage } from '../../styles/mainPageStyles'
import { StyledApp } from '../../styles/appStyles'
import { StyledSideBar } from '../../styles/sideBarStyles'
import LoginBar from './LoginBar'
import Login from './Login'
export default function LoginRoute() {
    return (
        <StyledApp>
            <StyledSideBar>

                <LoginBar />

            </StyledSideBar>
            <StyledMainPage>
                <Login />
            </StyledMainPage>
        </StyledApp>
    )
}
