import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DeviceList } from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Pages } from '../components/Pages';
import { fetchIds, fetchProducts } from '../http/productApi';
import { Context } from '..';
import { Filter } from '../components/Filter';

export const Shop = observer(() => {
    const {products} = useContext(Context);

    const fetch = () => {
        fetchIds(products.limit ,(5 * products.page) - 5)
        .then(response => { 
            response.data.result.map(id =>
                fetchProducts(id)
                .then(response => {
                    products.setProducts(response.data.result[0]);
                }
                )
                .catch((e) => {
                    console.log(String(e));
                    fetchProducts(id)
                    .then(response => {
                        products.setProducts(response.data.result[0]);
                    }
                    )
                })
            )
        })
        .catch((e) => {
            console.log(String(e));
            products.setProducts([]);
            fetch();
        })
    }
    
    useEffect(() => {
        fetch();
    }, []);

    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <Filter />
                </Col>
                <Col md={9}>
                    <DeviceList />
                    <Pages fetch={fetch} />
                </Col>
            </Row>
        </Container>
    );
})
