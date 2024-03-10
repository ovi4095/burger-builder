import React, { Component } from 'react'
import Burger from './Burger/Burger'
import Controls from './Controls/Controls'
import './BurgerBuilder.css'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import Summary from './summary/Summary'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux' // connects reducer to this file format {export default connet(mapStatetoProps,mapDispatchToProps) (fileName)}
import { addIngredient, removeIngredient, updatePurchesable } from '../../redux/actionCreators'
import { INGREDIENT_PRICES } from '../../redux/reducer'

// (mapStatetoProps) imports stats (inital or uodated) from reducer and implement them into this BurgerBuilder class file accepts props as (this.props)
const mapStatetoProps = state => {
  return{
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  }
}
// (mapDispatchToProps) dispacths (take props from this file) to reducer's actionCreator. file retune props as (this.props)
const mapDispatchToProps = dispatch => {
  return {
    //    (Left Side)        ||          (Rigth Side)                   
    // Local(addIngredient,  ||   // redux actionCreators (addIngredient,removeIngredient,updateIIngredient)
    // removeIngredient,     ||   // this will take data (AKA Dispacth) form BurgerBulider component to Reducers
    // updateIIngredient)    ||   // ActionCreator to create action that will send to reducers
    addIngredient: (ig_type) => dispatch(addIngredient(ig_type)), 
    removeIngredient: (ig_type) => dispatch(removeIngredient(ig_type)), 
    updatePurchesable: () => dispatch(updatePurchesable()), 
  }
}

class BurgerBuilder extends Component {
    state = {
        modalOpen: false,
        checkout: false
    }

    // Adding Removing Ingredient
    addIngredientHandle = type => {
        this.props.addIngredient(type);
        this.props.updatePurchesable();
    }
    removeIngredientHandle = type => {
        this.props.removeIngredient(type);
        this.props.updatePurchesable();
    }
    
    // Modal Control
    toggleModal = () => {
      this.setState({
        modalOpen: !this.state.modalOpen
      })
    }

    handleCheckout = () => {
      this.setState({
        checkout: true
      })
      
    }
 
    render() {
    
          return (
          <div>
              <div className='Builder'>
                  <Burger ingredients={this.props.ingredients}/>
                  <Controls className="Controls"
                    ingredientAdded ={this.addIngredientHandle}
                    ingredientRemoved = {this.removeIngredientHandle}
                    price = {this.props.totalPrice}
                    toggleModal = {this.toggleModal}
                    purchasable = {this.props.purchasable}
                  />         
              </div>
              <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summary</ModalHeader>
                    <ModalBody>
                          <Summary ingredients={this.props.ingredients} ingredientPrice={INGREDIENT_PRICES}/>
                          <h5>Total Price: {this.props.totalPrice.toFixed(0)} Tk</h5>
                    </ModalBody>
                    <ModalFooter>
                          <Button color="success" onClick={this.handleCheckout}>Continue to Checkout</Button>
                          <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                    {this.state.checkout && <Navigate to="/checkout" replace={true}/>}
              </Modal>
          </div>
        );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(BurgerBuilder);