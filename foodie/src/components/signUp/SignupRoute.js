import React from 'react';

import Signup from './SignUp';
import SignupBar from './Signupbar';

import { StyledApp } from '../../styles/appStyles';
import { StyledBottomBar } from '../../styles/bottomBarStyle';
import { StyledLogin } from '../../styles/loginStyles';
import { StyledMainPage } from '../../styles/mainPageStyles';
// import { StyledSideBar } from '../../styles/sideBarStyles';

export default function SignupRoute() {
    return (

        <StyledApp>
            <h1 style={{color: '#C45228', textAlign: 'center' }}>Sign Up</h1>

            <StyledMainPage>
                <StyledLogin>
                    <Signup />
                </StyledLogin>
                
                <StyledBottomBar>
                    <SignupBar />
                </StyledBottomBar>
            </StyledMainPage>
        </StyledApp>
    )
}
