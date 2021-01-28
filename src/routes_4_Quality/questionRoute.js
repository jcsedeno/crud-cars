'use strict'

const express = require('express');
const router = express.Router();

const questionController = require('../controllers_4_Quality/questionController');

//GET obtener todas las preguntas
router.get('/faqs', questionController.showAllQuestions);

module.exports = router;