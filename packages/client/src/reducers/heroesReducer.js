import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
    heroes: [],
    isFetching: false,
    error: null
};

const heroesReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.GET_HEROES_REQUEST: {
            return {...state, isFetching:true,  error: null}
        }
        case ACTION_TYPES.GET_HEROES_SUCCESS: {
            const {data} = action;
            return {...state, isFetching: false, heroes: [...data]}
        }
        case ACTION_TYPES.GET_HEROES_ERROR:{
            const {err} = action;
            return {...state, isFetching: false, error: err}
        }
        case ACTION_TYPES.DELETE_HERO_REQUEST: {
            return {...state, isFetching:true,  error: null}
        }
        case ACTION_TYPES.DELETE_HERO_SUCCESS: {
            const {id} = action;
            const {heroes} = state;
            const updHeroes = [...heroes];
            updHeroes.splice(updHeroes.findIndex(i => i.id === id), 1);
            return {...state, isFetching:false, heroes: updHeroes};
        }
        case ACTION_TYPES.DELETE_HERO_ERROR: {
            const {err} = action;
            return {...state, isFetching: false, error: err}
        }
        default: return state;
    }
}
export default heroesReducer;