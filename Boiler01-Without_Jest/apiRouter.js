const manageRouter = require("express").Router(); 

const AgentController = require('./controllers/AgentController');


manageRouter.get('/dummyAPi',AgentController.dummyAPi);


module.exports = manageRouter;