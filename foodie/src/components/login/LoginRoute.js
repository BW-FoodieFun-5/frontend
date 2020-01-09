import React from 'react';

import Login from './Login';
import LoginBar from './LoginBar';

import { StyledApp } from '../../styles/appStyles';
import { StyledBottomBar } from '../../styles/bottomBarStyle';
import { StyledLogin } from '../../styles/loginStyles';
import { StyledMainPage } from '../../styles/mainPageStyles';
// import { StyledSideBar } from '../../styles/sideBarStyles';

export default function LoginRoute() {

    return (
        <StyledApp>
            <h1 style={{color: '#C45228', textAlign: 'center' }}>Login</h1>
            
            <StyledMainPage>
                <StyledLogin>
                    <Login />
                </StyledLogin>

                <StyledBottomBar style={{ position: 'fixed' }}>
                    <LoginBar />
                </StyledBottomBar>
            </StyledMainPage>
        </StyledApp>
    )
}
