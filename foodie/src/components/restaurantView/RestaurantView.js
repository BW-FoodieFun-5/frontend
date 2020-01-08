import React, { useState } from 'react'
import { dummydata } from '../DummyData/dummyData'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { Link } from 'react-router-dom'
import { StyledGrid } from '../../styles/gridStyles'

export default function RestaurantView(props) {
    console.log(props)
    const [dataState, changeData] = useState(dummydata)
    return (
        <StyledGrid >
            {dataState.map((data) => (<RestCard key={data.id} data={data} {...props} />))}
        </StyledGrid>
    )
}

function RestCard(props) {
    return (
        <Link to={`/restaurant/${props.data.id}`}>

            <h1>{props.data.name}</h1>
            <h2>{props.data.cuisineType}</h2>
            <h3>{props.data.ratings} Stars</h3>

        </Link>
    )
}