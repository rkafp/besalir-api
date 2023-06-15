var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');

const { Quiz } = require('../models');

const v = new Validator();

//LIST DATA
router.get('/', async (req, res) => {
    const quizzes = await Quiz.findAll();
    return res.json(quizzes);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const quiz = await Quiz.findByPk(id);
    return res.json(quiz || {});
});

//ADD DATA
router.post('/', async (req, res) => {
    const schema = {
        question: 'string',
        choice_a: 'string',
        choice_b: 'string',
        choice_c: 'string',
        choice_d: 'string',
        answer: 'string',
        point: 'number'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
        .status(400)
        .json(validate)
    }

    const quiz = await Quiz.create(req.body);

    res.json(quiz);
});

//UPDATE DATA
router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let quiz = await Quiz.findByPk(id);
    
    if (!quiz) {
        return res.json({ message: 404 });
    }

    const schema = {
        question: 'string|optional',
        choice_a: 'string|optional',
        choice_b: 'string|optional',
        choice_c: 'string|optional',
        choice_d: 'string|optional',
        answer: 'string|optional',
        point: 'number|optional'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
        .status(400)
        .json(validate)
    }

    quiz = await quiz.update(req.body);
    res.json(quiz);
});

//DELETE DATA
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    let quiz = await Quiz.findByPk(id);
    
    if (!quiz) {
        return res.json({ message: 404 });
    }

    await quiz.destroy();
    
    res.json({ message: 200 });
});

module.exports = router;