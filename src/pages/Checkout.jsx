
import React from 'react';
import { Container,Row, Col } from 'reactstrap';
// import { useSelector } from 'react-redux';
import CommonSection from '../component/common-section/common-section'
import Helmet from '../component/Helmet'
import '../Styles/checkout.css';
import { useState } from 'react';




const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  


  const shippingInfo = [];
  
   const shippingCost = 15;

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };
    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);

  };
  
  return(
   <Helmet title ="Checkout">
    <CommonSection title= "Checkout"/>
    <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="shipping">Shipping Address</h6>
    <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input className='input'
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                     
                  />
                </div>

                <div className="form__group">
                  <input className='input'
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                   
                  />
                </div>
                <div className="form__group">
                  <input className='input'
                    type="number"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}

                    
                   
                  />
                </div>
                <div className="form__group">
                  <input className='input'
                    type="text"
                    placeholder="Country"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                   
                  />
                </div>
                <div className="form__group">
                  <input className='input'
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}

                  />
                </div>
                <div className="form__group">
                  <input  className='input'
                    type="number"
                    placeholder="Postal code"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}

                   
                  />
                </div>
                <button type="submit" className='submit' >
                  Payment
                </button>
              </form>
              </Col>

              <Col lg="4" md="6">
                <div className="checkout__bill">
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Subtotal: <span></span>
                  </h6>
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Shipping: <span>${shippingCost}</span>
                  </h6>
                  <div className="checkout__total">
                    <h5 className="d-flex align-items-center justify-content-between">
                      Total: <span></span>
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
    );
  
}

export default Checkout