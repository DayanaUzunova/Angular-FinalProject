const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    owner: {
        type: ObjectId,
        ref: "User"
}
});

const Course = mongoose.model('Course', courseSchema)

module.exports = Course;
