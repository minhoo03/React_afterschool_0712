
import React from 'react';
import { useParams, useLocation } from 'react-router';

const A03ParamComponent = (props) => {

    const data = [
        { "id": 1, "name": "Apples", "category": "Fruit", "price": 1.20, "expiry": 10 },
        { "id": 2, "name": "Bananas", "category": "Fruit", "price": 2.42, "expiry": 7 },
        { "id": 3, "name": "Pears", "category": "Fruit", "price": 2.02, "expiry": 6 },
        { "id": 4, "name": "Tuna", "category": "Fish", "price": 20.45, "expiry": 3 },
        { "id": 5, "name": "Salmon", "category": "Fish", "price": 17.93, "expiry": 2 },
        { "id": 6, "name": "Trout", "category": "Fish", "price": 12.93, "expiry": 4 }
    ];

    // match => path에 넘어오는 값 처리
    // location => 주소에 넘어오는 값 처리 {?name=Minu&age=19}

    // const {match, location} = props
    // const id = match.params.num
    // const product = data[id -1]

    const params = useParams()
    const location = useLocation()
    const product = data[params.num -1]

    return (
        <div>
            <h5>Parameter Component</h5>
            <div>This is Parameter Component</div>
            <br />

            <div>
                Product ID: {product.id}<br />
                Product Name: {product.name}
            </div>

            <br />

            <div>
                Id: {params.num} <br/>
                Name: {params.name} <br/>
                Location: {location.pathname}
            </div>
            <br />

        </div>
    )
}
export default A03ParamComponent;