import React from 'react';
import { Formik, Form, Field } from 'formik';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';

import { MenuContext } from '../../contexts/MenuContext';

import { StyledForm } from '../../styles/formStyles';
import { ReviewBox } from '../../styles/reviewBox';

export default function AddNewDish() {

    let { id } = useParams();
    let history = useHistory();

    const { menu, setMenu } = React.useContext(MenuContext);
    const target = menu.filter(i => i.id == id)

    React.useEffect(() => {
        axiosWithAuth()
            .get('https://foodie-fun-chards.herokuapp.com/api/menu')
            .then(res => {
                console.log('menu', res.data)
                setMenu(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    function handleReturn() {
        history.push(`/restaurant/${target[0].restaurants_id}`)
    }

    return (
        <StyledForm>
            <Formik
                initialValues={{ itemName: '', cuisineType: '', price: '', description: '', image: '', itemRating: '', itemReview: '' }}
                onSubmit={(values) => {
                    console.log(values)
                    axiosWithAuth()
                        .post('https://foodie-fun-chards.herokuapp.com/api/menu', { ...values, restaurants_id: id })
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
                    <option value='Cheap'>$ - Cheap</option>
                    <option value='Average'>$$ - Average</option>
                    <option value='Expensive'>$$$ - Expensive</option>
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
                <button onClick={handleReturn}>
                    Cancel
                </button>

            </Form>

            </Formik>
        </StyledForm>
    )
}
