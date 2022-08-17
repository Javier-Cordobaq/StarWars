import React from 'react'
import style from '../Card/Card.module.css'
import { Link } from 'react-router-dom'
import Sable from '../../assets/Sable.webp'

const Card = ({info}) => {

  const _id = Number(info.url.split('/').slice(-2)[0])

  return (
    <div className={style.container}>
        <Link to={`/detail/${_id}`}>
        <div>
            <div className={style.containerTitle}>
                <h1 className={style.title}>{info.title}</h1>
            </div>
            <div>
                <p>Fecha lanzamiento: {info.release_date}</p>
                <p>Director: {info.director}</p>
                <p>Productor: {info.producer}</p>
                <img src={Sable} alt=''/>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Card