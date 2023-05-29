import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import { Provider } from "react-redux";
import Navbar from './components/Navbar'
import store from './Store/store';



const App = () => {
  return (
    <>

      <Provider store={store}>

        <BrowserRouter>

          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}>  </Route>
            <Route path="/Cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App