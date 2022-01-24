import React from 'react'

import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './HomeScreen.css'

//components
import Product from '../Components/Product'

//actions
import {getProducts as listProducts} from '../redux/actions/productActions'


const HomeScreen = () => {
   //---------------------------------------------------------
   const dispatch = useDispatch();

    //a hook to accress redux store state 
   const getProducts = useSelector((state) => state.getProducts);

   const {products,loading,error} = getProducts;

   //this is a hook to get the products from the database
   useEffect(() =>{
      dispatch(listProducts())
   }, [dispatch])
   
   //---------------------------------------------------------
   
   
    return (
        <div className='homescreen'>
            <h2 className='homescreen__title'>Latest Products</h2>
            
            
            <div className='homescreen__products'>
                {loading ? <h2>Loading ...</h2> : error ? <h2>{error}</h2> : products.map(product => (
                    <Product 
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    id = {product.id}
                    />
                ))}

            </div>

        </div>
    )
}

export default HomeScreen
