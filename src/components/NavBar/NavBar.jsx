import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>home</li>
                <li>terror</li>
                <li>drama</li>
                <li>comedia</li>
            </ul>
        </nav>
        <CartWidget />
    </div>
  )
}

export default NavBar