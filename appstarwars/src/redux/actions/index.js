import axios from 'axios' 

export const GET_INFO = 'GET_INFO'
export const GET_FILMS = 'GET_FILMS'
export const FILMS_BY_ID = 'FILMS_BY_ID'
export const RESET = 'RESET'
export const GET_CHARACTERS= 'GET_CHARACTERS'

export const getInfo = () => async dispatch => {
    try{
        const json = await axios.get(`https://swapi.dev/api/`)
        if (json.status === 200){
            return dispatch ({
                type: GET_INFO,
                payload: json.data
            })
        }
    }
    catch (error) {
        console.log(error, 'Errores')
        return dispatch({
            type: GET_INFO,
            payload: error.response.data.errors
        })
    }
}

export const getFilms = () => async dispatch => {
    try{
        const json = await axios.get(`https://swapi.dev/api/`)
        const films = await axios.get(`${json.data.films}`)
        if (json.status === 200){
            return dispatch ({
                type: GET_FILMS,
                payload: films.data
            })
        }
    }
    catch (error) {
        console.log(error, 'Errores')
        return dispatch({
            type: GET_FILMS,
            payload: error.response.data.errors
        })
    }
}

export const getFilmsById = (_id) => async dispatch => {
    try{
        console.log('Llamados Detail')
        const json = await axios.get(`https://swapi.dev/api/films/${_id}`)
        if (json.status === 200) 
            return dispatch({
                type: FILMS_BY_ID,
                payload: json.data
            })
    }
    catch (error) {
        console.log(error, 'Errores')
        return dispatch({
            type: FILMS_BY_ID,
            payload: error.response.data.errors
        })
    }
}

export const getCharacters = (url) => async dispatch => {
    try{
        console.log('Llamados getPersonajes')
        const json = await axios.get(`${url}`)
        if (json.status === 200){
            return dispatch ({
                type: GET_CHARACTERS,
                payload: json.data
            })
        }
    }
    catch (error) {
        console.log(error, 'Errores')
        return dispatch({
            type: GET_CHARACTERS,
            payload: error.response.data.errors
        })
    }
}

/* Esta función es para borrar el estado de detail */

export const reset = () => dispatch => {
    return dispatch({
      type: RESET
    })
}

