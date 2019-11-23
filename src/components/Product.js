import React from 'react'

const Product = (props) => {
    return (
        <div className='product-head'>
            <img src={props.bgImg} />
            <p>{props.text}</p>
        </div >
    );
}

export default Product;