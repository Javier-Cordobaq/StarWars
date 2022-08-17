import React from 'react'
import logo from '../../assets/StarWars.png'
import style from '../Nav/Nav.module.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Nav = () => {

 /*  const {_id} = useParams();
  const pelicula = `/detailc/${_id}`
  const ruta = window.location.pathname
  console.log(ruta) */

  return (
    <div className={style.container}>
        <Link to='/'>
            <img src={logo} alt=''/>
        </Link>
       {/*  {
          ruta === pelicula ? null:
          <Link to={`/detail/`}>
            <p>Volver</p>
          </Link>
        } */}
        <p>By Javier Córdoba.</p>
    </div>
  )
}

export default Nav