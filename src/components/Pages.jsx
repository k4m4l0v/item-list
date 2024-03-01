import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Pagination } from 'react-bootstrap';

export const Pages = observer(({fetch = () => {}}) => {
    const {products} = useContext(Context);
    const allProdutsList = 1000;
    const pagesCount = Math.ceil(allProdutsList / products.limit);
    const pages = [];

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }

    return (
        <Pagination className='mt-3 d-flex flex-wrap' >
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={products.page === page}
                    onClick={() => {
                        products.setPage(page);
                        products.resetProducts([])
                        fetch();
                    }}
                >
                    {page}
                </Pagination.Item>    
            )}
        </Pagination>
    )
})
