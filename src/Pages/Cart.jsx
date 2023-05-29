import React from 'react'
import { useSelector } from 'react-redux'
import OrderDetails from '../components/orderDetails'
import CartCard from '../components/CartCard'
import EmptyCart from '../components/EmptyCart'



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
      <h2 className='text-center '>Your Cart</h2>
      <hr />
      <div className="container d-flex flex-wrap" >

        <div className="card ">
          <div className="h4  text-start px-2 my-3">Item</div>
          <hr />
          {Product.map((product) => {

            return (
              <>            
              <CartCard key ={product.id} image ={product.image} price ={product.price} product ={product} title={product.title}></CartCard>
              </>
            )})}
        </div>
        <OrderDetails></OrderDetails>
      </div>
    </>
  )
}

export default Cart