import React from 'react'
import { Formik, Form, Field } from 'formik'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { StyledForm } from '../styles/formStyles'
export default function SignUp(props) {
    console.log(props)
    return (
        <StyledForm>
            <Formik
                initialValues={{ username: '', password: '', email: '', location: '' }}
                onSubmit={(values) => {
                    axiosWithAuth()
                        .post('https://foodie-fun-chards.herokuapp.com/api/auth/register', { ...values, id: Date.now })
                        .then(res => {
                            console.log(res)
                            props.history.push('/login')
                        })
                        .catch(err => console.log(err))
                }}
            >
                <Form>
                    <span>Username: </span><Field type='username' name='username'></Field>
                    <span>Password: </span><Field type='password' name='password'></Field>
                    <span>Email: </span><Field type='email' name='email'></Field>
                    <span>Location: </span><Field type='text' name='location'></Field>

                    <button type='submit'>
                        Sign Up
        </button>
                </Form>
            </Formik>
        </StyledForm>
    )
}