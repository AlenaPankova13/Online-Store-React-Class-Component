import React from 'react'

export default function Header() {
  return (
    <header>
        <div className='nav_Container'>
            <span className='logo'>Candels store</span>
            <ul className='nav'>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
