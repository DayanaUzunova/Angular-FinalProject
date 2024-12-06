const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const courseController = require('../controllers/courseController');

// Get all courses
router.get('/', courseController.getCourses);

// Create a course (requires authentication)
router.post('/', auth(), courseController.createCourse);

// Get a specific course by ID
router.get('/:id', courseController.getCourse);

// Update a course by ID (requires authentication)
router.patch('/:id', auth(), courseController.updateCourse);

// Delete a course by ID (requires authentication)
router.delete('/:id', auth(), courseController.deleteCourse);

module.exports = router;
