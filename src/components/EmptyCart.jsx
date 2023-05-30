import React from 'react'
import { Link } from 'react-router-dom'
import nocart from "../Img/nocart.gif"
const EmptyCart = () => {
    return (
        <>
            <div>
                <h1 className='text-center '>Your Cart</h1>
                {/* <hr /> */}
                <div className="container my-3 d-flex flex-row justify-content-center" >
                    <div className="img">
                        <h2 className='text-center'>Your Cart is Empty</h2>
                        <img src={nocart} height="500px" className='img-fluid' width="500px" style={{}} alt="...." srcSet="" />

                    </div>
                </div>
                <div className='container d-flex flex-row justify-content-center'>

                        <Link to="/" className='text-decoration-none text-black ' >
                    <button className='btn btn-outline-dark bg-grey m-auto' > Go To Home page
                     </button>
                        </Link>
                </div>
            </div>
        </>
    )
}

export default EmptyCart