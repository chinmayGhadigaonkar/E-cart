import React from 'react'
import { useSelector } from 'react-redux'

import CartCard from '../components/CartCard'
import EmptyCart from '../components/EmptyCart'
import OrderDetails from '../components/OrderDetails'



const Cart = () => {
    const Product = useSelector((state) => state.cart)
    if(Product.length==0){
      return(
        <>
        <EmptyCart></EmptyCart>
        </>
      )
    }
  

  return (
    <>
      <h2 className='text-center my-2 '>Your Cart</h2>
      
      <div className="container-md" >
        <div className="row">
          <div className="col-md-7 col-sm-12">

        <div className="card my-2 ">
          <div className="h4  text-start px-2 my-3">Item</div>
          <hr />
          {Product.map((product) => {

            return (
              <>            
              <CartCard key ={product.id} image ={product.image} price ={product.price} product ={product} title={product.title}></CartCard>
              </>
            )})}
        </div>
          </div>
        <div className='col-md-3 col-sm-12'>

       <OrderDetails></OrderDetails>
        </div>
        </div>

      </div>
    </>
  )
}

export default Cart