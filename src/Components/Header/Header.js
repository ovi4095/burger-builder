import React, { useState } from 'react'
import { Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import './Header.css'
import Logo from '../../assests/logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const Header = (props) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navToggle = () => {
        setIsNavOpen(!isNavOpen);
    }

    let links = (props.token ===null? 
        (<Nav className='links' navbar>
            <NavItem className='NavItems'><Link className='link' to='/home' ><p className='Navlink'>Home</p></Link></NavItem>
            <NavItem className='NavItems'><Link className='link' to='/about' ><p className='Navlink'>About</p></Link></NavItem>
            <NavItem className='NavItems'><Link className='link' to='/login' ><p className='Navlink'>Log in</p></Link></NavItem>    
        </Nav>):
        (<Nav navbar>
            <NavItem className='NavItems'><Link className='link' to='/home' ><p className='Navlink'>Home</p></Link></NavItem>
            <NavItem className='NavItems'><Link className='link' to='/about' ><p className='Navlink'>About</p></Link></NavItem>
            <NavItem className='NavItems'><Link className='link' to='/burger-builder' ><p className='Navlink'>Burger Biulder</p></Link></NavItem>
            <NavItem className='NavItems'><Link className='link' to='/orders' ><p className='Navlink'>Orders</p></Link></NavItem>
            <NavItem className='NavItems'><Link className='link' to='/logout' ><p className='Navlink'>Logout</p></Link></NavItem>
        </Nav>)
        );
    return (
        <div className='Navigation'>
            <Navbar className='nav-style ml-auto' expand='sm'>  
                <NavbarBrand href='/' className='mr-auto ml-md-5 Brand'>
                    <img src={Logo} alt="Brand Logo" className='Logo' />
                </NavbarBrand>
                <NavbarToggler onClick={navToggle}/>  
                    <Collapse isOpen={isNavOpen} className='ml-auto' navbar>
                        {links}
                    </Collapse>
            </Navbar>
        </div>
    )
}

export default connect(mapStateToProps)(Header)