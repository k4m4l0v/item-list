import  React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { DeviceItem } from './DeviceItem';

export const DeviceList = observer(() => {
    const {products} = useContext(Context);

    const condition = (item) => {
        return item.id !== '' 
    }

    const brandCheck = (item) => {
        if (products.brand === '') {
            return true;
        } else if (item.brand === products.brand) {
            return true;
        }
    }

    const nameCheck = (item) => {
        if (products.name === '') {
            return true;
        } else if (item.product === products.name) {
            return true;
        }
    }

    const priceCheck = (item) => {
        if (item.price >= products.minPrice && item.price <= products.maxPrice) {
            return true;
        } 
    }

    return (
        <div className='d-flex flex-lg-wrap'>
            {products.products.map((product) =>
                condition(product) && brandCheck(product) && nameCheck(product) && priceCheck(product) ? <DeviceItem key={product.id} product={product} /> : false
            )}
        </div>
    )
})
