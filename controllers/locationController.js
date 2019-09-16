const express = require('express');
const { Location } = require('../models');
const {restrict} = require('../services/auth.js')
const locationController = express.Router();

locationController.get('/', async (req, res) => {
  try {
    const locations = await Location.findAll();
    console.log("All the locations!")
    res.json(locations);
  } catch (e) {
    res.status(500).send(e.message);
  }
});


locationController.get('/:id', async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);
    console.log("This is the stop")
    //using spread operator:
    //res.json(locations);
    res.json({...location.dataValues});
  } catch (e) {
    res.status(500).send(e.message);
  }
});

locationController.post('/', restrict, async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.json(location);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

locationController.put('/:id', restrict, async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);
    await location.update(req.body);
    res.json(location);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

locationController.delete('/:id', restrict, async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);
    await location.destroy();
    res.json(location);
  } catch (e) {
    res.status(500).send(e.message);
  }
});



module.exports = locationController;
