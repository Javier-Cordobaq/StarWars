import React from 'react'
import logo from '../../assets/StarWars.png'
import style from '../Nav/Nav.module.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className={style.container}>
        <Link to='/'>
            <img src={logo} alt=''/>
        </Link>
        <p>By Javier Córdoba</p>
    </div>
  )
}

export default Nav