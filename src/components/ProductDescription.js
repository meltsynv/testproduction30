import React from 'react'

const ProductDescription = (props) => {
    return (
        <div className='product-body'>
            <h1>{props.productD_title}</h1>
            <p>{props.productD_text}</p>
        </div>
    );
}

export default ProductDescription;