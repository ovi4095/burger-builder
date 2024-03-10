import React from 'react'

const OrderDetail = ({order}) => {
    const ingredientSummary = order.ingredients.map(item => {
        return (
            <span style={{
                border: '2px solid grey',
                borderRadius: '5px',
                marginLeft: '5px',
                padding: '5px',
            }} key={item.type}>{item.amount} x <span style={{textTransform:'capitalize'}}> {item.type}</span></span>
        )
    })
  return (
    <div style={{
        border: '2px solid grey',
        boxShadow:'1px 1px 3px #888888',
        borderRadius: '5px',
        padding: '20px',
        marginBottom: '2rem'
    }}>
        <p>Order Number: <strong>{order.id}</strong></p>
        <p>Customar's Address: <strong>{order.customer.deliveryAddress}</strong></p>
        <p>Customar's Phone: <strong>{order.customer.phone}</strong></p>
        <hr />
        {ingredientSummary}
        <hr />
        <p>Total Price: <strong>{order.price} Tk</strong></p>
    </div>
  )
}

export default OrderDetail