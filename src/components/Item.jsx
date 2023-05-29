import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

// import PropTypes from 'prop-types'
import { add } from '../Store/Cartslice'
import { calproductP } from '../Store/Productslice'
import { useDispatch } from 'react-redux'


const notify = () => toast('Item added Sucessfully');


const Item = (props) => {
  let { img, ptitle, pprice, prating ,previews ,product} = props
   const dipatch = useDispatch()

  const handleAdd=(product)=>{
    dipatch(add(product))
    dipatch(calproductP(product.price))
   
   
     }


  return (
    <>
    {/* <div className="mx-4  col-md-3 "    > */}

      <div className="card  object-fit-cover border rounded   " style={{ width: "20rem", height: "400px" }}>
        <img src={img} className="card-img-top text-center my-2 " alt="..." style={{ width: "246px", height: "175px"  ,margin:"0px auto" }} />
        <div className="card-body">
          <h5 className="card-title">{ptitle.length>5?ptitle.slice(0,35) +" ..." : ptitle}</h5>
          <h5 className="card-title">$ {pprice}</h5>

          <div className='d-flex '>
          <button type="button" className={prating < 2 ? "btn btn-warning  btn-sm" : "btn btn-success btn-sm"}> {prating}
           <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mx-2 " viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            </span> 
          </button>
          <h6 className="fw-light mx-3 " style={{width:"150px"}}>rating by {previews} people</h6>

          </div>
          <button onClick={()=>{handleAdd(product),
          notify()
          
          }}  type="button" className="btn btn-danger my-3">

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20   " fill="currentColor" className="bi bi-cart4 mx-1" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
            </svg> Add To Cart
          </button>
          <Toaster
    position="top-right"
    reverseOrder={false}
  />
        </div>

    {/* </div> */}
      </div>
    </>
  )
}

export default Item