const express = require('express')
const router = express.Router()
const { Answers } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')

// @route POST /answer/post
// @desc  Create a Answer
// @access Private

router.post('/post', validateToken, async (req, res) => {
    try{
        const { description } = req.body
        const newAnswer = await Answers.create({
            description: description,
            QuestionId: req.body.QuestionId
        });

        res.json(newAnswer);

    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error');
    }
    
});


// @route GET /answer/get/:ques_id
// @desc  Get Answers by Ques ID
// @access Private

router.get('/get/:ques_id', validateToken, async (req, res)=>{
    try{
        const answers = await Answers.findAll({where: { QuestionId: req.params.ques_id }});
        if(!answers){
            return res.status(400).json({msg: 'Answers Not Found'});
        }
        res.json(answers);

    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router
