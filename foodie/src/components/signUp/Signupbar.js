import React from 'react'
import { StyledForm } from '../../styles/formStyles'
import { Link } from 'react-router-dom'

export default function SignupBar() {
    return (
        <div>
            <Link to='/login'>Log In</Link>
        </div>
    )
}