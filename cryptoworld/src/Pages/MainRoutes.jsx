import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoinPage from './CoinPage'
import HomePage from './HomePage'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={HomePage}/>
        <Route path='/coin/:id' element={CoinPage}/>
          

      


    </Routes>
      
    </>
  )
}

export default MainRoutes
