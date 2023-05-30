import React from 'react'
import currancyFormater from "../Utils/currancyFormater"

import { useSelector } from 'react-redux'


const OrderDetails = () => {
  
 

  const count =useSelector(state=>state.product )
  const item = useSelector((state)=>state.cart)

    
  return (
    
    <>
    <div className="card mx-2 my-2  " style={{ height: "320px", width: "350px" }}>
    <div className="h4  text-start px-2 my-3">Order Summary</div>
    <hr />
    <table  >
      <thead>
      
      <tr>
        <th colSpan="2" className="px-3 py-1" >Product ({item.length}) </th>
        <td>{currancyFormater.format(count-44)}</td>
      </tr>
      </thead>
      <tbody>

      <tr>
        <th colSpan="2" className="px-3 py-1" >Delivary Cost</th>
        <td>$22</td>
      </tr>
      <tr>
        <th colSpan="2" className="px-3 py-1" >Tax Cost</th>
        <td>$22</td>

      </tr>
      <tr>
        <td colSpan="3">
          <hr className="border border-dark border-1 opacity-75" />
        </td>
      </tr>

      <tr>
        <th colSpan="2" className="px-3  " ><b>Total Amount</b></th>
        <td><b>$ {currancyFormater.format(count)}</b></td>

      </tr>
      </tbody>

    </table>
    <button className='btn btn-dark my-2 mx-2'>Go To CheckOut</button>

  </div>
  </>
  )
}

export default OrderDetails