const courseModel = require('../models/courseModel');
const userModel = require('../models/userModel');

function getCourses(req, res, next) {
  courseModel.find()
    .populate('userId')
    .then((courses) => res.json(courses))
    .catch(next);
}

async function getCourse(req, res, next) {
    try {
        const course = await courseModel.findById(req.params.id).populate('owner');
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json(course);
    } catch (err) {
        next(err);
    }
}

async function createCourse(req, res, next) {
    const { title, description, category, image, author } = req.body;
    const { _id: userId } = req.user; 

  if (!userId) {
      return res.status(401).json({ message: 'Unauthorized - User information is missing' });
  }

  try {
      const course = await courseModel.create({
          title,
          description,
          category,
          image,
          author,
          owner: userId,
      });

      await userModel.findByIdAndUpdate(userId, { $push: { courses: course._id } }, { new: true });

      res.status(201).json(course);
  } catch (err) {
      next(err);
  }
}

async function updateCourse(req, res, next) {
    try {
        const course = await courseModel.findById(req.params.id);
        if (!course) return res.status(404).json({ message: 'Course not found' });

        if (req.body.title) course.title = req.body.title;
        if (req.body.description) course.description = req.body.description;
        if (req.body.category) course.category = req.body.category;
        if (req.body.image) course.image = req.body.image;
        if (req.body.author) course.author = req.body.author;

        const updatedCourse = await course.save();
        res.json(updatedCourse);
    } catch (err) {
        next(err);
    }
}

async function deleteCourse(req, res, next) {
    try {
        const course = await courseModel.findById(req.params.id);
        if (!course) return res.status(404).json({ message: 'Course not found' });

        await course.remove();

        // Remove the deleted book's ID from the user's `books` array
        await userModel.findByIdAndUpdate(course.owner, { $pull: { courses: req.params.id } }, { new: true });

        res.json({ message: 'Course deleted successfully' });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
};
