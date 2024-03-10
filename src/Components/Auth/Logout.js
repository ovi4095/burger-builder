import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/AuthActionCreators'
import { Navigate } from 'react-router-dom'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch =>{
    return{
        logout: () => dispatch(logout()),
    }
}

export class Logout extends Component {
    componentDidMount() {
        this.props.logout();
    }
  render() {
    return (
      <Navigate to='/' replace/>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout)