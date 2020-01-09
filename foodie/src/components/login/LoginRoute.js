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
            <h1 style={{color: '#C45228', textAlign: 'center' }}>Login</h1>
            <StyledMainPage>
            <StyledLogin>
                <Login />
            </StyledLogin>
            <StyledBottomBar>
                <LoginBar />
            </StyledBottomBar>
            </StyledMainPage>
        </StyledApp>
    )
}
