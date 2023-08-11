const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config({ path: './config/.env' });

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGO);
        console.log(`MONGOOSE CONNECTED TO KOVODB DATABASE`);
    } catch (err) {
        console.log(err);
        console.log('OH NO, MONGO CONNECTION ERROR!');
        process.exit(1);
    }
};

module.exports = connectDB;
