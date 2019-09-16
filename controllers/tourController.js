const express = require('express');
const { Tour } = require('../models');
const {restrict} = require('../services/auth.js')
const tourController = express.Router();

tourController.get('/', async (req, res) => {
  try {
    const tours = await Tour.findAll();
    console.log("All the itineraries!!!")
    res.json(tours);
  } catch (e) {
    res.status(500).send(e.message);
  }
});


tourController.get('/:id', async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id);
    console.log("This is the specific tour")
    //using spread operator:
    //res.json(tours);
    res.json({...tour.dataValues});
  } catch (e) {
    res.status(500).send(e.message);
  }
});

tourController.post('/', restrict, async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.json(tour);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

tourController.put('/:id', restrict, async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id);
    await tour.update(req.body);
    res.json(tour);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

tourController.delete('/:id', restrict, async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id);
    await tour.destroy();
    res.json(tour);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//allows you to add a location to a tour
tourController.put('/:location_id/', async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.tour_id);
    const newLocation = await Location.findByPk(req.params.location_id);
    await tour.addLocation(newLocation);
    const locations = await tour.getLocation();
    res.json({ ...tour.dataValues, locations });
  } catch (e) {
    res.status(500).send(e.message);
  }
})


module.exports = tourController;
