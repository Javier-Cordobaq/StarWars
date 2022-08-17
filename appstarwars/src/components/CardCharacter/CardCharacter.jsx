import React from 'react'
import style from '../CardCharacter/CardCharacter.module.css'
import { Link } from 'react-router-dom'

const CardCharacter = ({props, key}) => {

    const _id = Number(props.url.split('/').slice(-2)[0])

  return (
    <div className={style.container}>
        <Link to={`/detailc/${_id}`}>
            <div>
                <h1 className={style.title}>{props.name}</h1>
                <p>Fecha nacimiento: {props.birth_year}</p>
                <p>Genero: {props.gender}</p>
                <p>Masa: {props.mass}</p>
                <p>Altura: {props.height}</p>
                <button className={style.detalle}>Leer más...</button>
            </div>
        </Link>
    </div>
  )
}

export default CardCharacter