import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Form } from 'react-bootstrap';
import { Context } from '..';

export const Filter = observer(() => {
    const {products} = useContext(Context);

    return (
        <div className='d-flex flex-lg-wrap gap-2'>
            <Form.Label htmlFor="name">Название</Form.Label>
            <Form.Control
                type="text"
                id="name"
                value={products.name}
                onChange={(e) => products.setName(e.target.value)}
            />

            <Form.Label htmlFor="brand">Бренд</Form.Label>
            <Form.Control
                type="text"
                id="brand"
                value={products.brand}
                onChange={(e) => products.setBrand(e.target.value)}
            />

            <Form.Label htmlFor="MinPrice">Минимальная цена</Form.Label>
            <Form.Control
                type="number"
                id="MinPrice"
                value={products.minPrice}
                onChange={(e) => products.setMinPrice(e.target.value)}
            />

            <Form.Label htmlFor="MaxPrice">Максимальная цена</Form.Label>
            <Form.Control
                type="number"
                id="MaxPrice"
                value={products.maxPrice}
                onChange={(e) => products.setMaxPrice(e.target.value)}
            />
        </div>
    )
})
