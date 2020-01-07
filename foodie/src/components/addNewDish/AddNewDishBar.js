import React from 'react'
import { StyledForm } from '../../styles/formStyles'
import { Link } from 'react-router-dom'

export default function AddNewDishBar() {
    return (
        <StyledForm>
            <Link to='#'>Action</Link>
            <Link to='#'>Action 2</Link>
            <Link to='#'>Action 3</Link>
        </StyledForm>
    )
}