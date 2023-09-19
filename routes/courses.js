const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courses');
const { isLoggedIn } = require('../middleware');

router.get('/', isLoggedIn, courseController.getAllCourses);
router.get('/print', isLoggedIn, courseController.getPrintView);
router.get('/new', isLoggedIn, courseController.getNewCoursePage);
router.post('/', isLoggedIn, courseController.addNewCourse);
router.get('/:id', isLoggedIn, courseController.getIndividualPage);
router.get('/:id/edit', isLoggedIn, courseController.getEditPage);
router.put('/:id', isLoggedIn, courseController.editCourse);
router.delete('/:id', isLoggedIn, courseController.deleteCourse);

module.exports = router;
