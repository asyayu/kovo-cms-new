const axios = require('axios');
const Course = require("../models/course");
const {semesters, semSansSpace} = require('../config/data');

module.exports = {
    getIndex: (req, res) => {
        res.render('home/index.ejs', {title: 'KoVo CMS'});
    },
    getKoVo: async (req, res) => {
        try {
            const diffModules = [];
            const courses = await Course.find({}).sort('courseNumber');
            for (let course of courses) {
                diffModules.push(course.module);
            }
            let uniqueModules = [...new Set(diffModules)];
            uniqueModules.sort();
            res.render('home/kovo.ejs', {courses, semesters, uniqueModules, semSansSpace, title: 'All Courses'})
        } catch (err) {
            console.log(err);
            res.render('error', {err, title: 'Error'});
        }
    },
    getHTML: async (req, res) => {
        const html = await axios.get('http://localhost:4000/kovo');
        const htmlCode = html.data.replace(/\s+/g, ' ');
        res.render('home/publish.ejs', {htmlCode, title: 'Download HTML'});
    }
};