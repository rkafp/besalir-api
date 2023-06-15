var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');

const { Animal } = require('../models');

const v = new Validator();

//LIST DATA
router.get('/', async (req, res) => {
    const animals = await Animal.findAll();
    return res.json(animals);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const animal = await Animal.findByPk(id);
    return res.json(animal || {});
});

//ADD DATA
router.post('/', async (req, res) => {
    const schema = {
        name: 'string',
        description_0: 'string',
        description_1: 'string',
        description_2: 'string',
        description_3: 'string',
        description_4: 'string'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
        .status(400)
        .json(validate)
    }

    const animal = await Animal.create(req.body);

    res.json(animal);
});

//UPDATE DATA
router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let animal = await Animal.findByPk(id);
    
    if (!animal) {
        return res.json({ message: 404 });
    }

    const schema = {
        name: 'string|optional',
        description_0: 'string|optional',
        description_1: 'string|optional',
        description_2: 'string|optional',
        description_3: 'string|optional',
        description_4: 'string|optional'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
        .status(400)
        .json(validate)
    }

    animal = await animal.update(req.body);
    res.json(animal);
});

//DELETE DATA
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    let animal = await Animal.findByPk(id);
    
    if (!animal) {
        return res.json({ message: 404 });
    }

    await animal.destroy();
    
    res.json({ message: 200 });
});

module.exports = router;