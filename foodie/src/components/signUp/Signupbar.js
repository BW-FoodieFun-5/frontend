import React from 'react';
import { Link } from 'react-router-dom';

import { Spacing } from '../../styles/spacing';
import { StyledBottomBar } from '../../styles/bottomBarStyle';

export default function SignupBar() {
    return (
        
        <StyledBottomBar>
            <Spacing>
                <Link to='/login'>Log In</Link>
            </Spacing>
        </StyledBottomBar>
    )
}