import React, { useEffect, useState } from 'react'
import Item from '../components/Item'

import { add } from '../Store/Cartslice'
import { calproductP } from '../Store/Productslice'
import { useDispatch, useSelector } from 'react-redux'
import Spinnner from '../components/Spinnner'


const Home = () => {


  const [products, setproducts] = useState([]) 
  const [loading ,setloading] =useState(false)
  const [filterdata ,setfilterdata] =useState([])

  const fetchproduct = async () => {

    setloading( true)
    const fetchdata = await fetch('https://fakestoreapi.com/products')
    const resp = await fetchdata.json()
    setloading(false )
    setproducts(resp)
    setfilterdata(resp)
    
  }

  useEffect(() => {
    fetchproduct()
  }, [])

  const filterFun = (category)=>{
   if(category!=="All"){
    const newArray = products.filter((item)=>{  
        return item.category===category

        
    })
    setfilterdata(newArray)
  
   }
   else{
    setfilterdata(products)
   }
  } 


  return (
    <>

      <div className="container-fluid  my-2">

        <h1 className='text-center'>Products </h1>

        <div>
        <div className="d-flex gap-2 justify-content-center py-5">

        <button className="btn btn-dark rounded-pill px-3" type="button" onClick={()=>{ filterFun("All")
        }}>All</button>
       <button className="btn btn-dark rounded-pill px-3" type="button" onClick={()=>{ filterFun("men's clothing")
        }} >men's clothing</button>
       <button className="btn btn-dark rounded-pill px-3" type="button" onClick={()=>{ filterFun("women's clothing")
        }} >women's clothing</button>
       <button className="btn btn-dark rounded-pill px-3" type="button" onClick={()=>{ filterFun("jewelery")
        }} >jewelery</button>
       <button className="btn btn-dark rounded-pill px-3" type="button" onClick={()=>{ filterFun("electronics")
        }}>electronics</button>
       

        </div>
        </div>


        {loading && <Spinnner></Spinnner>} 
        <div className="container"  >
        <div className="row overflow-hideen gap-2  ">
          {filterdata.map((product) => {
            return (
              <>
              <div className='col-lg-3 mx-4 my-2'>
                <Item  key={product.id} product={product} prating ={product.rating.rate} previews={product.rating.count} img ={product.image} ptitle={product.title} pprice={product.price} ></Item> 
              </div>
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