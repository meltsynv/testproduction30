import React from 'react'

const Product = (props) => {
    return (
        <div className='product-head'>
            <img src={props.bgImg} />
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div >
    );
}

export default Product;