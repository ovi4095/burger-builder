import React from 'react'
import Ingredient from '../Ingredient/Ingredient'
// import { type } from '@testing-library/user-event/dist/type'
import './Burger.css'

const Burger = props => {
    let ingredientArr = props.ingredients.map(item =>{
        let amountArr =[...Array(parseInt(item.amount)).keys()]
        return amountArr.map(_ => {
            return <Ingredient type={item.type} key={parseInt(Math.random()*1000)}/>
        })
    }).reduce((arr, element) => {
      return arr.concat(element);
    }, []);
    
    let ingredient = ingredientArr;
    const ingredients = (ingredientArr.length === 0)? ingredient = <p> Please add some ingredients!</p>: ingredient;

  return (
    <div className='Burger'>
        <Ingredient type="bread-top"/>
        {ingredients}
        <Ingredient type="bread-bottom"/>
    </div>
  )
}


export default Burger