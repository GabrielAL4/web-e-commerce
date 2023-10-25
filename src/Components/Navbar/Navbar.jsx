import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    const [menu, setMenu] = useState('shop');
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("masculino")}}><Link style={{textDecoration: 'none'}} to='/masculino'>Masculino</Link>{menu==="masculino"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("feminino")}}><Link style={{textDecoration: 'none'}} to='/feminino'>Feminino</Link>{menu==="feminino"?<hr/>:<></>}</li> 
        <li onClick={()=>{setMenu("infantil")}}><Link style={{textDecoration: 'none'}} to='/infantil'>Infantil</Link>{menu==="infantil"?<hr/>:<></>}</li>
      </ul>
      <diV className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='' /></Link>
        <div className='nav-cart-count'>0</div>
      </diV>
    </div>
  )
}
