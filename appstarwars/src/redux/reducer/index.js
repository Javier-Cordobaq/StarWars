import {
  GET_INFO,
  GET_FILMS,
  FILMS_BY_ID,
  RESET,
  GET_CHARACTERS
} from "../actions/index";

const inicialState = {
  info: [],
  films: [],
  filmsById: [],
  characters: [],
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
      case RESET:
        return {
          ...state,
          filmsById: [],
          characters: []
        }

    default:
      return state;

  }
};

export default rootReducer;
