import React from 'react'
import { StyledBottomBar } from '../../styles/bottomBarStyle'
import { Spacing } from '../../styles/spacing';
import { Link } from 'react-router-dom'

export default function LoginBar() {
    return (
        <StyledBottomBar>
            <Spacing>
                <Link to='/signup'>Sign up</Link>
            </Spacing>
        </StyledBottomBar>
    )
}