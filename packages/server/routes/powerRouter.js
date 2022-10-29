const {Router} = require('express');
const {powerController} = require('../controllers');
// api/powers
const powerRouter = Router();
powerRouter.get('/', powerController.getPowers);

module.exports = powerRouter;