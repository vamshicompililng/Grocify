import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import Seafood from './components/Seafood/Seafood'
import AllProducts from './components/AllProducts/AllProducts'
const App = () => {

  const router= createBrowserRouter([
    {
    path:'/',
    element:<Home/>,
   },
   {
    path:'/Fruits',
    element:<Fruits/>,
   },
   {
    path:'/Dairy',
    element:<Dairy/>,
   },
   {
    path:'/Seafood',
    element:<Seafood/>,
   },
   {
    path:'/AllProducts',
    element:<AllProducts/>,
   },
   
   
])
 
return <RouterProvider router={router}/>
}

export default App

