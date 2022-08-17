import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getFilmsById, reset, getCharacters } from '../../redux/actions'
import CardCharacter from '../CardCharacter/CardCharacter'
import { useParams } from 'react-router-dom'

import style from '../DetailFilm/DetailFilm.module.css'

const DetailFilm = () => {

    const [load, setLoad] = useState(false);

    const dispatch = useDispatch();
    const detail = useSelector(state => state.filmsById)
    const InfoCharacters = useSelector(state => state.characters)

    const {_id} = useParams()
   
    useEffect(() => {
            dispatch(getFilmsById(_id)).then((res) => {
                setLoad(true)
                callCharacters(res.payload.characters)
            })
        return (() => {dispatch(reset())})
    }, [dispatch])

    const callCharacters = (array) => {
        array.forEach(c => dispatch(getCharacters(c)))
       /*  const length = array.length
        for(let i = 0; i < length; i++){
                dispatch(getCharacters(array[i]))    
        } */
    }

  return (
    <div className={style.container}>
        {
            load === false ?
            <h1>Cargando...</h1>
            :
            <div>
                <div>
                    <h1>{detail.title}</h1>
                    <p>Fecha de Lanzamiento: {detail.release_date}</p>
                    <p>Director: {detail.director}</p> 
                    <p>Opening: {detail.opening_crawl} </p> 
                    <p>Productor: {detail.producer}</p> 
                    <div className={style.containerCards}>
                        {
                            InfoCharacters.length !== 0 ? InfoCharacters?.map(c => (
                                <CardCharacter props={c} key={c.name} />
                            )) : <h1>Cargando...</h1>
                        } 
                    </div>
                </div>

            </div>
            
            
        }
    </div>
  )
}

export default DetailFilm