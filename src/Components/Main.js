import React, { Component } from 'react'
import Header from './Header/Header'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'
import { Navigate, Route, Routes } from 'react-router-dom'
import Orders from './Orders/Orders'
import Checkout from './Orders/Checkout/Checkout'
import Auth from './Auth/Auth'
import { connect } from 'react-redux'
import Home from './Home/Home'
import About from './About/About'
import Footer from './Footer/Footer'
import { authCheck } from '../redux/AuthActionCreators'
import Logout from './Auth/Logout'

const mapStateToProps = state => {
  return {
    token: state.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authCheck: () => dispatch(authCheck()),
  }
}

class Main extends Component {
  componentDidMount() {
    this.props.authCheck();
  }
  render(){

    let routes = (this.props.token === null?
                    (<Routes>
                        <Route path='*' element={<Navigate to="/home" />}/>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/login' element={<Auth/>}/>  
                    </Routes>
                  ):
                    (<Routes>
                        <Route path='*' element={<Navigate to='/' replace/>}/>
                        <Route path='/' element={<Navigate to='/home' replace/>}/>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/burger-builder' element={<BurgerBuilder/>}/>
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                        <Route path='/logout' element={<Logout/>}/>    
                    </Routes>
                  )
                  
                  ); 
    return (
      <div>
          <Header/>
          <div className="container">
              {routes}
          </div>
          <Footer/>
      </div>
    )
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Main)