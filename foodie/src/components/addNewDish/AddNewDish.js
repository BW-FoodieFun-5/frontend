import React from 'react';
import { Formik, Form, Field } from 'formik'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { StyledForm } from '../../styles/formStyles';


import { ReviewBox } from '../../styles/reviewBox';
import { useParams, useHistory } from 'react-router-dom';



export default function AddNewDish() {

    let { id } = useParams();
    let history = useHistory();

    return (
        <StyledForm>
            <Formik
                initialValues={{ itemName: '', cuisineType: '', price: '', description: '', image: '', itemRating: '', itemReview: '' }} onSubmit={(values) => {
                    console.log(values)
                    axiosWithAuth()
                        .post('https://foodie-fun-chards.herokuapp.com/api/menu', { ...values, restaurants_id: 1 })
                        .then(response => {
                            console.log(response);
                            history.push(`/restaurant/${id}`)
                        })
                        .catch(error => console.log(error))
                }}
            >

                <Form>
                    <span>Item Name: </span>
                    <Field type='text' name='itemName'></Field>

                    <span>Cuisine Type: </span>
                    <Field as='select' name='cuisineType'>
                        <option value=''>Please Select One...</option>
                        <option value='american'>American</option>
                        <option value='asian'>Asian</option>
                        <option value='barbeque'>Barbeque</option>
                        <option value='fastfood'>Fast Food</option>
                        <option value='indian'>Indian</option>
                        <option value='italian'>Italian</option>
                        <option value='mediterranean'>Mediterranean</option>
                        <option value='mexican'>Mexican</option>
                        <option value='pizza'>Pizza</option>
                    </Field>

                    <span>Item Rating: </span>
                    <Field as="select" name="itemRating" placeholder="Rating">
                        <option value=''>Please Select One...</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Star</option>
                        <option value="3">3 Star</option>
                        <option value="4">4 Star</option>
                        <option value="5">5 Star</option>
                    </Field>

                    <span>Price: </span>
                    <Field as='select' name='price' placeholder='Price'>
                        <option value=''>Please Select One...</option>
                        <option value='cheap'>$ - Cheap</option>
                        <option value='average'>$$ - Average</option>
                        <option value='expensive'>$$$ - Expensive</option>
                    </Field>

                    <span>Image URL: </span>
                    <Field type='text' name='image'></Field>
                    <span>Description: </span>
                    <Field type='text' name='description'></Field>
                    <ReviewBox>
                        <span>Review: </span>
                        <Field className='reviewBox' type='textarea' name='itemReview'></Field>
                    </ReviewBox>
                    <button type='submit'>
                        Add Dish
                    </button>
                </Form>
            </Formik>
        </StyledForm>
    )
}
