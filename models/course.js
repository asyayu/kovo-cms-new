const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    instructor: {
        type: String,
    },
    courseType: {
        type: String,
    },
    semester: {
        type: String,
    },
    module: {
        type: String,
    },
    oldModule: {
        type: String,
    },
    moduleId: {
        type: String,
    },
    moduleProgram: {
        type: String,
    },
    moduleSemester: {
        type: Number,
    },
    moduleNum: {
        type: Number,
    },
    courseTitle: {
        type: String,
    },
    courseNumber: {
        type: String,
    },
    forWhom: {
        type: String,
    },
    weekday: {
        type: String,
        enum: ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'TBA'],
    },
    weekdayB: {
        type: String,
        enum: ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'TBA'],
    },
    time: {
        type: String,
    },
    timeB: {
        type: String,
    },
    room: {
        type: String,
    },
    roomB: {
        type: String,
    },
    firstMeet: {
        type: Date,
    },
    firstMeetB: {
        type: Date,
    },
    email: {
        type: String,
    },
    opal: {
        type: String,
    },
    info: {
        type: String,
    },
    registrationInfo: {
        type: String,
    },
    description: {
        type: String,
    },
    objectives: {
        type: String,
    },
    objectivesList: {
        type: [String],
    },
    prerecs: {
        type: String,
    },
    requirements: {
        type: String,
    },
    lit: {
        type: String,
    },
    litList: {
        type: [String],
    },
    semesterNoSpace: {
        type: String,
    },
    lastName: {
        type: String,
    },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
