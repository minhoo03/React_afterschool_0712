
import React from 'react';
import { useLocation } from 'react-router';
import qs from 'query-string'
import { produceWithPatches } from 'immer';

const A04ArgsComponent = () => {

    const data = [
        { "id": 1, "name": "Apples", "category": "Fruit", "price": 1.20, "expiry": 10 },
        { "id": 2, "name": "Bananas", "category": "Fruit", "price": 2.42, "expiry": 7 },
        { "id": 3, "name": "Pears", "category": "Fruit", "price": 2.02, "expiry": 6 },
        { "id": 4, "name": "Tuna", "category": "Fish", "price": 20.45, "expiry": 3 },
        { "id": 5, "name": "Salmon", "category": "Fish", "price": 17.93, "expiry": 2 },
        { "id": 6, "name": "Trout", "category": "Fish", "price": 12.93, "expiry": 4 }
    ];

    const location = useLocation()
    const query = qs.parse(location.search)

    const product = data[query.no -1]

    return (
        <div>
            <h5>Argument Component</h5>
            <div>This is Argument Component</div>
            <br />

            <div>
                Product ID: {product.id} <br />
                Product Name: {product.name} <br/>
            </div>
            <br />

            <div>
                pathname: {location.pathname} <br/>
                search: {location.search} <br/>
                hash: {location.hash} 
            </div>
            <br />

            <div>
                Name: {query.name} <br/>
                Age: {query.age} <br/>
                Address: {query.address}
            </div>
            <br />

        </div>
    )
}
export default A04ArgsComponent;