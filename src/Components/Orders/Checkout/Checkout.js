import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Button, Modal, ModalBody } from 'reactstrap'
import Spinner from '../../Spinner/Spinner'
import { resetIngredients } from '../../../redux/actionCreators'
import './Checkout.css'
import { Formik } from 'formik'


const mapStateToProps = state => {
  return {
      ingredients: state.ingredients,
      totalPrice: state.totalPrice,
      perchasable: state.perchasable,
      token: state.token,
      userId: state.userId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetIngredients: () => dispatch(resetIngredients()),
  }
}

export class Checkout extends Component {
  state = {
    values: {
        deliveryAddress: '',
        phone: '',
        paymentType: 'Cash On Delivery'
    },
    checkout: false,
    isLoading: false,
    isModalOpen: false,
    modalMsg: '',
  }

 
  goBack = () => {
    this.setState({
      checkout: true
    })

  }
  inputChangerHandler= (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name] : e.target.value
      }
    })
  }
  submitHandler = (values) => {
    let token = this.props.token
    this.setState({isLoading: true});
    const order = {
      ingredients: this.props.ingredients,
      customer: values,
      price: this.props.totalPrice,
      userId: this.props.userId,
      ordertime: new Date(),
    }
    console.log(order);
    axios.post('https://burger-builder-e1aff-default-rtdb.firebaseio.com/orders.json?auth='+token, order)
    .then(response => {
      if(response.status === 200) {
        this.setState({
          isLoading: false,
          isModalOpen: true,
          modalMsg: "Order Placed Successfully!",
        })
        this.props.resetIngredients();
      }else {
        this.setState({
          isLoading: false,
          isModalOpen: true,
          modalMsg: "Something Went Wrong! Order Again!",
        })
      }
    })
    .catch(err=> {
      this.setState({
        isLoading: false,
        isModalOpen: true,
        modalMsg: "Something Went Wrong! Order Again!",
      })
    });
  }
                        

  render() {
          let order= parseInt(this.props.totalPrice) === 0? true: false;
          let form =(<div>
                      <h4 className='paymentBanner'>Payment: {this.props.totalPrice} BDT</h4>
                      <Formik
                        initialValues={{
                          deliveryAddress: "",
                          phone: "",
                          paymentType: "Cash On Delivery",
                      }}
                      validate={values => {
                        const errors = {};
                        if(!values.deliveryAddress) {
                            errors.deliveryAddress = 'Address Required'
                        }
                        if(!values.phone) {
                            errors.phone = 'Phone Number Required'
                        } else if(!/^(?:\+88|88)?(01[3-9]\d{8})$/i.test(values.phone)){
                            errors.phone = 'Phone Number is Invalid!'
                        }
                        return errors;
                      }}
                      onSubmit={(values) => {
                        this.submitHandler(values);
                      }}
                      >
                        {({values, errors, handleChange, handleBlur, handleSubmit}) => (
                          <form className='checkoutForm'
                                onSubmit={handleSubmit}>
                                  <input    
                                      name='deliveryAddress'
                                      id ='deliveryAddress'
                                      type='textarea' 
                                      value={values.deliveryAddress} 
                                      className='form-control'
                                      placeholder='Your Address'
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                  />
                                  <p className='errorMsg'>{errors.deliveryAddress}</p>
                                  <br />
                                  <input 
                                      name='phone'
                                      id='phone' 
                                      className='form-control' 
                                      value={values.phone}
                                      placeholder='Phone Number'
                                      onBlur={handleBlur}
                                      onChange={handleChange} 
                                  />
                                  <p className='errorMsg'>{errors.phone}</p>
                                  <br />
                                  <select 
                                      name='paymentType'
                                      id='paymentType' 
                                      className='form-control' 
                                      value={values.paymentType}
                                      onBlur={handleBlur}
                                      onChange={handleChange}>
                                          <option value="Cash On delivery">Cash On Deivery</option>
                                          <option value="Bkash">Bkash</option>
                                          <option value="Nagad">Nagad</option>
                                          <option value="Visa Card">Visa Card</option>
                                          <option value="Bank Account">Bank Account</option>
                                  </select>
                                  <br />
                                  <Button 
                                      type='submit'
                                      style={{ backgroundColor: "#D70F64",
                                               marginRight: "2rem" }}
                                      disabled={order} 
                                      >Place Order
                                  </Button>
                                  <Button 
                                      color='secondary'
                                      className="ml-1" 
                                      onClick={this.goBack} 
                                      >cancel
                                  </Button>
                              {this.state.checkout && <Navigate to='/' replace="true"/>}
                          </form>
                        )}
                      </Formik>
                  </div>); 
        return (
            <div>
                {this.state.isLoading? <Spinner/>: form}
                <Modal isOpen={this.state.isModalOpen} onClick={this.goBack}>
                  <ModalBody>
                      <p>{this.state.modalMsg}</p>
                  </ModalBody>
                </Modal>
            </div>
          )
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);