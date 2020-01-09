import React from 'react';
import { Formik, Form, Field } from 'formik';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { StyledForm } from '../../styles/formStyles';

export default function MenuFilters(props) {

    //{ menu, setMenu }
    return (

        <StyledForm>
            <Formik
                initialValues={{ cuisineType: '', itemRating: '', filter: '', price: '' }}
                onSubmit={(values) => {
                    if (values.filter === 'cuisineType') {
                        props.state.setMenu(props.state.menu.filter(i => i.cuisineType === values.cuisineType))
                    } else if (values.filter === 'itemRating') {
                        props.state.setMenu(props.state.menu.filter(i => i.itemRating === values.itemRating))
                    } else if (values.filter === 'price') {
                        props.state.setMenu(props.state.menu.filter(i => i.price === values.price))

                    } else if (values.filter === 'none') {
                        axiosWithAuth()
                            .get('https://foodie-fun-chards.herokuapp.com/api/menu')
                            .then(res => {
                                console.log(res.data)
                                props.state.setMenu(res.data)
                            })
                            .catch(err => console.log(err))
                    }

                }}
            >

                <Form>
                    <span>Filter Menu by:</span>


                    <Field as='select' name='filter' >
                        <option value='none'>None</option>
                        {/* <option value='cuisineType'>Cuisine</option> */}
                        <option value='itemRating'>Rating</option>
                        <option value='price'>Price</option>

                    </Field>


                    {/* <span>Cuisine Type: </span>
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
                    </Field> */}




                    <span> Overall Rating: </span>
                    <Field name="itemRating" as="select" placeholder="Rating">
                        <option value="1">1 - Star</option>
                        <option value="2">2 - Star</option>
                        <option value="3">3 - Star</option>
                        <option value="4">4 - Star</option>
                        <option value="5">5 - Star</option>
                    </Field>
                    <span> Price: </span>
                    <Field as='select' name='price' placeholder='Price'>
                        <option value=''>Please Select One...</option>
                        <option value='Cheap'>$ - Cheap</option>
                        <option value='Average'>$$ - Average</option>
                        <option value='Expensive'>$$$ - Expensive</option>
                    </Field>

                    <button type='submit'>
                        Filter
                    </button>

                </Form>

            </Formik>
        </StyledForm>
    )
}