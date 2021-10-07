const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../../docs/swaggerDef');
const faker = require('faker');

const router = express.Router();

router.get('/all',(req,res,next) => {
  res.status(200).json({'response': 'Hello! Success'});
})

router.get('/test',(req,res,next)=>{
    let imagesArray = [];
    for(let i =0; i < 11; i++) {

    }
})


module.exports = router;
