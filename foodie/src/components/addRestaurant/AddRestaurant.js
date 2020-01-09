import React from 'react';
import { Formik, Form, Field } from 'formik';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
// import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import { StyledForm } from '../../styles/formStyles';

export default function AddRestaurant(props) {
    console.log(props)

    let history = useHistory();

    return (
        <StyledForm>
            <Formik initialValues={{ name: '', cuisineType: '', location: '', hoursOperation: '', rating: '', review: '', description: '', image: '' }}
                onSubmit={(values) => {
                    console.log(values)

                    axiosWithAuth()
                        .post('https://foodie-fun-chards.herokuapp.com/api/restaurants', { ...values })
                        .then(res => {
                            console.log(res)
                            props.history.push('/restaurantview')
                        })
                        .catch(err => console.log(err))
                }}
            >
                <Form>
                    <span>Restaurant Name: </span>
                    <Field type='text' name='name'></Field>

                    <span> Short Description: </span>
                    <Field type='text' name='description'></Field>

                    <span>Cuisine Type: </span>
                    <Field as='select' name='cuisineType'>
                        <option value=''>Please Select One...</option>
                        <option value='American'>American</option>
                        <option value='Asian'>Asian</option>
                        <option value='Barbeque'>Barbeque</option>
                        <option value='Fastfood'>Fast Food</option>
                        <option value='Indian'>Indian</option>
                        <option value='Italian'>Italian</option>
                        <option value='Mediterranean'>Mediterranean</option>
                        <option value='Mexican'>Mexican</option>
                        <option value='Pizza'>Pizza</option>
                    </Field>

                    <span> Location: </span>
                    <Field type='text' name='location'></Field>

                    <span> Hours of Operation: </span>
                    <Field type='text' name='hoursOperation' ></Field>

                    <span> Overall Rating: </span>
                    <Field name="rating" as="select" placeholder="Rating">
                        <option value="1">1 - Star</option>
                        <option value="2">2 - Star</option>
                        <option value="3">3 - Star</option>
                        <option value="4">4 - Star</option>
                        <option value="5">5 - Star</option>
                    </Field>

                    <span> Comments: </span>
                    <Field type='text' name='review' ></Field>

                    <span> ImageUrl: </span>
                    <Field type='text' name='image'></Field>

                    {/* <span> Photo: </span><Field type='file' name='photo'></Field> */}

                    <button type='submit'>
                        Add This Restaurant
                    </button>
                    
                    {/* <Link to='/restaurantview' style={{ color: 'black'}}><button>Cancel</button></Link> */}
                    <button onClick={() => {history.push('/restaurantview')}}>Cancel</button>

                </Form>
            </Formik>
        </StyledForm>
    )
}