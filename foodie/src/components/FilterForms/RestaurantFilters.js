import React from 'react';
import { Formik, Form, Field } from 'formik';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { StyledForm } from '../../styles/formStyles';


export default function RestaurantFilters(props) {

    function toggle() {

        document.getElementById("formfilter").classList.toggle("hidefilter");
      }

    //restaurants, setRestaurants
    return (
        <StyledForm>

            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <button style={{ width: '104px' }}onClick={toggle}>Sort</button>
            </div>
            <div id='formfilter' className='hidefilter'>
            <Formik
                initialValues={{ cuisineType: '', rating: '', filter: '' }}
                onSubmit={(values) => {
                    if (values.filter === 'cuisineType') {
                        props.state.setRestaurants(props.state.restaurants.filter(i => i.cuisineType === values.cuisineType))
                    } else if (values.filter === 'rating') {
                        props.state.setRestaurants(props.state.restaurants.filter(i => i.rating === values.rating))
                    } else if (values.filter === 'both') {
                        props.state.setRestaurants(props.state.restaurants.filter(i => i.rating === values.rating && i.cuisineType === values.cuisineType))

                    } else if (values.filter === 'none') {
                        axiosWithAuth()
                            .get('https://foodie-fun-chards.herokuapp.com/api/restaurants')
                            .then(res => {
                                console.log(res.data)
                                props.state.setRestaurants(res.data)
                            })
                            .catch(err => console.log(err))
                    }

                }}
            >

                <Form>
                    <span>Filter Restaurants by:</span>

                    <Field as='select' name='filter' >
                        <option value='none'>None</option>
                        <option value='cuisineType'>Cuisine</option>
                        <option value='rating'>Rating</option>
                        <option value='both'>Both</option>

                    </Field>

                    <span>Cuisine Type: </span>
                    <Field as='select' name='cuisineType'>
                        <option value=''>Please Select One...</option>
                        <option value='American'>American</option>
                        <option value='Asian'>Asian</option>
                        <option value='Barbeque'>Barbeque</option>
                        <option value='Fast Food'>Fast Food</option>
                        <option value='Indian'>Indian</option>
                        <option value='Italian'>Italian</option>
                        <option value='Mediterranean'>Mediterranean</option>
                        <option value='Mexican'>Mexican</option>
                        <option value='Pizza'>Pizza</option>
                    </Field>

                    <span> Overall Rating: </span>
                    <Field name="rating" as="select" placeholder="Rating">
                        <option value="1">1 - Star</option>
                        <option value="2">2 - Star</option>
                        <option value="3">3 - Star</option>
                        <option value="4">4 - Star</option>
                        <option value="5">5 - Star</option>
                    </Field>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        
                            <button type='submit'>
                                Filter
                            </button>
                        
                    </div>

                </Form>

            </Formik>
            </div>
        </StyledForm>
    )
}