import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {

  const item = useSelector((state) => state.cart)
  return (
    <>


      <div className="container-fluid" >
        <div className="row">
          <div className="cols-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">E-Cart </a>
                <button className="navbar-toggler" style={{ marginRight: "5px !important" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">

                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item ">
                      <Link className='nav-link'> About Us</Link>
                    </li>

                  </ul>
                  

                  <ul className="nav navbar-nav ms-auto  ">

                  <button type="button" className="btn btn-dark   " style={{   height: "50px", width: "170px" }}>
                    <Link to="/cart" className='text-white text-decoration-none'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20   " fill="currentColor" className="bi bi-cart4 mx-1" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                      </svg>
                      Your Cart
                      <span className="badge text-bold "  style={{fontSize:".9rem"}}>
                      ({item.length}) 
                      </span>
                    </Link>
                  </button>
</ul>
                  

                </div>
              </div>

            </nav>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar