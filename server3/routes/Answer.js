const express = require('express')
const router = express.Router()
const { Answers, sequelize } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware');
const { QueryTypes } = require('sequelize');

// @route POST /answer/post
// @desc  Create a Answer
// @access Private

router.post('/post', validateToken, async (req, res) => {
    try {
        const { description, QuestionId } = req.body
        const newAnswer = await Answers.create({
            description: description,
            QuestionId: QuestionId,
            UserId: req.user.id
        });

        res.json(newAnswer);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }

});


// @route GET /answer/get/:ques_id
// @desc  Get Answers by Ques ID
// @access Private

router.get('/get/:ques_id', validateToken, async (req, res) => {
    try {

        const qid = req.params.ques_id
        const question = await sequelize.query(`select concat(u.first_name,' ',u.last_name) as asked_by, q.id, q.description, DATE_FORMAT(q.updatedAt, ' %d-%b-%Y %h:%i %p') as updatedAt from questions q, users u where u.id=q.UserId and q.id=${qid}`, { type: QueryTypes.SELECT })
        const answers = await sequelize.query(`select concat(u.first_name, ' ', u.last_name) as postedBy, a.description, DATE_FORMAT(a.updatedAt, '%d-%b-%Y %h:%i%p') as updatedAt from answers a, users u where a.UserId = u.id and a.QuestionId = ${qid}`, { type: QueryTypes.SELECT });

        if (!answers) {
            return res.status(400).json({ msg: 'Answers Not Found', answers: [], question: question });
        }
        res.json({ answers: answers, question: question });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
})

// @route GET /answer/getUserAnswers/:user_id
// @desc  Get Answers by user ID
// @access Private

router.get('/getUserAnswers/:user_id', validateToken, async (req, res) => {
    try {
        const answers = await Answers.findAll({ where: { UserId: req.params.user_id } });
        if (!answers) {
            return res.status(400).json({ msg: 'Answers Not Found' });
        }
        res.json(answers);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
})

// @route POST /answer/deleteAnswer/:answer_id
// @desc  Delete Answers by answer ID
// @access Private

router.post('/deleteAnswer/:answer_id', async (req, res) => {

    const id = req.params.answer_id
    // console.log(id)
    sequelize.query(`delete from answers where id=${id}`)  

})

module.exports = router