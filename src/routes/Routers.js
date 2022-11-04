import { useNavigate } from "react-router-dom";

import React from 'react';
import { Routes,Route,Navigate} from 'react-router-dom' ;
import Home from '../pages/Home';
import AllFoods from '../pages/AllFoods';
import FoodDetails from '../pages/FoodDetails';
 import Store from '../store/Store';
import Admain from '../pages/Admain';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import { useEffect, useState } from 'react'
import { auth } from "../firebase";

const Routers = () => {
  const Navigat= useNavigate()

  const [a,seta]=useState(false)

  const[show , setshow]=useState(false)

useEffect(()=>{
  auth.onAuthStateChanged((userr)=>{
    
    userr?seta(true):seta(false)
    console.log(show)
   userr.email==='metaea@gmail.com'?setshow(true):setshow(false)

   
 
      })
},[]) 


  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/foods' element={<AllFoods/>}/>
    <Route path='/foods/:id' element={<FoodDetails/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    {/* <Route path='*' element={<Cart/>}/> */}




    {show? <Route path='/admain' element={<Admain/>}/>:''}
   


  {a?  <Route path='/Checkout' element={<Checkout/>}/>:<Route path='/Checkout' element={<Login/>}/>}

  </Routes> 
}
export default Routers