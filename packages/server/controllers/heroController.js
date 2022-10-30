const {Hero, Power, sequelize} = require('../db/models');
const createError = require('http-errors');
const _ = require('lodash');

module.exports.createNewHero = async (req, res, next) => {
    const {body, file}= req;
    console.log('body=',body);
    if(file){ body.image = file.filename; }
    if(! body.superpowers) { body.superpowers = [];}
    try{ 
        const newHero = await Hero.create(body);
        //const newHeroPowers  = await Power(body.superpowers);
        const newHeroPowers  = await newHero.setPowers(body.superpowers);
        const objHero = _.omit(newHero.get(), ['createdAt', 'updatedAt']);
        objHero.superpowers = body.superpowers.map(i => Number(i));
        res.status(200).send({data:  objHero});
    }catch(err){
        next(err);
    }
};

/*
module.exports.getAllHeroes = async (req, res, next) => {
    try{
        const foundHeroes = await Hero.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            }
        });
        console.log(foundHeroes);
        res.status(200).send({data: foundHeroes});
    } catch(err){
        next(err);
    }
};
*/

module.exports.getAllHeroes = async (req, res, next) => {
    try{
        const foundHeroes = await Hero.findAll({
            raw: true,
            attributes: {exclude: ['createdAt', 'updatedAt']},
            include: {
                model: Power,
                attributes: {exclude: ['description','createdAt', 'updatedAt']},
            },
            through: {attributes: []},
        });
        //console.log(foundHeroes);
        const sendHeros = {};
        foundHeroes.forEach( i => {
            sendHeros[i.id] = i;
            sendHeros[i.id].superpowers = [];
        });
        foundHeroes.forEach( i => {
            i['Powers.id'] && sendHeros[i.id].superpowers.push(i['Powers.id']);
            delete i['Powers.id'];
        });
       // console.log(sendHeros);
        res.status(200).send({data: Object.values(sendHeros)});
    } catch(err){
        next(err);
    }
};

module.exports.getHeroById = async (req, res, next) => {
    try{
        const foundHero = await Hero.findByPk(id);
        if(foundHero){
            return res.status(200).send({data: foundHero});
        }
        next(createError(404, 'The hero not found'));
    } catch(err){
        next(err);
    }
};

module.exports.deleteHeroById = async (req, res, next) => {
    const { params: {heroId} } = req;
    const heroIdN = Number(heroId);
    console.log('delete. req params=',req.params);
    try{
        const deletedHero = await Hero.destroy({
            where: {
                id : heroIdN,
            },
        });
        if(deletedHero) return res.status(204).send();
        next(createError(404, 'The hero not found'));

    } catch(err){
       next(err);
    }
};

module.exports.updateHeroById = async (req, res, next) => {
    const { body, params: {heroId} } = req;
    try{
        const [updHeroCount, [updHero]] = await Hero.update(body, {
            where: {id: heroId},
            raw: true,
            returning: true
        });
        if(updHeroCount){
            return res.status(200).send({data: updHero});
        }
        next(createError(404, 'The hero not found'));
    } catch(err){
       next(err);
    }
};