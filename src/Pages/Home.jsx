import React, { useEffect, useState } from 'react'
import Item from '../components/Item'

import { add } from '../Store/Cartslice'
import { calproductP } from '../Store/Productslice'
import { useDispatch, useSelector } from 'react-redux'
import Spinnner from '../components/Spinnner'


const Home = () => {


  const [products, setproducts] = useState([]) 
  const [loading ,setloading] =useState(false)

  const fetchproduct = async () => {

    setloading( true)
    const fetchdata = await fetch('https://fakestoreapi.com/products')
    const resp = await fetchdata.json()
    setloading(false )
    setproducts(resp)
  }

  useEffect(() => {
    fetchproduct()
  }, [])


  return (
    <>

      <div className="container my-2">

        <h1 className='text-center'>Products </h1>
        {loading && <Spinnner></Spinnner>} 
        <div className="d-flex justify-content-center " >
          
          
        <div className="row overflow-hideen gap-5 ">
          {products.map((product) => {
            return (
              <>
                <Item  key={product.id} product={product} prating ={product.rating.rate} previews={product.rating.count} img ={product.image} ptitle={product.title} pprice={product.price} ></Item> 
              </>
            )
            
          })}
        </div>
          </div>
        
      </div>





    </>




  )
}

export default Home