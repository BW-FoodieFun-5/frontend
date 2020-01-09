import React from 'react'
import { StyledBottomBar } from '../../styles/bottomBarStyle'
import { Spacing } from '../../styles/spacing';
import { Link } from 'react-router-dom'

export default function SignupBar() {
    return (
        <StyledBottomBar>
            <Spacing>
                <Link to='/login'>Log In</Link>
            </Spacing>
        </StyledBottomBar>
    )
}