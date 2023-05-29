import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import { remove } from '../Store/Cartslice'
import { calproductP, calremoveP } from '../Store/Productslice'


const removenotify = () => toast('Item Remove  Sucessfully' );

const CartCard = (props) => {
    let { image, title, price, product } = props

    const dispach = useDispatch()
    const Product = useSelector((state) => state.cart)

    const [QuantityValue, setQuantityValue] = useState(1);


    const onremove = (product) => {
        dispach(remove(product.id))
        dispach(calremoveP(product.price))

    }

    return (
        <>
            <div className="d-flex flex-row py-3 px-3">

                <div className="img">
                    <img src={image} height="120px" width="150px" alt="...." srcSet="" />
                </div>
                <div className="porduct-info mx-2 px-2">
                    <h1 className='productname h4'>{title}</h1>
                    <h5 className="price h5">$ {price}</h5>
                    <div className="item-count">
                        <button className='border-none  btn-outline-none' onClick={() => {
                            if (QuantityValue !== 5) {
                                setQuantityValue((prev) => prev + 1);
                                dispach(calproductP(product.price))
                            }
                        }} style={{ background: "white", border: "none" }}>

                            <span className='mx-2' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </span>
                        </button>
                        <span>
                            <input type="text" value={QuantityValue} readOnly style={{ width: "25px", border: "2px white" }} />
                        </span>
                        <button id='btn1' onClick={() => {
                            if (QuantityValue > 1) {
                                setQuantityValue((prev) => prev - 1);
                                dispach(calremoveP(price))
                            }
                        }} style={{ background: "white", border: "none" }} >
                            <span className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <button id='btn1' type="button" onClick={() => {onremove(product) ,removenotify()}} className="btn btn-danger my-2 ">Remove
                        <span className='mx-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg>
                        </span>
                        <Toaster
                            position="top-right"
                            reverseOrder={false}
                        />
                    </button>

                </div>
                <hr />
            </div>

        </>
    )
}

export default CartCard