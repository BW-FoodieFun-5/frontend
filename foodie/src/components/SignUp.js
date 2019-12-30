import React from 'react'
import { Formik, Form, Field } from 'formik'
import { axiosWithAuth } from '../utils/axiosWithAuth'
export default function SignUp(props) {
    console.log(props)
    return (
        <Formik
            initialValues={{ username: '', password: '', email: '', location: '' }}
            onSubmit={(values) => {
                axiosWithAuth()
                    .post('#', { ...values, id: Date.now })
                    .then(res => {
                        
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
    )
}