import React from 'react';
import { Link } from 'react-router-dom';

import { Spacing } from '../../styles/spacing';
import { StyledBottomBar } from '../../styles/bottomBarStyle';

export default function LoginBar() {
    
    return (
        <StyledBottomBar>
            <Spacing>
                <Link to='/signup'>Sign up</Link>
            </Spacing>
        </StyledBottomBar>
    )
}