import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

const Product = ({imageUrl,name,price,description,id}) => {
    return (
        <div className='product'>
            <img src={ imageUrl} alt='product name'/>

            <div className='product__info'>
                <p className='info__name'>{name}</p>
               
                <p className='info__description'>
                    {description}
                </p>
               
                <p className='info__price'>${price}</p>

                <Link to = {`/product/${id}`} className='info__button'>
                    View
                </Link>

            </div>
        </div>
    )
}

export default Product  
