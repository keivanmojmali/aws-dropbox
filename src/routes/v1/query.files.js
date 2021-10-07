const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../../docs/swaggerDef');

const router = express.Router();

router.get('/all',(req,res,next) => {
  res.status(200).json({'response': 'Hello! Success'});
})

module.exports = router;
