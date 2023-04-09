import React from 'react';
import { FaShoppingCart } from "react-icons/fa";


export default function Header() {
  return (
    <header>
        <div className='nav_Container'>
            <span className='logo'>Candels store</span>
            <ul className='nav'>
                <li><FaShoppingCart className='cart_logo'/></li>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
