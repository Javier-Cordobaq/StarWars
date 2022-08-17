import {
  GET_INFO,
  GET_FILMS,
  FILMS_BY_ID,
  RESET,
  GET_CHARACTERS,
  CHARACTERS_BY_ID,
  GET_NAVES
} from "../actions/index";

const inicialState = {
  info: [],
  films: [],
  filmsById: [],
  characters: [],
  charactersId: [],
  naves: []
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        info: action.payload
      }
    case GET_FILMS:
        return {
          ...state,
          films: action.payload
        }
      case FILMS_BY_ID:
          return {
            ...state,
            filmsById: action.payload
          }
      case GET_CHARACTERS:
            return {
              ...state,
              characters: state.characters.findIndex(object => {   return object.name === action.payload.name; }) === -1 ? [...state.characters, action.payload] : state.characters 
            }
      case GET_NAVES:
            return {
              ...state,
              naves: state.naves.findIndex(object => {   return object.name === action.payload.name; }) === -1 ? [...state.naves, action.payload] : state.naves
            }
      case  CHARACTERS_BY_ID:
        return {
          ...state,
          charactersId: action.payload
        }
      case RESET:
        return {
          ...state,
          filmsById: [],
          characters: [],
          naves: []
        }

    default:
      return state;

  }
};

export default rootReducer;
