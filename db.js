const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const startDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected with mongoDB");
    } catch (err) {
        console.log('Error : ', err.message);
    }
};

const stopDatabase = async () => {
    try {
        await mongoose.disconnect();
        console.log('stopped');
    } catch (err) {
        console.log('Error : ', err.message);
    }
};

const isConnect = () => {
    return mongoose.connection.readyState === 1
}


module.exports = {
    startDatabase,
    stopDatabase,
    isConnect
}