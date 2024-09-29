const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/questionController');

router.post('/quizzes/:quizId/questions', QuestionController.addQuestion);
router.get('/questions/:questionId', QuestionController.getQuestionById);

module.exports = router;
