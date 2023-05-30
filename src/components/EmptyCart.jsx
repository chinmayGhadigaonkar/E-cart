import React from 'react'
import nocart from "../Img/nocart.gif"
const EmptyCart = () => {
    return (
        <>
            <div>
                <h2 className='text-center '>Your Cart</h2>
                <hr />
                <div className="container d-flex justify-content-center" >
                    <div className="img">
                        <h1 className='text-center'>Your Cart is Empty</h1>
                        <img src={nocart} height="500px" className='img' width="500px" style={{}} alt="...." srcSet="" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default EmptyCart