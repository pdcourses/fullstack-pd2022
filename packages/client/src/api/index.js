import axios from 'axios';

const http = axios.create({ baseURL: 'http://127.0.0.1:5001/api'});

//http methods - get, post, patch, delete
//CRUD - create (post), read(get), update(patch), delete (delete)

export const getPowers = () => http.get('/powers');

export const getHeroes = () => http.get('/heroes');

export const deleteHero = (id) => {
    //console.log('client. delete id = ', id);
    http.delete(`/heroes/${id}`);
}

export const createHero = (data) => http.post('/heroes', data);


//export const updateHero = (data) => http.patch();
export const updateHero = ({heroId, values}) => http.patch(
    `/heroes/${heroId}` , values
);

