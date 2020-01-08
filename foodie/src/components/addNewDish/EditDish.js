import React from 'react';
import { Formik, Form, Field } from 'formik'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { StyledForm } from '../../styles/formStyles';
import { MenuContext } from '../../contexts/MenuContext'

import { ReviewBox } from '../../styles/reviewBox';
import { useParams, useHistory } from 'react-router-dom';



export default function EditDish() {

    let { id } = useParams();
    let history = useHistory();
    const { menu, setMenu } = React.useContext(MenuContext);
    const target = menu.filter(i => i.id == id)
    console.log('target', target)
    return (
        <StyledForm>
            <Formik
                initialValues={{ ...target[0] }}
                onSubmit={(values) => {
                    console.log(values)

                    axiosWithAuth()
                        .put(`https://foodie-fun-chards.herokuapp.com/api/menu/${id}`, { ...values })
                        .then(response => {
                            console.log(response);
                            history.push(`/restaurantview`)
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
                        Commit Edit
                    </button>
                </Form>
            </Formik>
        </StyledForm>
    )
}