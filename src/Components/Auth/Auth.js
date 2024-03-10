import React, { Component } from 'react'
import { Formik } from 'formik'
import './Auth.css'
import { auth, authErrorMassegeClear } from '../../redux/AuthActionCreators'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'
import Spinner from '../Spinner/Spinner'


const mapStateToProps = state => {
    return {
      token: state.token,
      authLoading: state.authLoading,
      authFailedMsg:state.authFailedMsg,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, mode) => dispatch(auth(email, password, mode)),
        authErrorMassegeClear: () => dispatch(authErrorMassegeClear())
    }
}

export class Auth extends Component {
    state = {
        mode: "Log in",
        redirect: false,
    }
    switchModHandler = () =>{
        this.setState({
            mode: this.state.mode === "Sign Up"? "Log in" : "Sign Up",
        })
        this.props.authErrorMassegeClear();
    }
    
render() {
    console.log(this.state.redirect)
    let errMsg = null;
    if(this.props.authFailedMsg!==null) {
        let msg = this.props.authFailedMsg === 'INVALID_LOGIN_CREDENTIALS'? 'Email or Password is incurrect!':'Email exists!';
        errMsg = <Alert color='danger'>{msg}</Alert>
    }
    let form = null;
    if(this.props.authLoading) {
        form = <Spinner/>
    } else {
        form =<div>
        <Formik
            initialValues={{
                email: "",
                password: "",
                passwordConfirm:"",
            }}
            onSubmit={
                (values) => {
                    this.props.auth(values.email, values.password, this.state.mode);
                }
            }

            validate={(values) => {
                const errors = {};

                if(!values.email) {
                    errors.email = 'Required';
                } else if(!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i.test(values.email)) {
                    errors.email = 'Invalid email address'
                }
                
                if(!values.password) {
                    errors.password = 'Required';
                } else if(this.state.mode === "Sign Up" && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(values.password)) {
                    errors.password = 'Must have eight Charecters and at least contained one upper case and lower case letter and a number'
                }
                if(this.state.mode === "Sign Up") {
                    if(!values.passwordConfirm) {
                        errors.passwordConfirm = 'Required';
                    } else if(values.password !== values.passwordConfirm) {
                        errors.passwordConfirm = 'Password field does not match!'
                    }
                }
                return errors;
            }}
        >
            {({ values, handleChange, handleSubmit, errors })=>(
            <div className='signInForm'>
                <button 
                    className='switchBtn'
                    onClick={this.switchModHandler}
                        >Switch to {this.state.mode === 'Sign Up'? "Log in": "Sign Up"}
                </button>
                <form onSubmit={handleSubmit}>
                    <input type="eamil"
                           name='email'
                           placeholder='Enter Your Email'
                           className='form-control'
                           value={values.email}
                           onChange={handleChange}
                           /><p className='errorMsg' >{errors.email}</p><br/>
                    <input type={this.state.mode === 'Sign Up'? 'text':'password'}
                           name='password'
                           placeholder='Enter Your Password'
                           className='form-control'
                           value={values.password}
                           onChange={handleChange}
                           autoComplete="on"
                           /><p className='errorMsg' >{errors.password}</p><br/>
                    {this.state.mode === 'Sign Up'?<div>
                    <input type="text"
                           name='passwordConfirm'
                           placeholder='Confirm Your Password'
                           className='form-control'
                           value={values.passwordConfirm}
                           onChange={handleChange}
                           autoComplete="on"
                           /><p className='errorMsg' >{errors.passwordConfirm}</p><br/>
                    </div>:null}  
                    <button
                           type='submit'
                           className='btn btn-success'
                    >{this.state.mode === 'Sign Up'? "Sign Up": "Log in"}</button>
                </form>
            </div>)}
        </Formik>
      </div>
    }
    return (
      <div>
        {errMsg}
        {form}
        
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);