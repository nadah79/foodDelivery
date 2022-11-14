import React from "react";
import { useSelector, useDispatch
 } from "react-redux";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import "../Styles/cart.css";
import { useState,useEffect } from "react";
import {fire} from '../firebase'

const Cart = () => {
  const hamada = useSelector((state) => state.AddTocart);
  
  const totalQuantity = useSelector((state) => state.totalQuantity);
  const totalAmount = useSelector((state) => state.tot);
  const dispatch = useDispatch();
  const handeldel = (i, el) => {
    const dele = {
      type: "del",
      payload: {  
        index: i,
        element: el,
      },
    };
    dispatch(dele);
  };
const [orders , setorders]=useState([])
const [count, setCount] = useState([]);
const [ord, setord] = useState([]);
const [val, setVal] = useState([]);

var qool;


// const handelPlus = (e,el,i) =>{
   
//         hamada.map((item)=>
//         el.id=== item.id ? {...item, quantity: el.quantity= e.target.value* el.price} : item
//         ,setCount(el.quantity)
//         )
//         const qont = {
//           type: "qont",
//           payload: count,
//         };
//         dispatch(qont);        
//       }

const handelplus=(e,el)=>{
  
  setVal(e.target.previousSibling.stepUp());
  console.log(e.target.previousSibling.value); 
   hamada.map((item)=>
  el.id=== item.id ? {...item, quantity: el.quantity=  e.target.previousSibling.value * el.price} : item
  ,setCount(el.quantity)
  )
  const qont = {
    type: "qont",
    payload: count,
  };
  dispatch(qont);        
}
const handelminus=(e,el)=>{
  
  setVal(e.target.nextSibling.stepDown());
  console.log(e.target.previousSibling.value); 
   hamada.map((item)=>
  el.id=== item.id ? {...item, quantity: el.quantity=  e.target.previousSibling.value * el.price} : item
  ,setCount(el.quantity)
  )
  const qont = {
    type: "qont",
    payload: count,
  };
  dispatch(qont);        
}
  
       
      
      


   



  return (
    <div>
      {/* <h1 style={{ color: "red" }}> counter: {hamada.length}</h1> */}
      <h1> total:{totalAmount}</h1>
      <div className="style-3">Cart</div>
      <div className="style-4"> {hamada.length}</div>
      <div className="style-0">
        {hamada.map((el, i) => (
          <div>
            {/* <h1>{el.price}</h1>
          <img src={el.img} alt="" />
          <button onClick={() => handeldel(i, el)}>delete</button> */}

            <div className="style-0">
              <div className="style-1">
                <div className="style-2">
                  {/* <div class="style-3">Cart</div>
            <div class="style-4"> {hamada.length}</div> */}
                </div>
                <div className="style-5">Qty</div>
                <div className="style-6">Total</div>
                <div className="style-6">
                  <button onClick={() => handeldel(i, el)}>delete</button>
                </div>
              </div>

              <div className="style-7">
                <div
                  className="style-8"
                  data-bedrock-inline="justify:start align:start"
                >
                  <div className="style-9">
                    <div className="style-10">
                      <div className="style-11">
                        <img
                          alt=""
                          src={el.img}
                          aria-hidden="true"
                          className="style-12"
                        />
                      </div>
                
                      <noscript className="style-14"></noscript>
                    </div>
                  </div>
                  <div class="style-15">
                    <div class="style-16">{el.title}</div>
                    <div class="style-16">{el.quantity}</div>
                    <div class="style-17" font-size="16px">
                      {el.description}
                    </div>
                  </div>
                </div>
                <div class="style-18">
                  <div class="style-19">
                  
                    <h1>{qool}</h1>
                    <span class="style-23">{qool}</span>
                    <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" 
            crossOrigin="anonymous"/>

<div class="number-input">
  <button onClick={(e)=>{handelminus(e,el)}} class="minus"></button>
  <input class=" inpot" name="quantity"  type="number" value={val} />
  <button onClick={(e)=>{handelplus(e,el)}} class="plus"></button>
</div>
                    {/* <input type="number" class="inpot" 
                            min="1" max="50" 
                    onChange={(e) => handelPlus(e,el,i)}/> */}
         
                    {/* <button class="style-24">
                      <svg
                        className="style-25"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="AddCircleOutlineIcon"
                      >
                        <path
                          d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                          className="style-26"
                        ></path>
                      </svg>
                    </button> */}
                  </div>
                </div>
                <div class="style-27">
                  <div class="style-28">{el.price} EGP</div>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="addTOCart__btn">
          <Link to="/checkout" onClick={()=>finito()}>Proceed to checkout</Link>
            </button> */}
             <button className="addTOCart__btn">
               <Link to="/checkout">Proceed to checkout</Link>
           </button>
                     
    </div>
  );
};

//  <h1 style={{color:'#ff5f00'}}> Counter: {hamada.length}</h1>
// <h1> total:{totalAmount}</h1>
// {hamada.map((el,i) =>(
//   <div>
//     <h1>
//       {el.price}

//     </h1>
//    <img src={el.img} alt="" />
//    <button onClick={()=>handeldel(i,el)}>delete</button>
//   </div>
// ))}
// <button className="addTOCart__btn">
//               <Link to="/checkout">Proceed to checkout</Link>
//             </busstton>
// </div>

export default Cart;