import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../../redux/actionCreators'
import OrderDetail from './OrderDetail/OrderDetail'
import Spinner from '../Spinner/Spinner'

const mapStateToProps = (state) => {
  return {
      orders: state.orders,
      orderLoading: state.orderLoading,
      orderErr: state.orderErr,
      token: state.token,
      userId: state.userId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: (token, userId) => dispatch(fetchOrders(token, userId))
  }
}

export class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders(this.props.token, this.props.userId);
  }
  componentDidUpdate() {
    // console.log(this.props.orders);
  }
  render() {
    let orders = null;
    if (this.props.orderErr) {
      orders = <p
      style={{
        border: '2px solid grey',
        boxShadow:'1px 1px 3px #888888',
        borderRadius: '5px',
        padding: '20px',
        marginBottom: '2rem'
      }}
      ><strong>Sorry Failed to Load Orders!</strong></p>
    } else {
        if(this.props.orders.length===0){
          orders = <p
          style={{
            border: '2px solid grey',
            boxShadow:'1px 1px 3px #888888',
            borderRadius: '5px',
            padding: '20px',
            marginBottom: '2rem'
          }}
          ><strong>You have no orders!</strong></p>
        } else {
            orders = this.props.orders.map(order =>{
              return <OrderDetail order= {order} key={order.id}/>
              })
        }
    }
    return (
      <div style={{
        marginBottom:"5rem"
      }}>
          {this.props.orderLoading? <Spinner/> : orders}
      </div>
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Orders)