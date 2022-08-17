import React, {useEffect, useState} from 'react'
import { getCharactersById, getNaves, reset } from '../../redux/actions' 
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import style from '../DetailCharacter/DetailCharacter.module.css'

const DetailCharacter = () => {

    const [load, setLoad] = useState(false);

    const dispatch = useDispatch();

    const {_id} = useParams();

    const detail = useSelector(s => s.charactersId)
    const naves = useSelector(s => s.naves)

    useEffect(() => {
        dispatch(getCharactersById(_id)).then((res) => {
            setLoad(true)
            callNaves(res.payload.vehicles)
        })
    return (() => {dispatch(reset())})
    }, [dispatch])

    const callNaves = (array) => {
        array.forEach(c => dispatch(getNaves(c)))
    }

  return (
    <div className={style.container}>
        {
            load === false ?
            <h1>Cargando...</h1>
            :
            <div>
                <div>
                    <h1 className={style.title}>{detail.name}</h1>
                    <p>Fecha nacimiento: {detail.birth_year}</p>
                    <p>Genero: {detail.gender}</p>
                    <p>Masa: {detail.mass}</p>
                    <p>Altura: {detail.height}</p>
                        <div className={style.containerCards}>
                            {
                                naves.length !== 0 ? naves?.map(c => (
                                    <div key={c.name}>
                                        <h1>{c.name}</h1>
                                        <p>{c.model}</p>
                                        <p>{c.starship_class}</p>
                                        <p>{c.passengers}</p>
                                    </div>
                                )) : <h1 className={style.error}>Este personaje no tiene vehiculos</h1>
                            } 
                        </div>
                    </div>
                </div>            
        }
    </div>
  )
}

export default DetailCharacter