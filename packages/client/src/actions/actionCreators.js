import ACTION_TYPES from "./actionTypes";

export const getHeroesAction = () => ({
    type: ACTION_TYPES.GET_HEROES_ACTION
});

export const getHeroesRequest = () => ({
    type: ACTION_TYPES.GET_HEROES_REQUEST
});

export const getHeroesSuccess = (data) => ({
    type: ACTION_TYPES.GET_HEROES_SUCCESS,
    data
});

export const getHeroesError = (err) => ({
    type: ACTION_TYPES.GET_HEROES_ERROR,
    err
});

// powers
export const getPowersAction = () => ({
    type: ACTION_TYPES.GET_POWERS_ACTION
});

export const getPowersRequest = () => ({
    type: ACTION_TYPES.GET_POWERS_REQUEST
});

export const getPowersSuccess = (data) => ({
    type: ACTION_TYPES.GET_POWERS_SUCCESS,
    data
});

export const getPowersError = (err) => ({
    type: ACTION_TYPES.GET_POWERS_ERROR,
    err
});

// delete hero

export const deleteHeroAction = (id) => ({
    type: ACTION_TYPES.DELETE_HERO_ACTION,
    id
});

export const deleteHeroRequest = () => ({
    type: ACTION_TYPES.DELETE_HERO_REQUEST
});

export const deleteHeroSuccess = (id) => ({
    type: ACTION_TYPES.DELETE_HERO_SUCCESS,
    id
});

export const deleteHeroError = (err) => ({
    type: ACTION_TYPES.DELETE_HERO_ERROR,
    err
});