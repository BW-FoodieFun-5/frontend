import React from 'react';
import { Formik, Form, Field } from 'formik'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { StyledForm } from '../../styles/formStyles';
import { MenuContext } from '../../contexts/MenuContext'
import { Spacing } from '../../styles/spacing'
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
            <Spacing>
            <Formik
                initialValues={{ ...target[0] }}
                onSubmit={(values) => {
                    console.log(values)

                    axiosWithAuth()
                        .put(`https://foodie-fun-chards.herokuapp.com/api/menu/${id}`, { ...values })
                        .then(response => {
                            console.log(response);
                            history.push(`/menureview/${id}`)
                        })
                        .catch(error => console.log(error))

                }}
            >

                <Form>
                    <h1 style={{color: '#C45228'}}>Edit Item</h1>
                    <span>Item Name: </span>
                    <Field type='text' name='itemName'></Field>

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
                        Submit Edit
                    </button>
                </Form>
            </Formik>
            </Spacing>
        </StyledForm>
    )
}