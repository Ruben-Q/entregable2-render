const express = require('express');
const userRouter = require('./user.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter) // Este users es el mismo que se coloca en el postman "{{BASE_URL}}/users/2"

module.exports = router;