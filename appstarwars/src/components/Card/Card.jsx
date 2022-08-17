import React from 'react'
import style from '../Card/Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({info}) => {

  return (
    <div className={style.container}>
        <Link to={`/detail/${info.episode_id}`}>
        <div>
            <h1 className={style.title}>- {info.title}</h1>
            <p>Fecha lanzamiento: {info.release_date}</p>
            <p>Director: {info.director}</p>
            <p>Productor: {info.producer}</p>
        </div>
        </Link>
    </div>
  )
}

export default Card