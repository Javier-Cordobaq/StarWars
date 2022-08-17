import React from 'react'
import style from '../CardCharacter/CardCharacter.module.css'

const CardCharacter = ({props, key}) => {

  return (
    <div className={style.container}>
        <h1 className={style.title}>{props.name}</h1>
        <p>Fecha nacimiento: {props.birth_year}</p>
        <p>Genero: {props.gender}</p>
        <p>Masa: {props.mass}</p>
        <p>Altura: {props.height}</p>
        <button>Leer más...</button>
    </div>
  )
}

export default CardCharacter