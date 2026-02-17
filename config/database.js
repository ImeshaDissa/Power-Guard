const mongoose = require('mongoose');

const connDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('mongoDB connected succesfully');
    } catch (err) {
        console.log('mongoDb connection failed', err);
        process.exit(1);
    }
};


module.exports = connDB;
