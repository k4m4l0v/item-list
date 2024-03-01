import React from 'react';
import { observer } from 'mobx-react-lite';
import { Col, Card } from 'react-bootstrap';

export const DeviceItem = observer(({product}) => {
    return (
        <Col md={3} className='mt-3'>
            <Card 
                className='card' 
            >
                <ul className='productsList'>
                    <li>
                        <b>Бренд:</b> {product.brand ?
                            product.brand 
                            :
                            'Без бренда'
                        }
                    </li>
                    <li><b>Название:</b> {product.product}</li>
                    <li><b>Цена:</b> {product.price}</li>
                    <li><b>ID:</b> {product.id}</li>
                </ul>
            </Card>
        </Col>
    )
})
