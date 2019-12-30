import React from 'react'
import { Formik, Form, Field } from 'formik'
import { axiosWithAuth } from '../utils/axiosWithAuth'
export default function AddRestaurant(props) {
    console.log(props)
    return (
        <Formik
            initialValues={{ name: '', type: '', location: '', rating: '', photo: '' }}
            onSubmit={(values) => {
                axiosWithAuth()
                    .post('#', { ...values, id: Date.now() })
                    .then(res => {

                        props.history.push('#')
                    })
                    .catch(err => console.log(err))
            }}
        >
            <Form>
                <span>Restaurant Name: </span><Field type='text' name='name'></Field>
                <span> Cuisine Type: </span><Field type='text' name='type'></Field>
                <span> Location: </span><Field type='text' name='location'></Field>
                <span> Overall Rating: </span><Field type='text' name='rating'></Field>
                <span> Photo: </span><Field type='file' name='photo'></Field>
                <button type='submit'>
                    Add This Restaurant
                </button>
            </Form>
        </Formik>
    )
}