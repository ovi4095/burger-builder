import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addIngredient = ig_type => {
    return{
        type: actionTypes.ADD_INGREDIENT,
        payload: ig_type
    }
}

export const removeIngredient = ig_type => {
    return{
        type: actionTypes.REMOVE_INGREDIENT,
        payload: ig_type
    }
}

export const updatePurchesable = () => {
    return{
        type: actionTypes.UPDATE_PURCHASABLE,
    }
}

export const resetIngredients = () => {
    return{
        type: actionTypes.RESET_INGREDIENT,
    }
}

export const loadOrders = orders => {
    return {
        type:actionTypes.LOAD_ORDERS,
        payload: orders,
    }
}

export const orderLoadFaild = () => {
    return {
        type:actionTypes.ORDER_LOAD_FAILED,
    }
}

export const fetchOrders = (token, userId) => dispatch => {
    const queryParams = `&orderBy="userId"&equalTo="${userId}"`;
    axios.get('https://burger-builder-e1aff-default-rtdb.firebaseio.com/orders.json?auth='+token + queryParams)
    .then(response => {dispatch(loadOrders(response.data))})
    .catch(err => {
        dispatch(orderLoadFaild());
    });
}
