import React from 'react'
import { Formik, Form, Field } from 'formik'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { StyledForm } from '../../styles/formStyles'
export default function AddRestaurant(props) {
    console.log(props)
    return (
        <StyledForm>
            <Formik
                initialValues={{ name: '', type: '', location: '', rating: '', photo: '' }}
                onSubmit={(values) => {
                    console.log(values)
                    // axiosWithAuth()
                    //     .post('#', { ...values, id: Date.now() })
                    //     .then(res => {

                    //         props.history.push('#')
                    //     })
                    //     .catch(err => console.log(err))
                }}
            >
                <Form>
                    <span>Restaurant Name: </span><Field type='text' name='name'></Field>
                    <span> Cuisine Type: </span><Field type='text' name='type'></Field>
                    <span> Location: </span><Field type='text' name='location'></Field>
                    <span> Overall Rating: </span>
                    <Field name="rating" as="select" placeholder="Rating">
                        <option value="1">1 - Star</option>
                        <option value="2">2 - Star</option>
                        <option value="3">3 - Star</option>
                        <option value="4">4 - Star</option>
                        <option value="5">5 - Star</option>
                    </Field>
                    <span> Photo: </span><Field type='file' name='photo'></Field>
                    <button type='submit'>
                        Add This Restaurant
                </button>
                </Form>
            </Formik>
        </StyledForm>
    )
}