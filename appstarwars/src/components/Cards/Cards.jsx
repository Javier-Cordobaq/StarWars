import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getInfo, getFilms } from '../../redux/actions'
import style from '../Cards/Cards.module.css'
import Card from '../Card/Card'

const Cards = () => {

    const [load, setLoad] = useState(false);

    const dispath = useDispatch();
    const films = useSelector(state => state.films)

    useEffect(() => {
        dispath(getFilms()).then((res) => setLoad(true));
    }, [])

  return (
    <div className={style.container}>
        {
            load === false ? 
            <h1>Cargando...</h1>:
            films.results?.map(c => (
                <Card 
                info={c}
                title={c.title}
                lanzamiento={c.release_date}
                director={c.director}
                productor={c.producer}
                id={c.episode_id}
                key={c.episode_id}
                />
            ))
        }
    </div>
  )
}

export default Cards