const express = require('express');
const router = express.Router();
const { getQuizzes, getQuizById, createQuiz, addQuestionToQuiz, deleteQuiz, getQuestionsWithKeyword} = require('../controllers/quizController');

router.get('/quizzes', getQuizzes);
router.get('/quizzes/:quizId', getQuizById);
router.post('/quizzes', createQuiz);
router.post('/quizzes/:quizId/question', addQuestionToQuiz);
router.delete('/quizzes/:quizId', deleteQuiz);
router.get('/quizzes/:quizId/populate', getQuestionsWithKeyword);

module.exports = router;
