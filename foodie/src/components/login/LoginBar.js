import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { Spacing } from '../../styles/spacing';
import { StyledBottomBar } from '../../styles/bottomBarStyle';
import { StyledButton } from '../../styles/buttonStyle';

export default function LoginBar() {

    let history = useHistory();

    return (
        <StyledBottomBar>
            <Spacing>
                <StyledButton onClick={() => {history.push('/signup')}}>
                    Sign up
                </StyledButton>
            </Spacing>
        </StyledBottomBar>
    )
}