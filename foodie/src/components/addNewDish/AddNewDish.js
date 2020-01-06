import React from 'react';
import { Formik, Form, Field } from 'formik'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { StyledForm } from '../../styles/formStyles';

export default function AddNewDish() {

    return (
        <StyledForm>
            <Formik
                initialValues={{ name: '', type: '', taste: '', looks: '', price: '', review: '' }} onSubmit={(values) => {
                    console.log(values)
                    // axiosWithAuth()
                    // .post({ ...values, id: Date.now() })
                    // .then(response => {
                    //     props.history.push('#')
                    // })
                    // .catch(error => console.log(error))
                }}
                >

                <Form>
                    <span>Restaurant Name: </span>
                    <Field type='text' name='name'></Field>
                    <span>Cuisine Type: </span>
                    <Field type='text' name='type'></Field>
                    <span>Taste: </span>
                    <Field type='text' name='taste'></Field>
                    <span>Appearance: </span>
                    <Field type='text' name='looks'></Field>
                    <span>Price: </span>
                    <Field as='select' name='price' placeholder='Price'>
                        <option value='cheap'>$ - Cheap</option>
                        <option value='average'>$$ - Average</option>
                        <option value='expensive'>$$$ - Expensive</option>
                    </Field>
                    <span>Review: </span>
                    <Field type='text' name='review'></Field>
                    <button type='submit'>
                        Add Dish
                    </button>
                </Form>
            </Formik>
        </StyledForm>
    )
}
