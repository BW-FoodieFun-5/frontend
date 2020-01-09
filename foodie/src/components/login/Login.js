import React from 'react'
import { Formik, Form, Field } from 'formik'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { StyledForm } from '../../styles/formStyles'
import { useHistory } from 'react-router-dom'
export default function Login() {
    let history = useHistory()

    return (
        <StyledForm>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values) => {
                    axiosWithAuth()
                        .post('https://foodie-fun-chards.herokuapp.com/api/auth/login', { ...values })
                        .then(res => {

                            localStorage.setItem('token', res.data.token);
                            history.push('/restaurantview')
                        })
                        .catch(err => console.log(err))
                }}
            >
                <Form>
                    <span>Username: </span>
                    <Field type='username' name='username'></Field>

                    <span>Password: </span>
                    <Field type='password' name='password'></Field>
                    
                    <button type='submit'>
                        Log In
                    </button>
                </Form>
            </Formik>
        </StyledForm>
    )
}