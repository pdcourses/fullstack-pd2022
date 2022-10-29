import axios from 'axios';

const http = axios.create({ baseURL: 'http://localhost:5000/api'});

//http methods - get, post, patch, delete
//CRUD - create (post), read(get), update(patch), delete (delete)

export const getPowers = () => http.get('/powers');

export const getHeroes = () => http.get('/heroes');

export const deleteHero = (heroId) => http.delete(`/heroes/${heroId}`);

export const createHero = (data) => http.post('/heroes', data);

//export const updateHero = (data) => http.patch();
export const updateHero = ({heroId, values}) => http.patch(
    `/heroes/${heroId}` , values
);

