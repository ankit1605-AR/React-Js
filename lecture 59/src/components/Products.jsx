import React from 'react'
import Product from './Product';

function Products({ products = [], children }) {
    console.log(children);
    return (
        <div style={{ "backgroundColor": "blue", "color": "yellow" }}>
            {products.map(({ title, price }, i) => {
                return (
                    <Product key={i} title={title} price={price} />
                );
            })}
            {children}
        </div>
    )
}

export default Products;