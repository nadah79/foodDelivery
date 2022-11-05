import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { auth } from "../firebase";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch  } from 'react-redux'

const Login = () => {

  // const dispatch=useDispatch()
const initial ={email:'',password:''}
const[inp,setinp]=useState(initial)
const[show , setshow]=useState(false)
const[email , setemail]=useState('')



useEffect(()=>{
  auth.onAuthStateChanged((userr)=>{
    
    userr?setshow(true):setshow(false)
    setemail(userr.email)

   
 
      })
},[]) 
       

const x= useNavigate()
const[err,seterr]=useState('')
const hadelerlogin=(e)=>{

setinp({...inp,[e.target.name]:e.target.value})

}

  const hadelersub= async (e)=>{
   
      
e.preventDefault()
try {
await auth.signInWithEmailAndPassword(inp.email,inp.password).then((res)=>{console.log(res.user.email)})


x('/')


}
catch (error){
  error.message.includes('There is no user record')? seterr('this account not excited please register'):seterr('incorrect password or email')

}





  }
  









  const hadelerlog=()=>{
    auth.signOut().then(()=>console.log("login out"))
   
  
window.location.reload(true)
 
    x('/login')

    }
  
  return (
   
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
           {!show?
              <div>  <form className="form mb-5" onSubmit={hadelersub}>
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(event)=>{hadelerlogin(event)}}
               
                name='email'
                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  placeholder="Password"
                  required
               onChange={(event)=>{hadelerlogin(event)}}
               name='password'

                />
              </div>
             
              <button  type="submit" className="addTOCart__btn">
                Login
              </button>
              <p>{err}</p>
         
            </form>
                 <Link to="/register">
                 Don't have an account? Create an account
               </Link>
               </div>
            
               :<div><p>welcom {email} </p>
            
            
            <button onClick={()=>hadelerlog()}>log out</button></div>
           
     
           }
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default Login