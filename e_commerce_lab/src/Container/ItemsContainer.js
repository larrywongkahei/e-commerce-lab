import React from 'react';
import ItemList from '../Components/ItemList';


const ItemContainer = () => {

const items = [
    {
        "Name": 'Espresso',
        "Price": 5
    },
    {
        "Name": 'Americano',
        "Price": 7
    },
    {
        "Name": 'Cappuccino',
        "Price": 7
    },
    {
        "Name": 'Mocha',
        "Price": 8
    }
]

    return (
        <>
            <ItemList />
        </>

)


}

