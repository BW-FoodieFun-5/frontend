import React from 'react'
import { Formik, Form, Field } from 'formik'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { StyledForm } from '../../styles/formStyles'
export default function Login(props) {
    console.log(props)
    return (
        <StyledForm>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values) => {
                    axiosWithAuth()
                        .post('https://foodie-fun-chards.herokuapp.com/api/auth/login', { ...values })
                        .then(res => {
                            
                            localStorage.setItem('token', res.data.token);
                            props.history.push('#')
                        })
                        .catch(err => console.log(err))
                }}
            >
                <Form>
                    <span>Username: </span><Field type='username' name='username'></Field>
                    <span>Password: </span><Field type='password' name='password'></Field>
                    <button type='submit'>
                        Log In
        </button>
                </Form>
            </Formik>
        </StyledForm>
    )
}