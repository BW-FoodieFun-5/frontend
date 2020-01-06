import React from 'react'
import { StyledMainPage } from '../../styles/mainPageStyles'
import { StyledApp } from '../../styles/appStyles'
import { StyledSideBar } from '../../styles/sideBarStyles'
import SignupBar from './Signupbar'
import Signup from './SignUp'
export default function SignupRoute() {
    return (
        <StyledApp>
            <StyledSideBar>

                <SignupBar />

            </StyledSideBar>
            <StyledMainPage>
                <Signup />
            </StyledMainPage>
        </StyledApp>
    )
}
