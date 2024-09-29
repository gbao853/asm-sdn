const Question = require('../models/Question');
const Quiz = require('../models/Quiz');

exports.addQuestion = async (req, res) => {
  const question = new Question(req.body);
  await question.save();

  const quiz = await Quiz.findById(req.params.quizId);
  quiz.questions.push(question._id);
  await quiz.save();

  res.json(question);
};

exports.getQuestionById = async (req, res) => {
  const question = await Question.findById(req.params.questionId);
  res.json(question);
};
