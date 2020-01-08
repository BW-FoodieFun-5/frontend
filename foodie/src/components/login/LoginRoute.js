import React from 'react'
import { StyledMainPage } from '../../styles/mainPageStyles'
import { StyledApp } from '../../styles/appStyles'
// import { StyledSideBar } from '../../styles/sideBarStyles'
import { StyledBottomBar } from '../../styles/bottomBarStyle'
import { StyledLogin } from '../../styles/loginStyles'
import LoginBar from './LoginBar'
import Login from './Login'

export default function LoginRoute() {
    return (
        <StyledApp>
            <StyledBottomBar>

                <LoginBar />

            </StyledBottomBar>
            <StyledMainPage>
            <StyledLogin>
                <Login />
            </StyledLogin>
            </StyledMainPage>
        </StyledApp>
    )
}
