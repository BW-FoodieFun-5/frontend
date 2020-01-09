import React from 'react'
import { StyledMainPage } from '../../styles/mainPageStyles'
import { StyledApp } from '../../styles/appStyles'
// import { StyledSideBar } from '../../styles/sideBarStyles'
import { StyledBottomBar } from '../../styles/bottomBarStyle'
import { StyledLogin } from '../../styles/loginStyles'
import SignupBar from './Signupbar'
import Signup from './SignUp'
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
