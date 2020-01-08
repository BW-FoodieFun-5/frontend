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
            <StyledBottomBar>

                <SignupBar />

            </StyledBottomBar>
            <StyledMainPage>
                <StyledLogin>
                <Signup />
                </StyledLogin>
            </StyledMainPage>
        </StyledApp>
    )
}
