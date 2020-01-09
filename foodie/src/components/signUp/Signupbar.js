import React from 'react';
import { Link } from 'react-router-dom';

import { Spacing } from '../../styles/spacing';
import { StyledBottomBar } from '../../styles/bottomBarStyle';
import { StyledButton } from '../../styles/buttonStyle';

export default function SignupBar() {
    return (
        
        <StyledBottomBar>
            <Spacing>
                <StyledButton>
                    <Link to='/login'>Log In</Link>
                </StyledButton>
            </Spacing>
        </StyledBottomBar>
    )
}