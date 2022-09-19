import React from 'react'
import { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

import Cart from '../Cart/Cart'
import './Header.scss'

export default function Header(props) {

   let [cartOpen, setCartOpen] = useState(false)
   let [burger, setBurger] = useState(false)


   useEffect(() => {
      withoutScroll()
   }, [burger])

   const withoutScroll = () => {
      if (burger) {
         document.querySelector('body').classList.add('withoutScroll')
      } else {
         document.querySelector('body').classList.remove('withoutScroll')
      }
   }

   return (
      <header className='header'>
         <div className='header__container container'>
            <div className="header__row">
               <Link to='/'> <span className={burger ? 'logo active-color' : 'logo'}>Spa_flowers_tula</span></Link>

               <div className='header__767'>
                  <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={cartOpen ? 'nav__cart-2 active' : 'nav__cart-2'}></FaShoppingCart>
                  <nav className="header__menu menu">
                     <div onClick={() => setBurger(burger = !burger)} className={burger ? "menu__icon active-color" : 'menu__icon'}>
                        <span></span>
                     </div>
                     <div className={burger ? 'menu__body active-burger' : 'menu__body'}>
                        <ul className="menu__list">
                           <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className='nav__cart'></FaShoppingCart>
                           <NavLink end to='/'> <li className={burger ? 'nav__item active-color' : 'nav__item'}>Главная</li></NavLink>
                           <NavLink to='/contacts'><li className={burger ? 'nav__item active-color' : 'nav__item'}>Контакты</li></NavLink>
                           <NavLink to='/about'><li className={burger ? 'nav__item active-color' : 'nav__item'}>Про нас</li></NavLink>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
            {
               cartOpen ? (
                  <Cart onDelete={props.onDelete} order={props.order} />
               ) : null
            }
         </div >

      </header >
   )
}
