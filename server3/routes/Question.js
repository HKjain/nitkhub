const express = require('express')
const router = express.Router()
const { Questions } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')

// @route POST /question/post
// @desc  Create a Question
// @access Private

router.post('/post', validateToken, async (req, res) => {
    try{
        const { description } = req.body
        const newQuestion = await Questions.create({
            description: description,
            UserId: req.user.id
        });

        res.json(newQuestion);

    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error');
    }
    
});

// @route GET /question/get
// @desc  Get all questions
// @access Private

router.get('/get', validateToken, async (req,res)=>{
    try{
        const questions = await Questions.findAll();
        res.json(questions);
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error');
    }
})


// @route GET /question/get/:user_id
// @desc  Get Questions by user ID
// @access Private

router.get('/get/:user_id', validateToken, async (req, res)=>{
    try{
        const questions = await Questions.findAll({where: { UserId: req.params.user_id }});
        if(!questions){
            return res.status(400).json({msg: 'Questions Not Found'});
        }
        res.json(questions);

    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error');
    }
})

// @route DELETE /question/delete/:ques_id
// @desc  Delete Question by Ques ID
// @access Private

router.delete('/delete/:ques_id', validateToken, async (req, res)=>{
    try{
        const ques_deleted = await Questions.destroy({where: { id: req.params.ques_id }});
        if(!ques_deleted){
            return res.status(400).json({msg: 'Question Not Found'});
        }
        console.log('Deleted Successfully');
        res.json(ques_deleted);

    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error');
    }
})

// @route UPDATE /question/put/:ques_id
// @desc  Update Question by Ques ID
// @access Private

router.put('/put/:ques_id', validateToken, async (req, res)=>{
    try{
        const question = await Questions.findAll({where: { id: req.params.ques_id }});
        if(!question){
            return res.status(400).json('Question not found!');
        }
        await Questions.update({ description: req.body.description}, { where: { id: req.params.ques_id }});

        const updated_question = await Questions.findAll({where: { id: req.params.ques_id }});
        res.json(updated_question);

    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error');
    }
})


module.exports = router