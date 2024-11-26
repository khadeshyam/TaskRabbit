const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Create Task
router.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).send(newTask);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read Tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update Task
router.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete Task
router.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;